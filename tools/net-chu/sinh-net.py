import json, sys, numpy as np
D = json.load(open(sys.argv[1])); OUT = sys.argv[2]
KEY = {'a-breve': 'ă', 'a-circumflex': 'â', 'd-bar': 'đ', 'e-circumflex': 'ê', 'o-circumflex': 'ô', 'o-horn': 'ơ', 'u-horn': 'ư'}
def rdp(P, eps):
    if len(P) < 3: return P
    a, b = np.array(P[0]), np.array(P[-1]); ab = b - a; L = np.hypot(*ab)
    d = [abs(ab[0] * (p[1] - a[1]) - ab[1] * (p[0] - a[0])) / L if L > 1e-9 else np.hypot(*(np.array(p) - a)) for p in P]
    i = int(np.argmax(d))
    if d[i] > eps: return rdp(P[:i + 1], eps)[:-1] + rdp(P[i:], eps)
    return [P[0], P[-1]]
def smooth(P, w=2):
    if len(P) < 5: return P
    A = np.array(P); out = [P[0]]
    for i in range(1, len(P) - 1):
        lo, hi = max(0, i - w), min(len(P), i + w + 1); out.append(A[lo:hi].mean(0).tolist())
    return out + [P[-1]]
def clean(st):
    res = []
    for s in st:
        s = smooth(s); s = rdp(s, 0.02)
        if len(s) == 1: s = [s[0], [s[0][0], s[0][1] + 0.02]]
        res.append(s)
    return res
L = {}
for nm, v in D.items():
    k = KEY.get(nm, nm); L[k] = clean(v['strokes'])
# đ: kéo nét ngang qua thân chữ
d = L['đ']; stem = d[1]; sx = min(p[0] for p in stem if p[1] < -2.5); by = np.mean([p[1] for p in d[2]])
L['đ'] = d[:2] + [[[sx - 0.45, by], [sx + 0.45, by]]]
# q: lấy từ qu, cắt ở đáy thân
qu = D['qu']['strokes'][0]; i = int(np.argmax([p[1] for p in qu])); L['q'] = clean([qu[:i + 1]])
# dồn x để chữ bắt đầu ở 0
for k, st in L.items():
    x0 = min(p[0] for s in st for p in s)
    L[k] = [[[round(p[0] - x0, 2), round(p[1], 2)] for p in s] for s in st]
def path(s): return 'M' + ' L'.join(f'{x:g} {y:g}' for x, y in s)
order = ['a','ă','â','b','c','d','đ','e','ê','g','h','i','k','l','m','n','o','ô','ơ','p','q','r','s','t','u','ư','v','x','y','ch','gh','gi','kh','ng','ngh','ph','qu','th','tr']
body = ',\n'.join(f"  '{k}': [{', '.join(json.dumps(path(s)) for s in L[k])}]" for k in order)
open(OUT, 'w').write(body)
print(sum(len(path(s)) for k in order for s in L[k]), 'ký tự;', {k: sum(len(s) for s in L[k]) for k in order})
