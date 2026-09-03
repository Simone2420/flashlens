import json

with open('scratch/all_sentence_qs.json') as f:
    qs = json.load(f)

generic = []
for q in qs:
    p = q['prompt']
    if 'esta oración' in p or p.endswith(': \\') or p.endswith(': ""') or '"' not in p or len(p) < 35:
        generic.append(q)

print(f"Total generic/missing: {len(generic)} of {len(qs)}")
for g in generic:
    print(f"{g['id']}: '{g['prompt']}' --> Ans: '{g['correctAnswer']}'")
