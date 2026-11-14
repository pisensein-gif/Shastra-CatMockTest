with open('Scratch/CAT_2024_Slot_1_1777468082_54ba5c5f.pdf.txt', encoding='utf-8') as f:
    s1 = f.read()

import re
s1 = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', s1)
s1 = re.sub(r'--- PAGE \d+ ---', '', s1)

print("=== S1 Set 1 Intro (before Q1) ===")
print(s1[:700])
