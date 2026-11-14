import re, json

def clean_str(s):
    if not s:
        return ""
    s = s.replace('\r', '')
    # replace multiple spaces/tabs
    s = re.sub(r'[ \t]+', ' ', s)
    return s.strip()

def parse_quant_file(filepath, slot_num):
    with open(filepath, encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    text = re.sub(r'CAT 2025\s+Previous Year Paper\s+\(Slot \d+ – QA\)', '', text)

    # Questions are numbered 1. to 22. followed by text, options, and Correct Answer : <val>
    # Let's split by regex matching question start: `\n\s*(\d+)\.\s+`
    # Or find all question blocks
    q_indices = []
    for m in re.finditer(r'(?:^|\n)\s*(\d+)\.\s+', text):
        num = int(m.group(1))
        # only accept if num matches expected next question
        if not q_indices or num == q_indices[-1][0] + 1:
            q_indices.append((num, m.start(), m.end()))

    print(f"Slot {slot_num} QA found {len(q_indices)} question starts: {[q[0] for q in q_indices]}")

    questions = []
    for idx, (qnum, start, qtext_start) in enumerate(q_indices):
        end = q_indices[idx + 1][1] if idx + 1 < len(q_indices) else len(text)
        chunk = text[qtext_start:end].strip()

        # Extract Correct Answer
        ans_match = re.search(r'Correct Answer\s*:\s*([^\n\r]+)', chunk)
        ans_raw = ans_match.group(1).strip() if ans_match else ""
        
        # Remove Correct Answer line from chunk to get question and options
        before_ans = chunk[:ans_match.start()].strip() if ans_match else chunk

        # Check for options A., B., C., D.
        # Find options pattern
        opt_pattern = r'(?:^|\n)\s*([A-D])\.\s+'
        opt_matches = list(re.finditer(opt_pattern, before_ans))

        options = []
        q_text = ""
        q_type = "MCQ"

        if len(opt_matches) == 4:
            q_text = clean_str(before_ans[:opt_matches[0].start()])
            for i in range(4):
                opt_start = opt_matches[i].end()
                opt_end = opt_matches[i+1].start() if i < 3 else len(before_ans)
                opt_text = clean_str(before_ans[opt_start:opt_end])
                options.append(opt_text)
        else:
            # TITA question (no 4 options)
            q_text = clean_str(before_ans)
            q_type = "TITA"

        # Determine correct answer index or value
        correct_answer = None
        if q_type == "MCQ":
            # If ans_raw is A, B, C, D
            if ans_raw in ['A', 'B', 'C', 'D']:
                correct_answer = ord(ans_raw) - ord('A')
            else:
                # Match against options text
                matched = False
                for i, opt in enumerate(options):
                    if opt == ans_raw or opt.startswith(ans_raw):
                        correct_answer = i
                        matched = True
                        break
                if not matched:
                    # check if ans_raw contains one of A, B, C, D
                    m = re.match(r'^([A-D])', ans_raw)
                    if m:
                        correct_answer = ord(m.group(1)) - ord('A')
                    else:
                        print(f"Warning: Could not match MCQ answer '{ans_raw}' in Q{qnum}")
                        correct_answer = ans_raw
        else:
            # TITA
            correct_answer = ans_raw

        q_obj = {
            "id": f"S{slot_num}_QA_{qnum}",
            "slot": slot_num,
            "section": "QA",
            "questionNumber": qnum,
            "type": q_type,
            "marks": {"correct": 3, "negative": -1 if q_type == "MCQ" else 0},
            "questionText": q_text,
            "options": options,
            "correctAnswer": correct_answer,
            "ansRaw": ans_raw
        }
        questions.append(q_obj)

    return questions

s1_qa = parse_quant_file('Scratch/CAT_2025_Slot_1_1776853665_803e4dd6.pdf.txt', 1)
s2_qa = parse_quant_file('Scratch/CAT_2025_Slot_2_1776853588_6250b3dd.pdf.txt', 2)

for q in s1_qa:
    print(f"S1 Q{q['questionNumber']} [{q['type']}]: ans={q['correctAnswer']} (raw: '{q['ansRaw']}') | options={len(q['options'])}")
for q in s2_qa:
    print(f"S2 Q{q['questionNumber']} [{q['type']}]: ans={q['correctAnswer']} (raw: '{q['ansRaw']}') | options={len(q['options'])}")

