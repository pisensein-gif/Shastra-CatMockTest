import json
import random

with open('Scratch/cat_questions_all.json', encoding='utf-8') as f:
    db = json.load(f)

all_q = db['allQuestions']

def generate_random_cat_paper(seed=None):
    if seed:
        random.seed(seed)

    # 1. VARC: 4 RC passages (16 Qs) + 8 VA questions = 24 Qs
    varc_all = [q for q in all_q if q['section'] == 'VARC']
    
    # Group RC questions by setId
    rc_sets = {}
    va_questions = []
    for q in varc_all:
        if q['subtopic'] == 'Reading Comprehension':
            s_id = q['setId']
            if s_id not in rc_sets:
                rc_sets[s_id] = []
            rc_sets[s_id].append(q)
        else:
            va_questions.append(q)

    # Pick 4 distinct RC passages out of available (there are 8)
    chosen_rc_keys = random.sample(list(rc_sets.keys()), 4)
    selected_rc_qs = []
    for k in chosen_rc_keys:
        selected_rc_qs.extend(rc_sets[k])
    
    # Pick 8 VA questions out of available (there are 16)
    # Ensure variety of subtopics
    subtopic_map = {}
    for q in va_questions:
        st = q['subtopic']
        if st not in subtopic_map:
            subtopic_map[st] = []
        subtopic_map[st].append(q)
    
    selected_va_qs = []
    # Pick 2 from each of Parajumble, Paragraph Summary, Sentence Placement, Odd One Out
    for st, q_list in subtopic_map.items():
        sample_k = min(2, len(q_list))
        selected_va_qs.extend(random.sample(q_list, sample_k))
    # If less than 8, fill from remaining
    if len(selected_va_qs) < 8:
        remaining = [q for q in va_questions if q not in selected_va_qs]
        selected_va_qs.extend(random.sample(remaining, 8 - len(selected_va_qs)))

    # In CAT, RC passages and VA questions are interleaved or grouped
    # Let's place 2 RC passages, then 4 VA, then 2 RC passages, then 4 VA (classic CAT pattern)
    rc_chunks = [selected_rc_qs[0:4], selected_rc_qs[4:8], selected_rc_qs[8:12], selected_rc_qs[12:16]]
    random.shuffle(rc_chunks)
    random.shuffle(selected_va_qs)

    final_varc = rc_chunks[0] + rc_chunks[1] + selected_va_qs[0:4] + rc_chunks[2] + rc_chunks[3] + selected_va_qs[4:8]
    assert len(final_varc) == 24

    # 2. DILR: 5 complete sets totaling 22 questions (two 5-Q sets and three 4-Q sets)
    dilr_all = [q for q in all_q if q['section'] == 'DILR']
    dilr_sets = {}
    for q in dilr_all:
        s_id = q['setId']
        if s_id not in dilr_sets:
            dilr_sets[s_id] = []
        dilr_sets[s_id].append(q)

    sets_5q = [s for s in dilr_sets.values() if len(s) == 5]
    sets_4q = [s for s in dilr_sets.values() if len(s) == 4]

    chosen_5q = random.sample(sets_5q, 2) # 2 * 5 = 10
    chosen_4q = random.sample(sets_4q, 3) # 3 * 4 = 12
    chosen_dilr_sets = chosen_5q + chosen_4q
    random.shuffle(chosen_dilr_sets)

    final_dilr = []
    for s in chosen_dilr_sets:
        final_dilr.extend(s)
    assert len(final_dilr) == 22

    # 3. QA: 22 questions from QA pool
    qa_all = [q for q in all_q if q['section'] == 'QA']
    # Balance topics
    qa_mcq = [q for q in qa_all if q['type'] == 'MCQ']
    qa_tita = [q for q in qa_all if q['type'] == 'TITA']

    # Official ratio: ~14 MCQ, 8 TITA
    final_qa = random.sample(qa_mcq, 14) + random.sample(qa_tita, 8)
    random.shuffle(final_qa)
    assert len(final_qa) == 22

    # Renumber questions
    paper = []
    for i, q in enumerate(final_varc):
        q_copy = dict(q)
        q_copy['questionNumber'] = i + 1
        q_copy['globalNumber'] = i + 1
        paper.append(q_copy)

    for i, q in enumerate(final_dilr):
        q_copy = dict(q)
        q_copy['questionNumber'] = i + 1
        q_copy['globalNumber'] = 24 + i + 1
        paper.append(q_copy)

    for i, q in enumerate(final_qa):
        q_copy = dict(q)
        q_copy['questionNumber'] = i + 1
        q_copy['globalNumber'] = 46 + i + 1
        paper.append(q_copy)

    print(f"Generated test with {len(paper)} questions: VARC={len(final_varc)}, DILR={len(final_dilr)}, QA={len(final_qa)}")
    return paper

# Test 5 iterations
for s in range(5):
    p = generate_random_cat_paper(seed=s)
