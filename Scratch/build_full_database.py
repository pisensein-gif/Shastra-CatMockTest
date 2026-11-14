# -*- coding: utf-8 -*-
"""
Full extraction script for all 6 CAT PDFs into structured questions database.
Outputs:
  - Scratch/cat_questions_all.json
  - src/data/catOfficialQuestions.js
"""

import re
import json
import os

def clean_txt(t):
    if not t:
        return ""
    t = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', t)
    t = re.sub(r'--- PAGE \d+ ---', '', t)
    t = t.replace('\r', '')
    # replace multiple spaces and tabs with single space
    lines = [re.sub(r'[ \t]+', ' ', l).strip() for l in t.split('\n')]
    res = []
    for l in lines:
        if l:
            res.append(l)
        elif res and res[-1] != "":
            res.append("")
    return '\n'.join(res).strip()

def parse_varc_file(filepath, slot_num):
    with open(filepath, encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    text = re.sub(rf'CAT 2025\s+Previous Year Paper\s+\(Slot {slot_num} – VARC\)', '', text)

    ans_matches = list(re.finditer(r'Correct Answer\s*:\s*([^\n\r]+)', text))
    assert len(ans_matches) == 24, f"Slot {slot_num} VARC expected 24 answers, found {len(ans_matches)}"

    questions = []
    current_passage = ""
    current_passage_title = ""
    current_set_id = ""

    for i in range(24):
        qnum = i + 1
        start_idx = ans_matches[i-1].end() if i > 0 else 0
        end_idx = ans_matches[i].start()
        chunk = text[start_idx:end_idx].strip()
        ans_raw = ans_matches[i].group(1).strip()

        # Find question number start e.g. "1. " or "2. "
        q_start_match = re.search(r'(?:^|\n)\s*' + str(qnum) + r'\.\s+', chunk)
        assert q_start_match is not None, f"Could not find '{qnum}.' in chunk for Q{qnum}"

        pre_q_text = chunk[:q_start_match.start()].strip()
        q_content = chunk[q_start_match.end():].strip()

        # Check if pre_q_text contains a new passage
        if pre_q_text and ("passage below is accompanied" in pre_q_text.lower() or len(pre_q_text) > 300):
            # Clean passage text
            passage_lines = [l.strip() for l in pre_q_text.split('\n') if l.strip()]
            title = ""
            p_body = []
            for l in passage_lines:
                if "passage below is accompanied" in l.lower() or "accompanied by four questions" in l.lower():
                    title = l
                else:
                    p_body.append(l)
            current_passage_title = title if title else "Reading Comprehension Passage"
            current_passage = clean_txt('\n'.join(p_body))
            current_set_id = f"S{slot_num}_RC_{qnum}"

        # If question is not part of a 4-question RC block, reset or classify as VA
        is_rc = False
        if slot_num == 1:
            # S1 RC blocks: Q1-4, Q9-12, Q17-20, Q21-24
            if (1 <= qnum <= 4) or (9 <= qnum <= 12) or (17 <= qnum <= 20) or (21 <= qnum <= 24):
                is_rc = True
        else:
            # S2 RC blocks: Q8-11, Q12-15, Q17-20, Q21-24
            if (8 <= qnum <= 11) or (12 <= qnum <= 15) or (17 <= qnum <= 20) or (21 <= qnum <= 24):
                is_rc = True

        if not is_rc:
            current_passage = ""
            current_passage_title = ""
            current_set_id = f"S{slot_num}_VA_{qnum}"

        # Options pattern
        opt_matches = list(re.finditer(r'(?:^|\n)\s*([A-D])\.\s+', q_content))
        options = []
        q_text = ""
        q_type = "MCQ"

        if len(opt_matches) == 4:
            q_text = clean_txt(q_content[:opt_matches[0].start()])
            for opt_i in range(4):
                o_start = opt_matches[opt_i].end()
                o_end = opt_matches[opt_i+1].start() if opt_i < 3 else len(q_content)
                options.append(clean_txt(q_content[o_start:o_end]))
            
            if ans_raw in ['A', 'B', 'C', 'D']:
                correct_answer = ord(ans_raw) - ord('A')
            else:
                correct_answer = ans_raw
        else:
            # TITA
            q_type = "TITA"
            q_text = clean_txt(q_content)
            correct_answer = ans_raw

        # Classify subtopic
        subtopic = "Reading Comprehension" if is_rc else "Verbal Ability"
        if not is_rc:
            lower_text = (pre_q_text + " " + q_text).lower()
            if "jumbled" in lower_text or "parajumble" in lower_text:
                subtopic = "Parajumble"
            elif "summarise" in lower_text or "summary" in lower_text:
                subtopic = "Paragraph Summary"
            elif "sentence that is missing" in lower_text or "missing sentence" in lower_text or "placement" in lower_text:
                subtopic = "Sentence Placement"
            elif "odd" in lower_text or "does not fit" in lower_text or "does not contribute" in lower_text:
                subtopic = "Odd One Out"

        q_item = {
            "id": f"S{slot_num}_VARC_{qnum}",
            "slot": slot_num,
            "section": "VARC",
            "questionNumber": qnum,
            "type": q_type,
            "subtopic": subtopic,
            "setId": current_set_id,
            "marks": {"correct": 3, "negative": -1 if q_type == "MCQ" else 0},
            "passageTitle": current_passage_title if is_rc else None,
            "passage": current_passage if is_rc else None,
            "questionText": q_text,
            "options": options,
            "correctAnswer": correct_answer,
            "explanation": f"Official CAT answer: {ans_raw}."
        }
        questions.append(q_item)

    return questions

def parse_dilr_file(filepath, slot_num):
    with open(filepath, encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    text = re.sub(rf'CAT 2024\s+Previous Year Paper\s+\(Slot {slot_num} – LRDI\)', '', text)

    ans_matches = list(re.finditer(r'Correct Answer\s*:\s*([^\n\r]*)', text))
    assert len(ans_matches) == 22, f"Slot {slot_num} LRDI expected 22 answers, found {len(ans_matches)}"

    # Map of diagram images for sets
    diagram_map = {
        (1, 1): "/src/assets/questions/slot1_lrdi_stars.png",       # S1 Set 1: Bloggers and Stars
        (1, 2): "/src/assets/questions/slot1_lrdi_countries.png",   # S1 Set 2: Countries visited
        (1, 4): "/src/assets/questions/slot1_lrdi_candlestick.png", # S1 Set 4: Candlestick plot
        (2, 1): "/src/assets/questions/slot2_lrdi_walkways.png",    # S2 Set 1: Walkways and lakes
        (2, 4): "/src/assets/questions/slot2_lrdi_ratings.png",     # S2 Set 4: Buyer ratings
        (2, 5): "/src/assets/questions/slot2_lrdi_firms.png",       # S2 Set 5: Six firms PAT & R&D
    }

    # Set boundaries:
    # Slot 1: Set 1 (Q1-4), Set 2 (Q5-8), Set 3 (Q9-13), Set 4 (Q14-17), Set 5 (Q18-22)
    # Slot 2: Set 1 (Q1-4), Set 2 (Q5-9), Set 3 (Q10-14), Set 4 (Q15-18), Set 5 (Q19-22)
    def get_set_index(qnum):
        if slot_num == 1:
            if 1 <= qnum <= 4: return 1
            if 5 <= qnum <= 8: return 2
            if 9 <= qnum <= 13: return 3
            if 14 <= qnum <= 17: return 4
            return 5
        else:
            if 1 <= qnum <= 4: return 1
            if 5 <= qnum <= 9: return 2
            if 10 <= qnum <= 14: return 3
            if 15 <= qnum <= 18: return 4
            return 5

    questions = []
    current_passage = ""
    current_passage_title = ""
    current_diagram = None

    for i in range(22):
        qnum = i + 1
        set_idx = get_set_index(qnum)
        start_idx = ans_matches[i-1].end() if i > 0 else 0
        end_idx = ans_matches[i].start()
        chunk = text[start_idx:end_idx].strip()
        ans_raw = ans_matches[i].group(1).strip()
        if slot_num == 1 and qnum == 13:
            ans_raw = "5" # Official CAT answer

        q_start_match = re.search(r'(?:^|\n)\s*' + str(qnum) + r'\.\s+', chunk)
        assert q_start_match is not None, f"Could not find '{qnum}.' in chunk for Q{qnum}"

        pre_q_text = chunk[:q_start_match.start()].strip()
        q_content = chunk[q_start_match.end():].strip()

        # If new set starts
        is_first_in_set = False
        if slot_num == 1 and qnum in [1, 5, 9, 14, 18]:
            is_first_in_set = True
        elif slot_num == 2 and qnum in [1, 5, 10, 15, 19]:
            is_first_in_set = True

        if is_first_in_set:
            current_passage = clean_txt(pre_q_text)
            current_passage_title = f"Data Interpretation & Logical Reasoning - Set {set_idx}"
            current_diagram = diagram_map.get((slot_num, set_idx), None)

        opt_matches = list(re.finditer(r'(?:^|\n)\s*([A-D])\.\s+', q_content))
        options = []
        q_text = ""
        q_type = "MCQ"

        if len(opt_matches) == 4:
            q_text = clean_txt(q_content[:opt_matches[0].start()])
            for opt_i in range(4):
                o_start = opt_matches[opt_i].end()
                o_end = opt_matches[opt_i+1].start() if opt_i < 3 else len(q_content)
                options.append(clean_txt(q_content[o_start:o_end]))
            
            if ans_raw in ['A', 'B', 'C', 'D']:
                correct_answer = ord(ans_raw) - ord('A')
            else:
                correct_answer = ans_raw
        else:
            # TITA
            q_type = "TITA"
            q_text = clean_txt(q_content)
            correct_answer = ans_raw

        q_item = {
            "id": f"S{slot_num}_DILR_{qnum}",
            "slot": slot_num,
            "section": "DILR",
            "questionNumber": qnum,
            "type": q_type,
            "subtopic": "Data Interpretation & Logical Reasoning",
            "setId": f"S{slot_num}_LRDI_SET_{set_idx}",
            "marks": {"correct": 3, "negative": -1 if q_type == "MCQ" else 0},
            "passageTitle": current_passage_title,
            "passage": current_passage,
            "diagramUrl": current_diagram,
            "questionText": q_text,
            "options": options,
            "correctAnswer": correct_answer,
            "explanation": f"Official CAT answer: {ans_raw}."
        }
        questions.append(q_item)

    return questions

def parse_qa_file(filepath, slot_num):
    with open(filepath, encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    text = re.sub(rf'CAT 2025\s+Previous Year Paper\s+\(Slot {slot_num} – QA\)', '', text)

    q_indices = []
    for m in re.finditer(r'(?:^|\n)\s*(\d+)\.\s+', text):
        num = int(m.group(1))
        if not q_indices or num == q_indices[-1][0] + 1:
            q_indices.append((num, m.start(), m.end()))

    assert len(q_indices) == 22, f"Slot {slot_num} QA expected 22 questions, found {len(q_indices)}"

    questions = []
    for idx, (qnum, start, qtext_start) in enumerate(q_indices):
        end = q_indices[idx + 1][1] if idx + 1 < len(q_indices) else len(text)
        chunk = text[qtext_start:end].strip()

        ans_match = re.search(r'Correct Answer\s*:\s*([^\n\r]+)', chunk)
        ans_raw = ans_match.group(1).strip() if ans_match else ""
        before_ans = chunk[:ans_match.start()].strip() if ans_match else chunk

        opt_matches = list(re.finditer(r'(?:^|\n)\s*([A-D])\.\s+', before_ans))
        options = []
        q_text = ""
        q_type = "MCQ"

        if len(opt_matches) == 4:
            q_text = clean_txt(before_ans[:opt_matches[0].start()])
            for i in range(4):
                opt_start = opt_matches[i].end()
                opt_end = opt_matches[i+1].start() if i < 3 else len(before_ans)
                options.append(clean_txt(before_ans[opt_start:opt_end]))
            
            if ans_raw in ['A', 'B', 'C', 'D']:
                correct_answer = ord(ans_raw) - ord('A')
            else:
                matched = False
                for i, opt in enumerate(options):
                    if opt == ans_raw or opt.startswith(ans_raw):
                        correct_answer = i
                        matched = True
                        break
                if not matched:
                    m = re.match(r'^([A-D])', ans_raw)
                    correct_answer = ord(m.group(1)) - ord('A') if m else ans_raw
        else:
            q_type = "TITA"
            q_text = clean_txt(before_ans)
            correct_answer = ans_raw

        # Classify subtopic
        low = q_text.lower()
        if any(w in low for w in ["circle", "triangle", "perimeter", "diagonal", "area", "tangent", "angle", "radius"]):
            subtopic = "Geometry & Mensuration"
        elif any(w in low for w in ["prime", "digits", "remainder", "integer roots", "divisible", "factors"]):
            subtopic = "Number System"
        elif any(w in low for w in ["ratio", "percent", "interest", "profit", "loss", "work", "time", "speed", "distance", "mixture", "average"]):
            subtopic = "Arithmetic"
        elif any(w in low for w in ["polynomial", "equation", "function", "log", "inequality", "roots", "maximum", "minimum"]):
            subtopic = "Algebra"
        else:
            subtopic = "Quantitative Aptitude"

        q_item = {
            "id": f"S{slot_num}_QA_{qnum}",
            "slot": slot_num,
            "section": "QA",
            "questionNumber": qnum,
            "type": q_type,
            "subtopic": subtopic,
            "setId": f"S{slot_num}_QA_SINGLE",
            "marks": {"correct": 3, "negative": -1 if q_type == "MCQ" else 0},
            "passageTitle": None,
            "passage": None,
            "diagramUrl": None,
            "questionText": q_text,
            "options": options,
            "correctAnswer": correct_answer,
            "explanation": f"Official CAT answer: {ans_raw}."
        }
        questions.append(q_item)

    return questions

def run_extraction():
    print("Extracting Slot 1 VARC...")
    s1_varc = parse_varc_file('Scratch/CAT_2025_Slot_1_1776668540_6900b7fe.pdf.txt', 1)
    print("Extracting Slot 1 DILR...")
    s1_dilr = parse_dilr_file('Scratch/CAT_2024_Slot_1_1777468082_54ba5c5f.pdf.txt', 1)
    print("Extracting Slot 1 QA...")
    s1_qa = parse_qa_file('Scratch/CAT_2025_Slot_1_1776853665_803e4dd6.pdf.txt', 1)

    print("Extracting Slot 2 VARC...")
    s2_varc = parse_varc_file('Scratch/CAT_2025_Slot_2_1776668558_902e937a.pdf.txt', 2)
    print("Extracting Slot 2 DILR...")
    s2_dilr = parse_dilr_file('Scratch/CAT_2024_Slot_2_1777468101_ed53e93c.pdf.txt', 2)
    print("Extracting Slot 2 QA...")
    s2_qa = parse_qa_file('Scratch/CAT_2025_Slot_2_1776853588_6250b3dd.pdf.txt', 2)

    slot1 = s1_varc + s1_dilr + s1_qa
    slot2 = s2_varc + s2_dilr + s2_qa
    all_questions = slot1 + slot2

    print(f"\nExtraction Summary:")
    print(f"Slot 1: {len(s1_varc)} VARC + {len(s1_dilr)} DILR + {len(s1_qa)} QA = {len(slot1)} questions")
    print(f"Slot 2: {len(s2_varc)} VARC + {len(s2_dilr)} DILR + {len(s2_qa)} QA = {len(slot2)} questions")
    print(f"Total Questions in Question Bank: {len(all_questions)}")

    # Validation checks
    assert len(slot1) == 68, f"Slot 1 should be 68 Qs, got {len(slot1)}"
    assert len(slot2) == 68, f"Slot 2 should be 68 Qs, got {len(slot2)}"
    assert len(all_questions) == 136, f"Total should be 136 Qs, got {len(all_questions)}"

    # Save to JSON
    with open('Scratch/cat_questions_all.json', 'w', encoding='utf-8') as f:
        json.dump({
            "totalQuestions": len(all_questions),
            "slot1Questions": slot1,
            "slot2Questions": slot2,
            "allQuestions": all_questions
        }, f, indent=2, ensure_ascii=False)
    print("Saved to Scratch/cat_questions_all.json")

    # Generate ES6 module: src/data/catOfficialQuestions.js
    js_content = "// =====================================================================\n"
    js_content += "// OFFICIAL CAT QUESTION BANK (Extracted from 2024 & 2025 Official Papers)\n"
    js_content += f"// Total Questions: {len(all_questions)} | Slot 1: 68 | Slot 2: 68\n"
    js_content += "// Sections: VARC (24), DILR (22), QA (22) per Slot\n"
    js_content += "// =====================================================================\n\n"

    # Diagrams import
    js_content += "import s1_stars from '../assets/questions/slot1_lrdi_stars.png';\n"
    js_content += "import s1_countries from '../assets/questions/slot1_lrdi_countries.png';\n"
    js_content += "import s1_candlestick from '../assets/questions/slot1_lrdi_candlestick.png';\n"
    js_content += "import s2_walkways from '../assets/questions/slot2_lrdi_walkways.png';\n"
    js_content += "import s2_ratings from '../assets/questions/slot2_lrdi_ratings.png';\n"
    js_content += "import s2_firms from '../assets/questions/slot2_lrdi_firms.png';\n\n"

    js_content += "export const DIAGRAM_MAP = {\n"
    js_content += "  '/src/assets/questions/slot1_lrdi_stars.png': s1_stars,\n"
    js_content += "  '/src/assets/questions/slot1_lrdi_countries.png': s1_countries,\n"
    js_content += "  '/src/assets/questions/slot1_lrdi_candlestick.png': s1_candlestick,\n"
    js_content += "  '/src/assets/questions/slot2_lrdi_walkways.png': s2_walkways,\n"
    js_content += "  '/src/assets/questions/slot2_lrdi_ratings.png': s2_ratings,\n"
    js_content += "  '/src/assets/questions/slot2_lrdi_firms.png': s2_firms,\n"
    js_content += "};\n\n"

    # Export slot1 and slot2 and question bank
    def serialize_q(q):
        # replace diagramUrl string with diagram mapping lookup or direct
        return json.dumps(q, ensure_ascii=False, indent=2)

    js_content += "export const officialSlot1Questions = " + json.dumps(slot1, ensure_ascii=False, indent=2) + ";\n\n"
    js_content += "export const officialSlot2Questions = " + json.dumps(slot2, ensure_ascii=False, indent=2) + ";\n\n"
    js_content += "export const officialCatQuestionsBank = " + json.dumps(all_questions, ensure_ascii=False, indent=2) + ";\n\n"

    # Attach diagram imports dynamically to ensure bundler (Vite) packages the images correctly
    js_content += """
// Attach resolved diagram URLs
[...officialSlot1Questions, ...officialSlot2Questions, ...officialCatQuestionsBank].forEach(q => {
  if (q.diagramUrl && DIAGRAM_MAP[q.diagramUrl]) {
    q.diagramUrl = DIAGRAM_MAP[q.diagramUrl];
  }
});
"""

    with open('src/data/catOfficialQuestions.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Saved to src/data/catOfficialQuestions.js")

if __name__ == '__main__':
    run_extraction()
