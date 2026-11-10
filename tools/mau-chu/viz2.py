import sys, json, numpy as np
from PIL import Image, ImageDraw
from svg.path import parse_path
D, js, outp = sys.argv[1:4]
data = json.load(open(js)); keys = list(data)
cols = [(220, 40, 40), (40, 140, 40), (40, 80, 220)]
W = Image.new('RGB', (360 * 5, 360 * ((len(keys) + 4) // 5)), 'white')
for i, k in enumerate(keys):
    im = Image.open(f'{D}/jpg-{k}.jpg').convert('RGB'); d = ImageDraw.Draw(im)
    base, U, x0 = map(float, open(f'{D}/g-{k}.txt').read().split())
    for n, s in enumerate(data[k]):
        p = parse_path(s); pts = [p.point(t / 200) for t in range(201)]
        pts = [(x0 + q.real * U, base + q.imag * U) for q in pts]
        d.line(pts, fill=cols[n % 3], width=4)
        d.ellipse([pts[0][0] - 8, pts[0][1] - 8, pts[0][0] + 8, pts[0][1] + 8], fill=cols[n % 3])
        a, b = pts[-6], pts[-1]; d.ellipse([b[0] - 4, b[1] - 4, b[0] + 4, b[1] + 4], outline=(0, 0, 0))
    d.text((480, 10), k, fill=(0, 0, 0))
    W.paste(im.resize((360, 360)), ((i % 5) * 360, (i // 5) * 360))
W.save(outp)
