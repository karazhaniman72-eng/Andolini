// Shared chrome for the Andolini calling-card site: Header + Contact footer.
const { useState } = React;

const Icon = {
  Close: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M5 5l14 14M19 5L5 19"/></svg>,
ArrowDown: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M12 5v14M6 13l6 6 6-6"/></svg>,
Mail: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/></svg>,
Phone: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>,
Pin: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>,
Instagram: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>,
Menu: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
};

const linkStyle = {
  fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 12, letterSpacing: '0.18em',
  textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
};

function Header({ onJump, transparent }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn); fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const onDark = transparent && !scrolled && !menuOpen;
  const fg = onDark ? 'var(--sand-50)' : 'var(--ink-900)';
  const handleNav = (id) => { setMenuOpen(false); onJump(id); };
  return (
    <header style={{
    position: 'sticky', top: 0, zIndex: 50,
    background: (onDark && !menuOpen) ? 'transparent' : 'rgba(250,247,241,0.96)',
    backdropFilter: onDark ? 'none' : 'saturate(1.1) blur(12px)',
    borderBottom: onDark ? '1px solid transparent' : '1px solid var(--border-hairline)',
    transition: 'all var(--dur-base) var(--ease-standard)', color: fg,
  }}>
<div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-5)',
            height: 64, display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
<nav className="nav-desktop" style={{ display: 'flex', gap: 'var(--space-6)' }}>
<button onClick={() => handleNav('work')} style={{ ...linkStyle, color: fg }}>Work</button>
<button onClick={() => handleNav('atelier')} style={{ ...linkStyle, color: fg }}>Atelier</button>
  </nav>
<button onClick={() => handleNav('top')} style={{
  fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 20, letterSpacing: '0.3em',
  textTransform: 'uppercase', color: fg, background: 'none', border: 'none', cursor: 'pointer', paddingLeft: '0.3em' }}>Andolini</button>
<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 'var(--space-4)' }}>
<button onClick={() => handleNav('contact')} className="nav-desktop" style={{ ...linkStyle, color: fg }}>Contact</button>
<button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-btn" style={{
  display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: fg, padding: 4 }}>
{menuOpen ? <Icon.Close/> : <Icon.Menu/>}
</button>
  </div>
  </div>
 {menuOpen && (
   <div style={{
   background: 'rgba(250,247,241,0.98)', borderTop: '1px solid var(--border-hairline)',
   padding: 'var(--space-5) var(--space-5) var(--space-6)',
   display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
<button onClick={() => handleNav('work')} style={{ ...linkStyle, color: 'var(--ink-900)', textAlign: 'left', fontSize: 14, letterSpacing: '0.22em' }}>Work</button>
<button onClick={() => handleNav('atelier')} style={{ ...linkStyle, color: 'var(--ink-900)', textAlign: 'left', fontSize: 14, letterSpacing: '0.22em' }}>Atelier</button>
<button onClick={() => handleNav('contact')} style={{ ...linkStyle, color: 'var(--ink-900)', textAlign: 'left', fontSize: 14, letterSpacing: '0.22em' }}>Contact</button>
  </div>
)}
</header>
);
}

const ADDRESSES = [
  { city: 'Astana', street: 'ТРЦ Керуен, ул. Достык 9', zip: 'бутик 38, 2 этаж', tel: '+7 700 370-07-07' },
  { city: 'Almaty', street: 'Самал 2, 111', zip: 'Бутик 2-042', tel: '+7 747 370-07-07' },
  { city: 'Almaty', street: 'ТРЦ Mega Alma-Ata, ул. Розыбакиева 263', zip: 'бутик 2-32, 2 этаж', tel: '+7 701 049-07-07' },
  ];

const CONTACT = {
  instagram: 'andolini_astana',
  email: 'orders@andolini.it',
};

const mapsUrl = (a) => ({
  twogis: 'https://2gis.kz/astana/search/' + encodeURIComponent('Andolini ' + a.city),
  google: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Andolini ' + a.street + ' ' + a.zip),
});

function Contact({ id }) {
  return (
    <footer id={id} style={{ background: 'var(--ink-900)', color: 'var(--sand-50)',
                           padding: 'var(--space-10) var(--space-5) var(--space-7)' }}>
<div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', textAlign: 'center' }}>
<div className="andolini-overline" style={{ color: 'var(--sand-400)', marginBottom: 'var(--space-5)' }}>Наши бутики</div>
<h2 style={{ fontSize: 'clamp(28px,5vw,64px)', fontWeight: 400, lineHeight: 1.05, color: 'var(--sand-50)',
           letterSpacing: '0.02em' }}>Приходите<br/>примерить.</h2>
<p style={{ marginTop: 'var(--space-6)', color: 'var(--stone-300)', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto',
          fontSize: 'clamp(14px,2vw,17px)' }}>
Ждём вас в наших бутиках в Астане и Алматы — ежедневно с 10:00 до 22:00.
</p>
  </div>

<div style={{ maxWidth: 'var(--container-max)', margin: 'var(--space-8) auto 0', display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }} className="kit-addresses">
{ADDRESSES.map((a, i) => (
  <div key={i} style={{ borderTop: '1px solid var(--ink-700)', paddingTop: 'var(--space-5)',
                      display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
               <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 16, letterSpacing: '0.16em',
                           textTransform: 'uppercase', color: 'var(--sand-400)', marginBottom: 'var(--space-2)' }}>{a.city}</div>
               <a href={mapsUrl(a).twogis} target="_blank" rel="noopener"
style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--stone-300)', fontSize: 14, lineHeight: 1.5 }}>
<span style={{ marginTop: 2, color: 'var(--stone-400)', flex: 'none' }}><Icon.Pin/></span>
<span>{a.street}<br/>{a.zip}</span>
  </a>
<a href={'tel:' + a.tel.replace(/[^0-9+]/g, '')} style={{ ...contactLink, fontSize: 14 }}>
<Icon.Phone/> {a.tel}
</a>
<a href={mapsUrl(a).google} target="_blank" rel="noopener"
style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.16em',
       textTransform: 'uppercase', color: 'var(--stone-400)' }}>Открыть в Google Maps ↗</a>
  </div>
))}
  </div>

<div style={{ maxWidth: 'var(--container-narrow)', margin: 'var(--space-8) auto 0', textAlign: 'center' }}>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
<a href={'mailto:' + CONTACT.email} style={contactLink}><Icon.Mail/> {CONTACT.email}</a>
<a href={'https://instagram.com/' + CONTACT.instagram} target="_blank" rel="noopener" style={contactLink}>
  <Icon.Instagram/> @{CONTACT.instagram}
</a>
  </div>
<div>
  <a href={'mailto:' + CONTACT.email} style={{
  display: 'inline-flex', marginTop: 'var(--space-6)', fontFamily: 'var(--font-display)', fontSize: 13,
  letterSpacing: '0.18em', textTransform: 'uppercase', padding: '16px 40px', background: 'var(--sand-400)',
  color: 'var(--ink-900)', borderRadius: 'var(--radius-sm)' }}>Написать нам</a>
  </div>
  </div>
<div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', marginTop: 'var(--space-9)',
            paddingTop: 'var(--space-5)', borderTop: '1px solid var(--ink-700)', display: 'flex',
            justifyContent: 'space-between', fontSize: 12, color: 'var(--stone-400)', letterSpacing: '0.04em' }}>
<span>&copy; 2026 Andolini</span>
<span className="andolini-overline" style={{ color: 'var(--stone-400)' }}>Made in Italy</span>
  </div>
  </footer>
);
}

const contactLink = {
  display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--sand-50)',
  fontSize: 15, letterSpacing: '0.02em',
};

Object.assign(window, { KitHeader: Header, KitContact: Contact, KitIcon: Icon, kitLinkStyle: linkStyle });
