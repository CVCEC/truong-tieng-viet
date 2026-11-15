// Bộ mẫu chung mau.cvcec.org khi chạy thử: máy thử có thể không vào được mau.cvcec.org,
// nên lấy cùng tệp đó thẳng từ địa chỉ GitHub Pages mau.cvcec.org bằng curl (theo proxy của máy).
// Không lấy được thì bỏ qua, trang vẫn chạy bằng màu dự phòng.
import { execFileSync } from 'node:child_process';
const RAW = 'https://mau.cvcec.org/';
const cache = new Map();
const TYPES = { css: 'text/css; charset=utf-8', js: 'text/javascript; charset=utf-8', png: 'image/png', svg: 'image/svg+xml' };
export async function ganBoMau(ctx) {
  await ctx.route(/^https:\/\/mau\.cvcec\.org\//, route => {
    const path = new URL(route.request().url()).pathname.slice(1);
    if (!cache.has(path)) {
      try { cache.set(path, execFileSync('curl', ['-sSfL', '--max-time', '20', RAW + path], { maxBuffer: 1 << 26 })); }
      catch { cache.set(path, null); }
    }
    const body = cache.get(path);
    if (!body) return route.abort();
    return route.fulfill({ status: 200, body, contentType: TYPES[path.split('.').pop()] || 'application/octet-stream' });
  });
}
