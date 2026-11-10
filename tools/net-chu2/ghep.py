# Gộp nét đã trích (thư mục json) thành chung/net-chu.js
#   - rê bút: nét sau bắt đầu ngay chỗ nét trước kết thúc (≤ 0.65 ô li, không phải dấu phía trên) → viết liền
#   - th, tr: nét hất của t lên tới đường kẻ 3 rồi rê lên đỉnh t viết tiếp (giống video chữ t)
import json, sys, re, math
src, dst = sys.argv[1], sys.argv[2]
NAMES = 'a aw â b c d đ e ê g h i k l m n o ô ơ p r s t u ư v x y ch tr th gh gi ng ngh ph qu kh'.split()
KEY = {'aw': 'ă'}
def pts(s): return [tuple(map(float, p.split())) for p in s[1:].split(' L')]
def fmt(P): return 'M' + ' L'.join(f'{x:.2f} {y:.2f}' for x, y in P)
NOI_THEM = {'th': [(0, 1)], 'tr': [(0, 1)]}
out = {}
for n in NAMES:
    S = [pts(s) for s in json.load(open(f'{src}/{n}.json'))['net']]
    i = 0; them = list(NOI_THEM.get(n, []))
    while i < len(S) - 1:
        a, b = S[i][-1], S[i + 1][0]
        if (math.dist(a, b) <= 0.65 and b[1] > -2.05) or (i, i + 1) in them:
            if (i, i + 1) in them: them.remove((i, i + 1))
            S[i] = S[i] + S[i + 1]; del S[i + 1]; print(n, 'rê bút nối nét', i + 1, i + 2)
        else: i += 1
    out[KEY.get(n, n)] = [fmt(P) for P in S]
# q: chưa có video riêng → lấy phần đầu của qu tới điểm thấp nhất của nét thẳng
Q = pts(out['qu'][0]); j = max(range(len(Q)), key=lambda i: Q[i][1]); out['q'] = [fmt(Q[:j + 1])]
old = open(dst).read()
head = old[:old.index('const NET_CHU = {')]
tail = old[old.index('};', old.index('const NET_CHU = {')) + 2:]
body = 'const NET_CHU = {\n' + ',\n'.join(f'  {json.dumps(k, ensure_ascii=False)}: {json.dumps(v)}' for k, v in out.items()) + '\n};'
open(dst, 'w').write(head + body + tail)
print(len(out), 'chữ')
