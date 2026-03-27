
const links = {
  'Сургалт': ['React Үндэс', 'Advanced Hooks', 'TypeScript', 'Tailwind CSS', '3D вэб'],
  'Компани': ['Бидний тухай', 'Хамтран ажиллах', 'Ажлын байр', 'Нэвт идэвхтэй'],
  'Дэмжлэг': ['Нийтлэлүүд', 'Discord', 'FAQ', 'Холбоо барих'],
};

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10 px-6"
      style={{ background: 'linear-gradient(180deg, #0a0a0f, #05050a)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <div className="font-orbitron text-xl font-bold gradient-text mb-4">
              ⚛️ React 3D Academy
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Монголын хамгийн дэвшилтэт React сургалт. 2D-ээс 3D хүртэл бүрэн эзэмш.
            </p>
            <div className="flex gap-3">
              {['𝕏', 'in', 'yt', 'gh'].map((icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#94a3b8',
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-500 text-sm hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <p>© 2026 React 3D Academy. Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Нууцлалын бодлого</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Үйлчилгээний нөхцөл</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
