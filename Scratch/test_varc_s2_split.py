import re

def test_s2_varc():
    with open('Scratch/CAT_2025_Slot_2_1776668558_902e937a.pdf.txt', encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    text = re.sub(r'CAT 2025\s+Previous Year Paper\s+\(Slot 2 – VARC\)', '', text)

    ans_matches = list(re.finditer(r'Correct Answer\s*:\s*([^\n\r]+)', text))
    print(f"Slot 2 VARC found {len(ans_matches)} answers")

    for i in range(len(ans_matches)):
        start_idx = ans_matches[i-1].end() if i > 0 else 0
        end_idx = ans_matches[i].start()
        chunk = text[start_idx:end_idx].strip()
        ans = ans_matches[i].group(1).strip()
        q_start_match = re.search(r'(?:^|\n)\s*' + str(i+1) + r'\.\s+', chunk)
        if q_start_match:
            print(f"Q{i+1}: ans={ans} | char {q_start_match.start()}")
        else:
            print(f"Q{i+1}: ans={ans} | WARNING: '{i+1}.' not found! First 60 chars: {chunk[:60]}")

test_s2_varc()

