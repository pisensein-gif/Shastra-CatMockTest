import re

def test_dilr_split(filepath, slot_num):
    with open(filepath, encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    text = re.sub(r'CAT 2024\s+Previous Year Paper\s+\(Slot \d+ – LRDI\)', '', text)

    ans_matches = list(re.finditer(r'Correct Answer\s*:\s*([^\n\r]*)', text))
    print(f"Slot {slot_num} LRDI found {len(ans_matches)} answers")

    for i in range(len(ans_matches)):
        start_idx = ans_matches[i-1].end() if i > 0 else 0
        end_idx = ans_matches[i].start()
        chunk = text[start_idx:end_idx].strip()
        ans = ans_matches[i].group(1).strip()
        # Q13 in Slot 1 LRDI has blank answer in text, answer is '5'
        if slot_num == 1 and i == 12:
            ans = '5'
        q_start_match = re.search(r'(?:^|\n)\s*' + str(i+1) + r'\.\s+', chunk)
        if q_start_match:
            print(f"Q{i+1}: ans={ans[:20]} | char {q_start_match.start()}")
        else:
            print(f"Q{i+1}: ans={ans[:20]} | WARNING: '{i+1}.' not found! First 60 chars: {chunk[:60]}")

test_dilr_split('Scratch/CAT_2024_Slot_1_1777468082_54ba5c5f.pdf.txt', 1)
test_dilr_split('Scratch/CAT_2024_Slot_2_1777468101_ed53e93c.pdf.txt', 2)
