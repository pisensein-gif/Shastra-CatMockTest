import re

def inspect_dilr(filepath, slot_num):
    with open(filepath, encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    text = re.sub(r'CAT 2024\s+Previous Year Paper\s+\(Slot \d+ – LRDI\)', '', text)

    print(f"=== Inspecting Slot {slot_num} LRDI ===")
    
    # Check all lines with numbers followed by dot and question marks or choices
    ans_matches = list(re.finditer(r'Correct Answer\s*:\s*([^\n\r]*)', text))
    print(f"Total Correct Answer lines: {len(ans_matches)}")
    for i, a in enumerate(ans_matches):
        print(f"Q{i+1}: pos {a.start()}, ans: '{a.group(1).strip()}'")

inspect_dilr('Scratch/CAT_2024_Slot_1_1777468082_54ba5c5f.pdf.txt', 1)
inspect_dilr('Scratch/CAT_2024_Slot_2_1777468101_ed53e93c.pdf.txt', 2)
