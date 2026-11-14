with open('Scratch/CAT_2024_Slot_2_1777468101_ed53e93c.pdf.txt', encoding='utf-8') as f:
    text = f.read()

import re
text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
text = re.sub(r'--- PAGE \d+ ---', '', text)

ans_pos = [m.start() for m in re.finditer(r'Correct Answer\s*:', text)]
print("Between Q4 and Q5:")
print(text[ans_pos[3]+15:ans_pos[4]])

print("\nBetween Q9 and Q10:")
print(text[ans_pos[8]+15:ans_pos[9]])

print("\nBetween Q14 and Q15:")
print(text[ans_pos[13]+15:ans_pos[14]])

print("\nBetween Q18 and Q19:")
print(text[ans_pos[17]+15:ans_pos[18]])
