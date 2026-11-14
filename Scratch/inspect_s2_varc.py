import re

with open('Scratch/CAT_2025_Slot_2_1776668558_902e937a.pdf.txt', encoding='utf-8') as f:
    text = f.read()

# find headings like "The passage below..." or "five jumbled sentences"
matches = re.finditer(r'(The passage below.*?four questions[^\n]*|five jumbled sentences|four sentences numbered|sentences numbered \([1-4]\)|paragraph.*?(summarise|summary))', text, re.IGNORECASE)
for m in matches:
    print(m.start(), m.group(0)[:80])

# also let's look at the first 30 chars of each question in S2 VARC
