import { useState } from 'react';
import Icon from '@/components/ui/icon';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'О нас' },
  { id: 'services', label: 'Услуги' },
  { id: 'work', label: 'Портфолио' },
  { id: 'team', label: 'Команда' },
  { id: 'contacts', label: 'Контакты' },
];

const IMG1 = 'https://cdn.poehali.dev/projects/76ed79bb-4104-423a-a9f5-a97385405843/files/8afd5493-e2e6-4cb8-9d7f-edf04baac815.jpg';
const IMG2 = 'https://cdn.poehali.dev/projects/76ed79bb-4104-423a-a9f5-a97385405843/files/cae73415-40d3-42f9-89e6-7bb2cca2cefb.jpg';
const IMG3 = 'https://cdn.poehali.dev/projects/76ed79bb-4104-423a-a9f5-a97385405843/files/5e6ac74f-4edd-418f-a57a-61d4e5f41354.jpg';

const SERVICES = [
  { n: '01', t: 'Брендинг', d: 'Айдентика, фирстиль, гайдлайны — голос, который запомнят.', i: 'Sparkles' },
  { n: '02', t: 'Веб-дизайн', d: 'Сайты и интерфейсы, которые работают и восхищают.', i: 'Monitor' },
  { n: '03', t: 'Арт-дирекшн', d: 'Концепция, съёмки, визуальный язык под ключ.', i: 'Camera' },
  { n: '04', t: 'Моушн', d: 'Анимация, 3D и видео для рекламы и соцсетей.', i: 'Play' },
];

const FILTERS = ['Все', 'Брендинг', 'Интерьер', '3D'];
const WORKS = [
  { id: 1, t: 'Aurora Identity', cat: 'Брендинг', img: IMG1, year: '2024' },
  { id: 2, t: 'Studio Loft', cat: 'Интерьер', img: IMG2, year: '2024' },
  { id: 3, t: 'Fluid Forms', cat: '3D', img: IMG3, year: '2023' },
  { id: 4, t: 'Lime Press', cat: 'Брендинг', img: IMG3, year: '2023' },
  { id: 5, t: 'Concrete Space', cat: 'Интерьер', img: IMG1, year: '2022' },
  { id: 6, t: 'Coral Render', cat: '3D', img: IMG2, year: '2022' },
];

const TEAM = [
  { n: 'Алиса Вернер', r: 'Креативный директор', e: '🎨' },
  { n: 'Марк Дубовик', r: 'Арт-директор', e: '📐' },
  { n: 'Ника Соло', r: 'Дизайн-лид', e: '✦' },
  { n: 'Тимур Фокс', r: '3D / Моушн', e: '◢' },
];

export default function Index() {
  const [filter, setFilter] = useState('Все');
  const [menu, setMenu] = useState(false);
  const works = filter === 'Все' ? WORKS : WORKS.filter((w) => w.cat === filter);

  const go = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream text-ink font-body selection:bg-lime selection:text-ink overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference text-cream">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
          <button onClick={() => go('hero')} className="font-display font-extrabold text-xl tracking-tight">
            NEURO<span className="text-lime">·</span>STUDIO
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className="hover:text-lime transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            <Icon name={menu ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
        {menu && (
          <div className="md:hidden bg-ink text-cream px-5 pb-6 flex flex-col gap-4 mix-blend-normal">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className="text-left text-lg font-display">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-5 md:px-10 grain">
        <div className="absolute top-32 right-6 md:right-24 w-40 h-40 md:w-72 md:h-72 rounded-full bg-lime blur-[2px] animate-spin-slow flex items-center justify-center">
          <span className="font-display text-[9px] md:text-xs tracking-[0.3em] text-ink uppercase">креативная · студия · с · 2014 ·</span>
        </div>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <p className="font-display text-sm tracking-[0.25em] uppercase mb-6 animate-fade-up">Дизайн-студия полного цикла</p>
          <h1 className="font-display font-black leading-[0.85] text-[15vw] md:text-[11vw]">
            <span className="block animate-fade-up">Делаем</span>
            <span className="block text-stroke animate-fade-up" style={{ animationDelay: '0.1s' }}>бренды</span>
            <span className="block animate-fade-up" style={{ animationDelay: '0.2s' }}>
              которые <span className="text-coral italic">живут</span>
            </span>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end gap-6 md:justify-between animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="max-w-md text-lg text-ink/70">
              Превращаем смелые идеи в визуальные истории — от логотипа до полноценного цифрового опыта.
            </p>
            <button onClick={() => go('work')} className="group inline-flex items-center gap-3 bg-ink text-cream rounded-full pl-7 pr-3 py-3 font-medium hover:bg-coral transition-colors">
              Смотреть работы
              <span className="w-9 h-9 rounded-full bg-lime text-ink flex items-center justify-center group-hover:rotate-45 transition-transform">
                <Icon name="ArrowUpRight" size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-ink text-cream py-5 overflow-hidden border-y border-cream/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center">
              {['Брендинг', 'Веб-дизайн', 'Арт-дирекшн', 'Моушн', 'Айдентика', 'UX/UI'].map((w) => (
                <span key={w} className="font-display text-2xl md:text-4xl font-bold mx-6 flex items-center gap-6">
                  {w} <span className="text-lime">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-3">
            <span className="font-display text-sm tracking-[0.25em] uppercase text-ink/50">(О нас)</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.05]">
              Мы — команда дизайнеров, стратегов и художников, одержимых деталями. Создаём смыслы, которые невозможно <span className="text-coral">не заметить</span>.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { k: '120+', v: 'проектов' },
                { k: '10', v: 'лет на рынке' },
                { k: '24', v: 'награды' },
                { k: '95%', v: 'клиентов с нами' },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display font-black text-4xl md:text-6xl">{s.k}</div>
                  <div className="text-ink/60 mt-2">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-ink text-cream px-5 md:px-10 py-24 md:py-32 rounded-t-[2.5rem]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display font-black text-4xl md:text-7xl">Услуги</h2>
            <span className="font-display text-sm tracking-[0.25em] uppercase text-cream/50 hidden md:block">(Что мы делаем)</span>
          </div>
          <div className="divide-y divide-cream/15 border-y border-cream/15">
            {SERVICES.map((s) => (
              <div key={s.n} className="group py-8 grid md:grid-cols-12 gap-4 items-center hover:px-4 transition-all">
                <span className="md:col-span-1 font-display text-cream/40 group-hover:text-lime transition-colors">{s.n}</span>
                <div className="md:col-span-1 text-lime"><Icon name={s.i} size={28} /></div>
                <h3 className="md:col-span-4 font-display font-bold text-2xl md:text-4xl group-hover:text-lime transition-colors">{s.t}</h3>
                <p className="md:col-span-5 text-cream/60">{s.d}</p>
                <div className="md:col-span-1 flex justify-end">
                  <Icon name="ArrowUpRight" size={26} className="group-hover:rotate-45 group-hover:text-lime transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / GALLERY */}
      <section id="work" className="bg-ink text-cream px-5 md:px-10 pb-28 pt-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2 className="font-display font-black text-4xl md:text-7xl">Портфолио</h2>
            <div className="flex flex-wrap gap-3">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                    filter === f ? 'bg-lime text-ink border-lime' : 'border-cream/30 text-cream/70 hover:border-lime hover:text-lime'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {works.map((w, i) => (
              <div
                key={w.id}
                className="group relative overflow-hidden rounded-2xl bg-cream/5 aspect-[4/5] animate-fade-up cursor-pointer"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <img src={w.img} alt={w.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-lime text-xs font-medium tracking-widest uppercase mb-1">{w.cat} · {w.year}</span>
                  <h3 className="font-display font-bold text-2xl">{w.t}</h3>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-lime text-ink flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <Icon name="ArrowUpRight" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-5 md:px-10 py-24 md:py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display font-black text-4xl md:text-7xl">Команда</h2>
            <span className="font-display text-sm tracking-[0.25em] uppercase text-ink/40 hidden md:block">(Люди студии)</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m, i) => (
              <div key={m.n} className="group relative rounded-2xl border border-ink/10 p-6 h-72 flex flex-col justify-between hover:bg-ink hover:text-cream transition-colors animate-fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
                <span className="text-5xl">{m.e}</span>
                <div>
                  <h3 className="font-display font-bold text-2xl leading-tight">{m.n}</h3>
                  <p className="text-ink/60 group-hover:text-lime transition-colors mt-1">{m.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-lime text-ink px-5 md:px-10 py-24 md:py-32 grain rounded-t-[2.5rem]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="font-display text-sm tracking-[0.25em] uppercase">(Поговорим?)</span>
          <h2 className="font-display font-black text-[12vw] md:text-[8vw] leading-[0.9] my-6">
            Начнём <br /> проект
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <a href="mailto:hello@neuro.studio" className="group">
              <p className="text-ink/60 text-sm uppercase tracking-widest mb-2">Почта</p>
              <p className="font-display font-bold text-xl md:text-2xl group-hover:underline">hello@neuro.studio</p>
            </a>
            <a href="tel:+79000000000" className="group">
              <p className="text-ink/60 text-sm uppercase tracking-widest mb-2">Телефон</p>
              <p className="font-display font-bold text-xl md:text-2xl group-hover:underline">+7 900 000-00-00</p>
            </a>
            <div>
              <p className="text-ink/60 text-sm uppercase tracking-widest mb-2">Адрес</p>
              <p className="font-display font-bold text-xl md:text-2xl">Москва, Дизайн-квартал, 14</p>
            </div>
          </div>
          <button className="mt-14 inline-flex items-center gap-3 bg-ink text-cream rounded-full pl-7 pr-3 py-3 font-medium hover:bg-coral transition-colors group">
            Оставить заявку
            <span className="w-9 h-9 rounded-full bg-lime text-ink flex items-center justify-center group-hover:rotate-45 transition-transform">
              <Icon name="ArrowUpRight" size={18} />
            </span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream px-5 md:px-10 py-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
          <span className="font-display font-extrabold text-cream text-lg">NEURO<span className="text-lime">·</span>STUDIO</span>
          <span>© 2024 — Сделано с любовью к деталям</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-lime transition-colors">Telegram</a>
            <a href="#" className="hover:text-lime transition-colors">Behance</a>
            <a href="#" className="hover:text-lime transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
