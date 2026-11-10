# Trích nét chữ từ video "Hướng dẫn nét viết" (lần 2, chính xác hơn):
#  - hình nét lấy từ ĐƯỜNG MỰC CUỐI CÙNG của cô (làm mảnh thành đường giữa), nên không méo, không rung;
#  - thứ tự, chiều viết, chỗ nhấc bút lấy bằng cách cho đầu bút chì đi dọc đường mực (thuật toán Viterbi),
#    không được đi tới chỗ mực chưa xuất hiện.
#   python3 trich.py <video.mp4> <tên> <thư mục ra>   → <tên>.json (nét theo ô li) + <tên>.png (ảnh kiểm tra)
import sys, json, numpy as np
from scipy import ndimage as ndi
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import shortest_path
from skimage.morphology import skeletonize
from PIL import Image, ImageDraw
sys.path.insert(0, __file__.rsplit('/', 1)[0]); from khung import frames, grid
fn, name, outdir = sys.argv[1:4]
DESC = {'g': 3, 'y': 3, 'q': 2, 'p': 2}   # phần dưới đường kẻ (ô li)
W = 448; FPS = 30

# 1. Đọc khung hình: thời điểm mực xuất hiện (đen liền 3 khung), đầu bút chì (phần vàng thấp-trái nhất)
T = None; cnt = None; tips = []; last = None; t = 0
for f in frames(fn, W, FPS):
    white = (f.min(axis=2) > 200).mean() > 0.4
    if T is None: T = np.full(f.shape[:2], 10**6); cnt = np.zeros(f.shape[:2], int)
    if not white: tips.append(None); t += 1; cnt[:] = 0; continue
    last = f
    blk = f.max(axis=2) < 90
    cnt = np.where(blk, cnt + 1, 0)
    new = (cnt == 3) & (T == 10**6); T[new] = t - 2
    fi = f.astype(int)
    yel = (fi[..., 0] > 200) & (fi[..., 1] > 140) & (fi[..., 1] < 215) & (fi[..., 2] < 120)
    tip = None
    if yel.sum() > 40:
        ys, xs = np.where(yel); sc = ys - xs; k = np.argsort(sc)[-15:]
        tip = np.array([xs[k].mean(), ys[k].mean()])
    tips.append(tip); t += 1
NT = t
rows, cols = grid(last)
u = float(np.median(np.diff(rows)))
ink = last.max(axis=2) < 90
lab, nl = ndi.label(ink); sz = ndi.sum(ink, lab, range(1, nl + 1))
ink = np.isin(lab, 1 + np.where(sz > 20)[0])
ys, xs = np.where(ink)
bot = ys.max() - max([DESC.get(ch, 0) for ch in name]) * u
base = min(rows, key=lambda r: abs(r - bot)); x0 = xs.min()

# 2. Đường giữa nét mực (bỏ các nhánh vụn ngắn)
sk = skeletonize(ink)
def prune(sk, L):
    sk = sk.copy()
    for _ in range(3):
        nb = ndi.convolve(sk.astype(int), np.ones((3, 3), int), mode='constant') - 1
        ends = list(zip(*np.where(sk & (nb == 1))))
        for e in ends:
            path = [e]; cur = e; seen = {e}
            while len(path) <= L:
                y, x = cur; nxt = [(y + dy, x + dx) for dy in (-1, 0, 1) for dx in (-1, 0, 1) if (dy or dx) and 0 <= y + dy < sk.shape[0] and 0 <= x + dx < sk.shape[1] and sk[y + dy, x + dx] and (y + dy, x + dx) not in seen]
                if len(nxt) != 1: break
                cur = nxt[0]; seen.add(cur); path.append(cur)
            if len(path) <= L and len(nxt) > 1:
                for p in path[:-1]: sk[p] = False
    return sk
sk = prune(sk, int(0.18 * u))
py, px = np.where(sk); N = len(py)
idx = -np.ones(sk.shape, int); idx[py, px] = np.arange(N)
r, c, w = [], [], []
for dy in (-1, 0, 1):
    for dx in (-1, 0, 1):
        if not (dy or dx): continue
        yy, xx = py + dy, px + dx
        ok = (yy >= 0) & (yy < sk.shape[0]) & (xx >= 0) & (xx < sk.shape[1])
        j = np.full(N, -1); j[ok] = idx[yy[ok], xx[ok]]
        m = j >= 0; r += list(np.where(m)[0]); c += list(j[m]); w += [np.hypot(dy, dx)] * int(m.sum())
G = coo_matrix((w, (r, c)), shape=(N, N)).tocsr()
D = shortest_path(G, directed=False).astype(np.float32)
# thời điểm mực xuất hiện của mỗi điểm đường giữa: lấy sớm nhất trong vùng mực quanh nó
Tm = np.where(ink, T, 10**6)
Ts = ndi.minimum_filter(Tm, size=int(0.12 * u) | 1)[py, px]

# 3. Hiệu chỉnh độ lệch từ phần vàng tới ngòi bút: so với chỗ mực mới xuất hiện
offs = []
for t, tp in enumerate(tips):
    if tp is None: continue
    m = (T == t) & ink
    if m.sum() >= 3:
        yy, xx = np.where(m); offs.append((xx.mean() - tp[0], yy.mean() - tp[1]))
off = np.median(np.array(offs), axis=0)
obs = [None if tp is None else tp + off for tp in tips]
act = [t for t in range(NT) if obs[t] is not None]
t0, t1 = act[0], act[-1]

# 4. Theo dõi ngòi bút: ở mỗi khung có mực mới xuất hiện, ngòi bút là điểm mực mới gần đầu bút chì nhất
pred = shortest_path(G, directed=False, return_predecessors=True)[1]
def walk(a, b):
    p = [b]
    while p[-1] != a: p.append(pred[a, p[-1]])
    return p[::-1]
skd = np.stack([px, py], 1).astype(float)
hits = []   # (t, nút đường giữa)
for t in range(NT):
    m = (T == t) & ink
    if not m.any(): continue
    yy, xx = np.where(m)
    if obs[t] is not None:
        d = np.hypot(xx - obs[t][0], yy - obs[t][1]); j = int(np.argmin(d))
        if d[j] > 0.25 * u: continue          # mực lộ ra sau khi bút đã đi chỗ khác (bị bút che trước đó)
        q = np.array([xx[j], yy[j]])
    else:
        if m.sum() < 3: continue
        q = np.array([xx.mean(), yy.mean()])
    s_ = int(np.argmin(np.hypot(skd[:, 0] - q[0], skd[:, 1] - q[1])))
    if not hits or hits[-1][1] != s_: hits.append((t, s_))
# 5. Nối các điểm: gần nhau → liền nét; xa nhau → rê bút trên nét cũ (nếu đầu bút đi dọc đường mực) hoặc nhấc bút
def along(ta, tb, path):
    P = skd[path]; ds = []
    for t in range(ta + 1, tb):
        if obs[t] is None: continue
        ds.append(np.min(np.hypot(P[:, 0] - obs[t][0], P[:, 1] - obs[t][1])))
    return np.mean(ds) if ds else 1e9
strokes = [[hits[0][1]]]
for (ta, a), (tb, b) in zip(hits, hits[1:]):
    if D[a, b] <= 0.3 * u: strokes[-1] += walk(a, b)[1:]; continue
    if D[a, b] <= 3.5 * u:
        w_ = walk(a, b)
        if Ts[w_[1:-1]].max(initial=0) <= tb + 2 and along(ta, tb, w_) < 0.15 * u: strokes[-1] += w_[1:]; continue  # rê bút: chỉ đi trên mực đã có
    strokes.append([b])
def tot_len(st): return sum(D[a, b] for a, b in zip(st, st[1:]))
strokes = [st for st in strokes if tot_len(st) > 0.15 * u]
M = [strokes[0]]
for st in strokes[1:]:
    if D[M[-1][-1], st[0]] <= 0.65 * u and Ts[walk(M[-1][-1], st[0])[1:-1]].max(initial=0) <= Ts[st[0]] + 2: M[-1] += walk(M[-1][-1], st[0])[1:] + st[1:]
    else: M.append(st)
strokes = M
# chấm (chữ i): cụm mực nhỏ chưa có nét nào đi qua
cov = np.zeros(N, bool)
for st in strokes: cov[st] = True
lab2, n2 = ndi.label(ink)
for k in range(1, n2 + 1):
    mm = lab2 == k
    on = mm[py, px]
    if on.any() and cov[on].any(): continue
    yy, xx = np.where(mm); tk = T[mm].min()
    cx, cy = xx.mean(), yy.mean(); j = int(np.argmin(np.hypot(skd[:, 0] - cx, skd[:, 1] - cy)))
    strokes.append(('cham', cx, cy, tk))
def tstart(st): return Ts[st[0]] if not isinstance(st, tuple) else st[3]
strokes.sort(key=tstart)
# chấm (chữ i) và nét rất ngắn: giữ nếu là cụm mực riêng
def smooth(P, k):
    if len(P) < 3: return P
    Q = P.copy()
    for i in range(len(P)):
        a, b = max(0, i - k), min(len(P), i + k + 1); Q[i] = P[a:b].mean(0)
    Q[0], Q[-1] = P[0], P[-1]; return Q
def rdp(P, eps):
    if len(P) < 3: return P
    a, b = P[0], P[-1]; v = b - a; w_ = P - a; nv = np.hypot(*v)
    d = np.abs(v[0] * w_[:, 1] - v[1] * w_[:, 0]) / nv if nv > 1 else np.hypot(w_[:, 0], w_[:, 1])
    i = int(np.argmax(d))
    if d[i] > eps: return np.vstack([rdp(P[:i + 1], eps)[:-1], rdp(P[i:], eps)])
    return np.vstack([a, b])
out = []
for st in strokes:
    if isinstance(st, tuple):
        _, cx, cy, _ = st; P = np.array([[cx - 0.03 * u, cy - 0.03 * u], [cx + 0.03 * u, cy + 0.03 * u]])
        U = np.stack([(P[:, 0] - x0) / u, (P[:, 1] - base) / u], 1)
        out.append('M' + ' L'.join(f'{x:.2f} {y:.2f}' for x, y in U)); continue
    P = np.stack([px[st], py[st]], 1).astype(float)
    P = smooth(P, max(1, int(0.09 * u)))
    P = rdp(P, 0.015 * u)
    U = np.stack([(P[:, 0] - x0) / u, (P[:, 1] - base) / u], 1)
    out.append('M' + ' L'.join(f'{x:.2f} {y:.2f}'.replace('-0.00', '0.00') for x, y in U))
json.dump({'ten': name, 'net': out, 'u': u}, open(f'{outdir}/{name}.json', 'w'), ensure_ascii=False)

# 6. Ảnh kiểm tra: mực của cô (xám) + nét trích (màu theo thứ tự, chấm xanh = điểm đầu, số = thứ tự nét)
im = Image.fromarray(np.where(ink[..., None], 200, 255).astype(np.uint8).repeat(3, 2)); d = ImageDraw.Draw(im)
for j, s_ in enumerate(out):
    pts = [tuple(map(float, p.split())) for p in s_[1:].split(' L')]
    P = [(x0 + x * u, base + y * u) for x, y in pts]; n = len(P)
    for i in range(n - 1):
        d.line([P[i], P[i + 1]], fill=(int(230 * i / n), 40, int(230 * (1 - i / n))), width=3)
    # mũi tên chiều viết
    if n > 1:
        a, b = np.array(P[0]), np.array(P[min(2, n - 1)])
    d.ellipse([P[0][0] - 6, P[0][1] - 6, P[0][0] + 6, P[0][1] + 6], fill=(0, 170, 0))
    d.text((P[0][0] + 7, P[0][1] - 14), str(j + 1), fill=(0, 110, 0))
im.save(f'{outdir}/{name}.png')
print(name, 'u=%.1f' % u, 'nét:', len(out), [len(s_.split(' L')) for s_ in out])
