import re, json

def clean_txt(t):
    if not t:
        return ""
    t = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', t)
    t = re.sub(r'--- PAGE \d+ ---', '', t)
    t = t.replace('\r', '')
    # clean multiple whitespace
    lines = [l.strip() for l in t.split('\n')]
    res = []
    for l in lines:
        if l:
            res.append(l)
        elif res and res[-1] != "":
            res.append("")
    return '\n'.join(res).strip()

def test_s1_varc():
    with open('Scratch/CAT_2025_Slot_1_1776668540_6900b7fe.pdf.txt', encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    text = re.sub(r'CAT 2025\s+Previous Year Paper\s+\(Slot 1 – VARC\)', '', text)

    ans_matches = list(re.finditer(r'Correct Answer\s*:\s*([^\n\r]+)', text))
    print(f"Slot 1 VARC found {len(ans_matches)} answers")

    # Let's inspect each question block between answers
    for i in range(len(ans_matches)):
        start_idx = ans_matches[i-1].end() if i > 0 else 0
        end_idx = ans_matches[i].start()
        chunk = text[start_idx:end_idx].strip()
        ans = ans_matches[i].group(1).strip()
        print(f"--- Q{i+1} (ans: {ans}) ---")
        lines = [l.strip() for l in chunk.split('\n') if l.strip()]
        # find where question starts
        q_start_match = re.search(r'(?:^|\n)\s*' + str(i+1) + r'\.\s+', chunk)
        if q_start_match:
            print(f"  Found '{i+1}.' at char {q_start_match.start()}")
        else:
            print(f"  WARNING: Could not find '{i+1}.' in chunk!")

test_s1_varc()
