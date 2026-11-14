import re

def test_mcq_options(filepath):
    with open(filepath, encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    ans_matches = list(re.finditer(r'Correct Answer\s*:\s*([^\n\r]+)', text))

    for i in range(len(ans_matches)):
        start_idx = ans_matches[i-1].end() if i > 0 else 0
        end_idx = ans_matches[i].start()
        chunk = text[start_idx:end_idx].strip()
        ans = ans_matches[i].group(1).strip()

        # find options
        opts = list(re.finditer(r'(?:^|\n)\s*([A-D])\.\s+', chunk))
        if len(opts) == 4:
            print(f"Q{i+1}: MCQ 4 options, ans: {ans}")
        elif len(opts) == 0:
            print(f"Q{i+1}: TITA 0 options, ans: {ans}")
        else:
            print(f"Q{i+1}: UNEXPECTED {len(opts)} options! ans: {ans}")

print("=== S1 VARC ===")
test_mcq_options('Scratch/CAT_2025_Slot_1_1776668540_6900b7fe.pdf.txt')
print("=== S2 VARC ===")
test_mcq_options('Scratch/CAT_2025_Slot_2_1776668558_902e937a.pdf.txt')
print("=== S1 LRDI ===")
test_mcq_options('Scratch/CAT_2024_Slot_1_1777468082_54ba5c5f.pdf.txt')
print("=== S2 LRDI ===")
test_mcq_options('Scratch/CAT_2024_Slot_2_1777468101_ed53e93c.pdf.txt')
