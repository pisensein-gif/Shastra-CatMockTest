with open('Scratch/CAT_2024_Slot_2_1777468101_ed53e93c.pdf.txt', encoding='utf-8') as f:
    text = f.read()

import re
pages = text.split('--- PAGE ')
for p in pages[1:]:
    lines = [l.strip() for l in p.split('\n') if l.strip()]
    header = lines[0] if lines else ''
    first_few = [l for l in lines[1:8] if not 'mbapathshala' in l and not 'CAT 2024' in l and not 'Slot' in l]
    print('PAGE header:', header[:30])
    print('First lines:', first_few[:3])
    print('-'*50)

