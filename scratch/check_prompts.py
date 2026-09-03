import json

with open('src/data/mockData.ts', 'r') as f:
    text = f.read()

start = text.find('export const MOCK_ROADMAP_NODES: RoadmapNode[] = [')
end = text.rfind('];\n\nexport const MOCK_DIAGNOSTIC_QUESTIONS')
nodes_json = text[start + len('export const MOCK_ROADMAP_NODES: RoadmapNode[] = '):end + 1]

nodes = json.loads(nodes_json)
print(f'Parsed {len(nodes)} nodes!')

sentence_qs = []
for n in nodes:
    for s in n.get('sublessons', []):
        for q in s.get('questions', []):
            if q.get('type') == 'SENTENCE_WRITING':
                sentence_qs.append((n['id'], s['id'], q['id'], q.get('prompt', ''), q.get('correctAnswer', ''), q.get('explanation', ''), q.get('contextText', '')))

print(f'Total SENTENCE_WRITING: {len(sentence_qs)}')

bad_prompts = []
for n_id, s_id, q_id, prompt, ans, expl, ctx in sentence_qs:
    # Check if the prompt doesn't have quotes or is too short or is generic
    if '"' not in prompt or 'esta oración' in prompt or len(prompt) < 35:
        bad_prompts.append((q_id, prompt, ans))

print(f'Total bad/generic prompts: {len(bad_prompts)}')
for bp in bad_prompts:
    print(f"{bp[0]} | Prompt: {bp[1]} | Ans: {bp[2]}")
