# Đọc video cô viết mẫu: khung hình cuối, lưới ô li (đơn vị u, đường kẻ dưới), mặt nạ mực
import subprocess, json, numpy as np, sys
def probe(fn):
    o = json.loads(subprocess.check_output(['ffprobe','-v','error','-select_streams','v:0','-show_entries','stream=width,height,nb_frames,r_frame_rate','-of','json',fn]))['streams'][0]
    return o['width'], o['height']
def frames(fn, W, fps=30):
    w0, h0 = probe(fn); H = int(round(h0 * W / w0 / 2)) * 2
    p = subprocess.Popen(['ffmpeg','-v','error','-i',fn,'-vf',f'fps={fps},scale={W}:{H}','-f','rawvideo','-pix_fmt','rgb24','-'], stdout=subprocess.PIPE)
    n = W * H * 3
    while True:
        b = p.stdout.read(n)
        if len(b) < n: break
        yield np.frombuffer(b, np.uint8).reshape(H, W, 3)
def grid(f):
    f = f.astype(int)
    blue = (f[..., 2] > 170) & (f[..., 0] < 150) & (f[..., 2] - f[..., 0] > 50)
    def lines(cnt, thr):
        idx = np.where(cnt > thr)[0]; g = []
        for i in idx:
            if g and i - g[-1][-1] <= 2: g[-1].append(i)
            else: g.append([i])
        return [float(np.mean(x)) for x in g]
    H, W = blue.shape
    rows = lines(blue.sum(1), W * 0.12); cols = lines(blue.sum(0), H * 0.12)
    return rows, cols
