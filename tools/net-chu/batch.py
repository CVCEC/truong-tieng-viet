import sys, json, numpy as np, os
sys.path.insert(0, os.path.dirname(__file__)); import trich2
from multiprocessing import Pool
V = sys.argv[1]; OUT = sys.argv[2]
names = sys.argv[3:]
def one(nm):
    r = trich2.run(f'{V}/{nm}.mp4'); S = trich2.strokes(r); c = r['cell']; rows = r['rows']
    allp = np.array([(q[1], q[2]) for s in S for q in s])
    x0 = allp[:, 0].min()
    left = allp[allp[:, 0] < x0 + 1.5 * c]
    first = nm.split('-')[0][0]
    if first in 'gpqy': ref = left[:, 1].min() + 2 * c
    else: ref = left[:, 1].max()
    base = min(rows, key=lambda y: abs(y - ref))
    st = [[[round((q[1] - x0) / c + 0.3, 3), round((q[2] - base) / c, 3)] for q in s] for s in S]
    return nm, dict(cell=c, base=base, x0=x0, strokes=st, kinds=[''.join(q[0] for q in s) for s in S])
with Pool(4) as p: res = dict(p.map(one, names))
json.dump(res, open(OUT, 'w'), ensure_ascii=False)
for k, v in res.items(): print(k, len(v['strokes']), [len(s) for s in v['strokes']])
