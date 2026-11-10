# Vẽ nét hiện có (NET_CHU) lên khung hình cuối của video để so sánh
import sys, json, re, numpy as np
from PIL import Image, ImageDraw
sys.path.insert(0, '.'); from khung import frames, grid
S = sys.argv[1]; N = json.load(open(S + '/net.json'))
DESC = set('gpyq')
out = []
for k in sys.argv[2:]:
    last = None
    for f in frames(S + '/vid/' + k + '.mp4', 448, fps=2):
        if (f.min(axis=2) > 200).mean() > 0.4: last = f
    rows, cols = grid(last); u = float(np.median(np.diff(rows)))
    ink = last.max(axis=2) < 90; ys, xs = np.where(ink)
    bot = ys.max() - (3 * u if k[0] in DESC else 0)
    base = min(rows, key=lambda r: abs(r - bot)); x0 = xs.min()
    im = Image.fromarray(last).convert('RGB'); d = ImageDraw.Draw(im)
    for j, st in enumerate(N.get(k, [])):
        pts = [tuple(map(float, p.split())) for p in re.findall(r'-?[\d.]+ -?[\d.]+', st)]
        P = [(x0 + x * u, base + y * u) for x, y in pts]
        n = len(P)
        for i in range(n - 1):
            c = (int(255 * i / n), 0, int(255 * (1 - i / n)))
            d.line([P[i], P[i + 1]], fill=c, width=4)
        d.ellipse([P[0][0] - 7, P[0][1] - 7, P[0][0] + 7, P[0][1] + 7], fill=(0, 180, 0)); d.text((P[0][0] + 8, P[0][1] - 8), str(j + 1), fill=(0, 120, 0))
    out.append(im)
W = sum(i.width for i in out); H = max(i.height for i in out)
o = Image.new('RGB', (W, H), 'white'); x = 0
for i in out: o.paste(i, (x, 0)); x += i.width
o.save(S + '/v/cu.png'); print(u, rows)
