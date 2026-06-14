import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO = 'https://cdn.poehali.dev/projects/76ed79bb-4104-423a-a9f5-a97385405843/bucket/9149cacd-7056-47db-bcc5-ab6de0beb062.png';
const IMG1 = 'https://cdn.poehali.dev/projects/76ed79bb-4104-423a-a9f5-a97385405843/files/8afd5493-e2e6-4cb8-9d7f-edf04baac815.jpg';
const IMG2 = 'https://cdn.poehali.dev/projects/76ed79bb-4104-423a-a9f5-a97385405843/files/cae73415-40d3-42f9-89e6-7bb2cca2cefb.jpg';
const IMG3 = 'https://cdn.poehali.dev/projects/76ed79bb-4104-423a-a9f5-a97385405843/files/5e6ac74f-4edd-418f-a57a-61d4e5f41354.jpg';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'О студии' },
  { id: 'services', label: 'Услуги' },
  { id: 'gallery', label: 'Работы' },
  { id: 'team', label: 'Мастера' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { n: '01', t: 'Парикмахерский зал', d: 'Стрижки, окрашивание, уходовые процедуры и стайлинг для любого типа волос.', i: 'Scissors', price: 'от 1 500 ₽' },
  { n: '02', t: 'Ногтевой сервис', d: 'Маникюр, педикюр, наращивание и дизайн от сертифицированных мастеров.', i: 'Hand', price: 'от 1 200 ₽' },
  { n: '03', t: 'Макияж и брови', d: 'Дневной, вечерний и свадебный макияж, оформление и ламинирование бровей.', i: 'Sparkles', price: 'от 1 000 ₽' },
  { n: '04', t: 'Уход за лицом', d: 'Косметология, чистки, массаж и питательные процедуры для сияющей кожи.', i: 'Flower', price: 'от 2 000 ₽' },
];

const FILTERS = ['Все', 'Волосы', 'Ногти', 'Макияж'];
const WORKS = [
  { id: 1, t: 'Тёплое окрашивание', cat: 'Волосы', img: IMG2 },
  { id: 2, t: 'Нюдовый маникюр', cat: 'Ногти', img: IMG1 },
  { id: 3, t: 'Вечерний образ', cat: 'Макияж', img: IMG3 },
  { id: 4, t: 'Локоны и стайлинг', cat: 'Волосы', img: IMG3 },
  { id: 5, t: 'Дизайн ногтей', cat: 'Ногти', img: IMG2 },
  { id: 6, t: 'Свадебный макияж', cat: 'Макияж', img: IMG1 },
];

const TEAM = [
  { n: 'Карина', r: 'Топ-стилист', e: '✂' },
  { n: 'Лейла', r: 'Мастер ногтевого сервиса', e: '✦' },
  { n: 'Амина', r: 'Визажист', e: '◍' },
  { n: 'Дина', r: 'Косметолог', e: '✿' },
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
    <div className="min-h-screen bg-cream text-ink font-body selection:bg-gold selection:text-cream overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/70 border-b border-gold/15">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
          <button onClick={() => go('hero')} className="font-display text-3xl tracking-wide leading-none text-left">
            КАЙЯ<span className="block text-[9px] tracking-[0.4em] uppercase text-caramel font-body mt-0.5">студия красоты</span>
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className="hover:text-gold transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <button onClick={() => go('contacts')} className="hidden md:inline-flex items-center gap-2 bg-ink text-cream rounded-full px-5 py-2.5 text-sm hover:bg-caramel transition-colors">
            Записаться
          </button>
          <button className="md:hidden text-ink" onClick={() => setMenu(!menu)}>
            <Icon name={menu ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
        {menu && (
          <div className="md:hidden bg-cream px-5 pb-6 flex flex-col gap-4 border-t border-gold/15">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className="text-left text-lg font-display pt-3">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-end md:items-center">
        <img src={HERO} alt="КАЙЯ студия красоты" className="absolute inset-0 w-full h-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 md:px-10 pb-16 md:pb-0 pt-32">
          <div className="max-w-2xl">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-caramel mb-6 animate-fade-up">Сияй каждый день</p>
            <h1 className="font-display text-[16vw] md:text-[8.5vw] leading-[0.9] animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Красота, <br />
              <span className="italic text-gold">наполненная</span> <br />
              светом
            </h1>
            <p className="mt-8 max-w-md text-lg text-ink/70 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Студия красоты КАЙЯ — пространство, где о вас заботятся с любовью. Волосы, ногти, макияж и уход в атмосфере уюта.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => go('contacts')} className="group inline-flex items-center gap-3 bg-ink text-cream rounded-full pl-7 pr-3 py-3 font-medium hover:bg-caramel transition-colors">
                Записаться онлайн
                <span className="w-9 h-9 rounded-full bg-gold text-cream flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <Icon name="ArrowUpRight" size={18} />
                </span>
              </button>
              <button onClick={() => go('services')} className="inline-flex items-center gap-2 border border-gold/40 rounded-full px-7 py-3 font-medium hover:bg-gold/10 transition-colors">
                Услуги и цены
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-ink text-cream py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center">
              {['Стрижки', 'Окрашивание', 'Маникюр', 'Педикюр', 'Макияж', 'Брови', 'Уход'].map((w) => (
                <span key={w} className="font-display italic text-3xl md:text-5xl mx-6 flex items-center gap-6">
                  {w} <span className="text-gold">✦</span>
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
            <span className="font-body text-xs tracking-[0.3em] uppercase text-caramel">(О студии)</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Мы создаём место, где каждая гостья чувствует себя особенной. Опытные мастера, премиальная косметика и <span className="italic text-gold">тёплая атмосфера</span>.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { k: '8', v: 'лет заботы' },
                { k: '5 000+', v: 'довольных гостей' },
                { k: '12', v: 'мастеров' },
                { k: '4.9', v: 'рейтинг' },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-5xl md:text-7xl text-gold">{s.k}</div>
                  <div className="text-ink/60 mt-2">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-sand px-5 md:px-10 py-24 md:py-32 rounded-t-[2.5rem]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display text-5xl md:text-7xl">Услуги</h2>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-caramel hidden md:block">(Что мы делаем)</span>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <div key={s.n} className="group bg-cream rounded-3xl p-8 hover:shadow-xl hover:shadow-gold/10 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-cream transition-colors">
                    <Icon name={s.i} size={26} />
                  </span>
                  <span className="font-display text-2xl text-gold">{s.price}</span>
                </div>
                <h3 className="font-display text-3xl mb-2">{s.t}</h3>
                <p className="text-ink/60">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-sand px-5 md:px-10 pb-28 pt-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2 className="font-display text-5xl md:text-7xl">Наши работы</h2>
            <div className="flex flex-wrap gap-3">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                    filter === f ? 'bg-ink text-cream border-ink' : 'border-gold/40 text-ink/70 hover:border-gold hover:text-gold'
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
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] animate-fade-up cursor-pointer"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <img src={w.img} alt={w.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream">
                  <span className="text-gold text-xs font-medium tracking-widest uppercase mb-1">{w.cat}</span>
                  <h3 className="font-display text-3xl">{w.t}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-5 md:px-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display text-5xl md:text-7xl">Мастера</h2>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-caramel hidden md:block">(Команда КАЙЯ)</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m, i) => (
              <div key={m.n} className="group relative rounded-3xl bg-sand p-6 h-72 flex flex-col justify-between hover:bg-ink hover:text-cream transition-colors animate-fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
                <span className="text-5xl text-gold">{m.e}</span>
                <div>
                  <h3 className="font-display text-3xl leading-tight">{m.n}</h3>
                  <p className="text-ink/60 group-hover:text-gold transition-colors mt-1">{m.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-ink text-cream px-5 md:px-10 py-24 md:py-32 rounded-t-[2.5rem]">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">(Запишитесь)</span>
          <h2 className="font-display text-[14vw] md:text-[7vw] leading-[0.9] my-6">
            Подарите себе <span className="italic text-gold">сияние</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <a href="tel:+79000000000" className="group">
              <p className="text-cream/50 text-xs uppercase tracking-widest mb-2">Телефон</p>
              <p className="font-display text-2xl md:text-3xl group-hover:text-gold transition-colors">+7 900 000-00-00</p>
            </a>
            <a href="mailto:hello@kaya.beauty" className="group">
              <p className="text-cream/50 text-xs uppercase tracking-widest mb-2">Почта</p>
              <p className="font-display text-2xl md:text-3xl group-hover:text-gold transition-colors">hello@kaya.beauty</p>
            </a>
            <div>
              <p className="text-cream/50 text-xs uppercase tracking-widest mb-2">Адрес</p>
              <p className="font-display text-2xl md:text-3xl">Москва, ул. Цветочная, 7</p>
            </div>
          </div>
          <button className="mt-14 inline-flex items-center gap-3 bg-gold text-cream rounded-full pl-7 pr-3 py-3 font-medium hover:bg-caramel transition-colors group">
            Записаться на процедуру
            <span className="w-9 h-9 rounded-full bg-cream text-ink flex items-center justify-center group-hover:rotate-45 transition-transform">
              <Icon name="ArrowUpRight" size={18} />
            </span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream px-5 md:px-10 py-10 border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
          <span className="font-display text-2xl text-cream">КАЙЯ</span>
          <span>© 2024 — Студия красоты. Сделано с заботой</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold transition-colors">Telegram</a>
            <a href="#" className="hover:text-gold transition-colors">VK</a>
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
