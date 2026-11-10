# Trích nét chữ từ video cô viết bằng cách theo dõi đầu bút chì
import sys, subprocess, json, numpy as np
from skimage.morphology import skeletonize, dilation, disk
from scipy import ndimage as ndi
W = 540
def frames(fn):
    p = subprocess.Popen(['ffmpeg','-v','error','-i',fn,'-vf',f'scale={W}:{W}','-f','rawvideo','-pix_fmt','rgb24','-'], stdout=subprocess.PIPE)
    n = W*W*3
    while True:
        b = p.stdout.read(n)
        if len(b) < n: break
        yield np.frombuffer(b, np.uint8).reshape(W, W, 3)
YY, XX = np.mgrid[0:W, 0:W]
def run(fn):
    T = np.full((W, W), 10**9); prev = prev2 = None; best = None; bestn = -1; t = 0; tips = []
    for f in frames(fn):
        fi = f.astype(int)
        white = (f.min(axis=2) > 200).mean()
        tip = None
        if white > 0.5:
            dark = f.max(axis=2) < 60
            if prev2 is not None:
                new = prev2 & prev & dark & (T == 10**9); T[new] = t - 2
            n = dark.sum()
            if n >= bestn * 0.98: best, bestn = f.copy(), max(n, bestn)
            prev2, prev = prev, dark
            yel = (fi[..., 0] > 200) & (fi[..., 1] > 140) & (fi[..., 1] < 215) & (fi[..., 2] < 120)
            if yel.sum() > 60:
                ys, xs = np.where(yel); sc = ys - xs; k = np.argsort(sc)[-25:]
                tip = (float(xs[k].mean()), float(ys[k].mean()))
        else:
            prev2 = prev = None
        tips.append(tip); t += 1
    f = best.astype(int)
    blue = (f[..., 2] > 170) & (f[..., 0] < 140) & (f[..., 2] - f[..., 0] > 60)
    def lines(cnt, thr):
        idx = np.where(cnt > thr)[0]; g = []
        for i in idx:
            if g and i - g[-1][-1] <= 2: g[-1].append(i)
            else: g.append([i])
        return [float(np.mean(x)) for x in g]
    rows = lines(blue.sum(1), W * 0.18); cols = lines(blue.sum(0), W * 0.18)
    cell = float(np.median(np.diff(rows)))
    ink = f.max(axis=2) < 60
    lab, nl = ndi.label(ink); sz = ndi.sum(ink, lab, range(1, nl + 1))
    ink = np.isin(lab, 1 + np.where(sz > 15)[0])
    sk = skeletonize(ink); sy, sx = np.where(sk); sT = T[sy, sx]
    # hiệu chỉnh: độ lệch từ đầu vàng của bút tới điểm mực mới
    offs = []
    for t, tp in enumerate(tips):
        if tp is None: continue
        m = sT == t + 1
        if m.sum() >= 2: offs.append((sx[m].mean() - tp[0], sy[m].mean() - tp[1]))
    off = np.median(np.array(offs), axis=0) if offs else np.array([0., 0.])
    seq = []
    for t, tp in enumerate(tips):
        if tp is None: seq.append(None); continue
        x, y = tp[0] + off[0], tp[1] + off[1]
        d = np.hypot(sx - x, sy - y); j = int(np.argmin(d))
        if d[j] > 0.16 * cell: seq.append(('X', x, y, t)); continue
        seq.append(('N' if t - 4 <= sT[j] <= t + 25 else 'O', float(sx[j]), float(sy[j]), t))
    return dict(rows=rows, cols=cols, cell=cell, off=off.tolist(), seq=seq, ink=ink, sk=(sx, sy, sT), best=best)
def strokes(r):
    S = []; cur = []
    for s in r['seq'] + [None]:
        if s and s[0] in 'NO': cur.append(s); continue
        if cur:
            while cur and cur[0][0] == 'O': cur.pop(0)
            while cur and cur[-1][0] == 'O': cur.pop()
            if sum(1 for q in cur if q[0] == 'N') >= 2: S.append(cur)
        cur = []
    # bỏ điểm đứng yên trùng nhau
    out = []
    for s in S:
        o = [s[0]]
        for q in s[1:]:
            if np.hypot(q[1] - o[-1][1], q[2] - o[-1][2]) > 1.5: o.append(q)
        out.append(o)
    return out
if __name__ == '__main__':
    r = run(sys.argv[1]); S = strokes(r)
    print('cell', r['cell'], 'off', r['off'], 'rows', [round(x) for x in r['rows']])
    for s in S: print(len(s), ''.join(q[0] for q in s)[:80], [(round(q[1]), round(q[2])) for q in s[::max(1, len(s)//8)]])
