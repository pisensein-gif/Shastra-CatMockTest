with open('Scratch/CAT_2025_Slot_2_1776668558_902e937a.pdf.txt', encoding='utf-8') as f:
    text = f.read()

import re
text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
text = re.sub(r'--- PAGE \d+ ---', '', text)

ans_pos = [m.start() for m in re.finditer(r'Correct Answer\s*:', text)]
print(f"Total answers in S2 VARC: {len(ans_pos)}")
for i in range(len(ans_pos)):
    prev_start = ans_pos[i-1] + 15 if i > 0 else 0
    curr_end = ans_pos[i]
    chunk = text[prev_start:curr_end].strip()
    first_line = chunk.split('\n')[0] if chunk else ''
    last_line = chunk.split('\n')[-1] if chunk else ''
    print(f"Q{i+1}: first: '{first_line[:50]}' | last: '{last_line[:50]}'")

