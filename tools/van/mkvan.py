# Viết bai-NN/bai.js + bai.json cho bài dạy vần từ một bảng dữ liệu Python
import json, sys
import os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from vandata import BAI, KHO

def js(v):
    return json.dumps(v, ensure_ascii=False).replace('"', "'")

for so, b in BAI.items():
    am = b['am']
    tho = KHO[b['kho']]
    lines = []
    lines.append(f"/* Bài {so} · Vần {', '.join(am)} — chỉ có dữ liệu; trò chơi ở chung/mau/bo-am.js (loai: 'van'), tranh ở chung/tranh.js")
    lines.append(f"   Sửa so với slide: {b['sua']} */")
    lines.append("Object.assign(PHRASES, {")
    ten_am = ' và '.join('vần ' + a for a in am) if len(am) <= 2 else 'các vần ' + ', '.join(am)
    lines.append(f"  'welcome': 'Chào các bạn! Hôm nay mình học {ten_am} nhé!'")
    lines.append("});\n")
    lines.append("const AM = {")
    lines.append("  loai: 'van',")
    lines.append(f"  am: {js(am)},")
    lines.append(f"  kho: {b['kho']},")
    lines.append(f"  tho: {js(tho[:6])[:-1]},\n        {js(tho[6:])[1:]},")
    lines.append(f"  onCu: {{ chu: {js(b['onCu'][0])}, tu: {js(b['onCu'][1])} }},")
    lines.append("  khoa: [")
    lines.append(',\n'.join(f"    {{ am: '{a}', dau: '{d}', tieng: '{t}', tu: '{w}' }}" for a, d, t, w in b['khoa']))
    lines.append("  ],")
    lines.append("  bang: { " + ', '.join(f"{a}: {js(v)}" for a, v in b['bang'].items()) + " },")
    lines.append("  tu: { " + ', '.join(f"{a}: {js(v)}" for a, v in b['tu'].items()) + " },")
    lines.append(f"  cau: {js(b['cau'])}")
    lines.append("};\n\namSetup();\n")
    d = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', f'bai-{so:02d}')
    import os; os.makedirs(d, exist_ok=True)
    open(d + '/bai.js', 'w').write('\n'.join(lines))
    ten = 'Vần ' + ', '.join(am)
    open(d + '/bai.json', 'w').write(json.dumps({
        'so': so, 'ten': ten,
        'moTa': f"11 trò chơi cho Bài {so}: đọc thơ Lên Sáu khổ {b['kho']}, ôn bài cũ, ghép tiếng có vần {', '.join(am)}, bảng ghép thanh, đọc từ, hái quả, nối từ với tranh, lật thẻ, đoán tranh, đọc câu, tô chữ; kèm phiếu bài tập về nhà.",
        'mau': 'bo-am',
        'heroThem': f'<p class="digraph-strip" aria-label="{ten}">{", ".join(am)}</p>'
    }, ensure_ascii=False, indent=2) + '\n')
    print('ok', so)
