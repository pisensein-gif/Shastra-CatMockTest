with open('Scratch/CAT_2024_Slot_1_1777468082_54ba5c5f.pdf.txt', encoding='utf-8') as f:
    text = f.read()

import re
text = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', text)
text = re.sub(r'--- PAGE \d+ ---', '', text)

# find all question starts 1. to 22.
# Note: within questions there might be numbered statements like 1., 2.
# But let's check between Q4 and Q5
ans_pos = [m.start() for m in re.finditer(r'Correct Answer\s*:', text)]
print("Between Q4 and Q5:")
print(text[ans_pos[3]+15:ans_pos[4]])

print("\nBetween Q8 and Q9:")
print(text[ans_pos[7]+15:ans_pos[8]])

print("\nBetween Q13 and Q14:")
print(text[ans_pos[12]+15:ans_pos[13]])

print("\nBetween Q17 and Q18:")
print(text[ans_pos[16]+15:ans_pos[17]])
