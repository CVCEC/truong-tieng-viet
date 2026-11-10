# Vẽ khung xương nét chữ (từ ảnh mẫu) lên lưới đơn vị ô li để chọn điểm đi qua
import sys, numpy as np
from PIL import Image, ImageDraw
from skimage.morphology import skeletonize
D, outp = sys.argv[1], sys.argv[2]; keys = sys.argv[3:]
def grid(a):
    blue = (a[:, :, 2] > 170) & (a[:, :, 0] < 150) & (a[:, :, 1] > 120)
    ys = [y for y in range(540) if blue[y].sum() > 80]; cl = []
    for y in ys:
        if cl and y - cl[-1][-1] <= 2: cl[-1].append(y)
        else: cl.append([y])
    rows = [sum(c) / len(c) for c in cl]
    xs = [x for x in range(540) if blue[:, x].sum() > 150]
    return rows[-1], (rows[-1] - rows[0]) / (len(rows) - 1), xs[0]
tiles = []
for k in keys:
    a = np.asarray(Image.open(f'{D}/jpg-{k}.jpg').convert('RGB')).astype(int)
    base, U, x0 = grid(a)
    grey = (abs(a[:, :, 0] - a[:, :, 1]) < 12) & (a[:, :, 0] > 150) & (a[:, :, 0] < 215)
    sk = skeletonize(grey)
    im = Image.new('RGB', (540, 540), 'white'); d = ImageDraw.Draw(im)
    for i in range(-1, 8):
        y = base - i * U * .5
        d.line([(0, y), (540, y)], fill=(150, 200, 230) if i % 2 else (60, 120, 200), width=1)
        d.text((2, y - 10), f'{-i*0.5:g}', fill=(0, 0, 0))
    for j in range(0, 12):
        x = x0 + j * U * .5
        d.line([(x, 0), (x, 540)], fill=(150, 200, 230) if j % 2 else (60, 120, 200), width=1)
        d.text((x + 2, 528), f'{j*0.5:g}', fill=(0, 0, 0))
    ys, xs = np.nonzero(sk)
    for x, y in zip(xs, ys): d.point((x, y), fill=(200, 0, 0))
    d.text((480, 5), k, fill=(0, 0, 0))
    np.save(f'{D}/sk-{k}.npy', np.stack([xs, ys], 1)); open(f'{D}/g-{k}.txt', 'w').write(f'{base} {U} {x0}')
    tiles.append(im)
W = Image.new('RGB', (540 * 2, 540 * ((len(tiles) + 1) // 2)), 'white')
for i, t in enumerate(tiles): W.paste(t, ((i % 2) * 540, (i // 2) * 540))
W.save(outp)
