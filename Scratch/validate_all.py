import json

with open('Scratch/cat_questions_all.json', encoding='utf-8') as f:
    data = json.load(f)

all_q = data['allQuestions']
print(f"Total questions loaded: {len(all_q)}")

errors = []
for q in all_q:
    qid = q['id']
    if not q['questionText']:
        errors.append(f"{qid}: Empty questionText")
    if q['type'] == 'MCQ':
        if len(q['options']) != 4:
            errors.append(f"{qid}: MCQ doesn't have 4 options (has {len(q['options'])})")
        if q['correctAnswer'] not in [0, 1, 2, 3]:
            errors.append(f"{qid}: Invalid MCQ correctAnswer '{q['correctAnswer']}'")
        for i, opt in enumerate(q['options']):
            if not opt.strip():
                errors.append(f"{qid}: Empty option {i}")
    elif q['type'] == 'TITA':
        if len(q['options']) != 0:
            errors.append(f"{qid}: TITA has non-empty options")
        if str(q['correctAnswer']).strip() == "":
            errors.append(f"{qid}: Empty TITA correctAnswer")

    if q['section'] == 'VARC' and q['subtopic'] == 'Reading Comprehension':
        if not q['passage']:
            errors.append(f"{qid}: RC question missing passage")

    if q['section'] == 'DILR':
        if not q['passage']:
            errors.append(f"{qid}: DILR question missing passage")

if not errors:
    print("ALL 136 QUESTIONS PASSED VALIDATION WITH ZERO ERRORS!")
else:
    print(f"Found {len(errors)} errors:")
    for e in errors[:20]:
        print(" -", e)

# Summary of stats
mcqs = [q for q in all_q if q['type'] == 'MCQ']
titas = [q for q in all_q if q['type'] == 'TITA']
print(f"Total MCQs: {len(mcqs)}, Total TITAs: {len(titas)}")
for sec in ['VARC', 'DILR', 'QA']:
    s1_cnt = len([q for q in data['slot1Questions'] if q['section'] == sec])
    s2_cnt = len([q for q in data['slot2Questions'] if q['section'] == sec])
    print(f"Section {sec}: Slot 1 = {s1_cnt}, Slot 2 = {s2_cnt}")
