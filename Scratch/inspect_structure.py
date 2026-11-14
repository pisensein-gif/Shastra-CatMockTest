import re, glob

def test_file(fn):
    with open(fn, encoding='utf-8') as f:
        t = f.read()
    t = re.sub(r'www\.mbapathshala\.com.*?Contact Us:-\s*\+91 8171833400', '', t)
    t = re.sub(r'--- PAGE \d+ ---', '', t)
    
    ans_matches = list(re.finditer(r'Correct Answer\s*:\s*([^\n\r]*)', t))
    print(f'=== {fn} === Found {len(ans_matches)} answers')
    for idx, m in enumerate(ans_matches):
        val = m.group(1).strip()
        start = m.start()
        snippet = t[max(0, start-100):start].strip()
        last_line = snippet.split('\n')[-1] if snippet else ''
        print(f'  Q{idx+1}: ans="{val}" | prev line: {last_line[:60]}')

if __name__ == '__main__':
    for fn in sorted(glob.glob('Scratch/*.pdf.txt')):
        test_file(fn)
