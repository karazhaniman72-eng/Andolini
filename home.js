// Andolini — single-page calling card: Hero · Collections · Photo banner · Contact
function Home({ onOpen, jumpRef }) {
  const Plate = window.KitPlate;
  const works = window.KIT_WORKS;

  React.useEffect(() => {
    const updateContact = () => {
      const footer = document.getElementById('contact');
      if (!footer) return;

      const overline = footer.querySelector('.andolini-overline');
      const heading = footer.querySelector('h2');
      const text = footer.querySelector('p');
      const action = footer.querySelector('a[href^="mailto:"][style*="margin-top"]');
      if (overline) overline.textContent = 'Order our costumes';
      if (heading) heading.innerHTML = 'Visit a showroom<br>to order.';
      if (text) text.textContent = 'Come by any of our ateliers for fittings and to place an order, or write to us and we’ll arrange your commission.';
      if (action) action.textContent = 'Place an order';

      const instagram = footer.querySelector('a[href*="instagram.com"]');
      if (instagram && !footer.dataset.localInstagrams) {
        const textNode = Array.from(instagram.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
        instagram.href = 'https://instagram.com/andolini_astana';
        if (textNode) textNode.nodeValue = ' @andolini_astana';

        const almaty = instagram.cloneNode(true);
        almaty.href = 'https://instagram.com/andolini_almaty';
        const almatyText = Array.from(almaty.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
        if (almatyText) almatyText.nodeValue = ' @andolini_almaty';
        instagram.after(almaty);
        footer.dataset.localInstagrams = 'true';
      }
    };

    updateContact();
    const timer = window.setTimeout(updateContact, 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
  <div>
{/* HERO */}
<section style={{ position: 'relative', minHeight: '100vh', marginTop: -64, overflow: 'hidden',
                background: 'linear-gradient(165deg, #DACBAE 0%, #CEBEA6 52%, #B9A687 100%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                padding: '0 var(--space-5)' }}>
{/* Exact supplied logo artwork, with its beige rectangle removed in the SVG filter. */}
<img src="andolini_logo_clean.svg" alt="Andolini — Made in Italy" style={{
  width: 'min(1600px, 88vw)', height: 'auto', display: 'block', transform: 'translateY(-2.5vh)'
}} />
<div className="andolini-overline" style={{ color: 'rgba(255,255,255,0.82)', marginTop: 'var(--space-7)' }}>
Costume Atelier &middot; Firenze
</div>
<button onClick={() => jumpRef('work')} aria-label="View work" style={{
  position: 'absolute', bottom: 36, color: 'var(--white)', background: 'none', border: 'none',
  cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
  fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
View work <window.KitIcon.ArrowDown/>
</button>
</section>

{/* WORK — four collections in a row */}
<section id="work" style={{ padding: 'var(--space-9) 0 var(--space-10)' }}>
<div style={{ ...container, marginBottom: 'var(--space-7)' }}>
  <div className="andolini-overline" style={{ marginBottom: 'var(--space-3)' }}>Selected work</div>
<h2 style={{ fontSize: 'clamp(28px, 5vw, var(--fs-h2))', fontWeight: 400 }}>Our costumes</h2>
</div>
<div style={{ ...container, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }} className="kit-collections">
{works.map((w) => (
  <button key={w.id} onClick={() => onOpen(w)} style={{
  display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none',
  padding: 0, cursor: 'pointer' }}>
<Plate tone={w.cover} style={{ width: '100%', aspectRatio: '3/4', borderRadius: 'var(--radius-sm)' }}>
<span className="kit-tap" style={{
  position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 'var(--space-5)',
  background: 'linear-gradient(to top, rgba(27,24,19,0.55), transparent 55%)' }}>
<span>
  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 21,
               letterSpacing: '0.06em', color: 'var(--white)' }}>{w.name}</span>
<span className="kit-hint" style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 10,
                                  letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginTop: 6,
                                  opacity: 0, transition: 'opacity var(--dur-base) var(--ease-standard)' }}>
{w.shots.length} photos &middot; Tap to view</span>
  </span>
  </span>
  </Plate>
  </button>
))}
</div>
</section>

{/* PHOTO BANNER — big campaign image */}
<section id="atelier" style={{ position: 'relative', minHeight: '78vh', display: 'flex',
                             alignItems: 'center', overflow: 'hidden' }}>
<div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
            background: "url('Hero.jpg') top center/cover no-repeat" }}></div>
<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(27,24,19,0.62), rgba(27,24,19,0.18) 60%, transparent)', pointerEvents: 'none' }}></div>
<div style={{ position: 'relative', ...container, pointerEvents: 'none' }}>
<div style={{ maxWidth: 560 }}>
<div className="andolini-overline" style={{ color: 'var(--sand-400)', marginBottom: 'var(--space-5)' }}>The Atelier</div>
<h2 style={{ fontSize: 'clamp(28px,5vw,68px)', fontWeight: 400, lineHeight: 1.04, color: 'var(--sand-50)',
           letterSpacing: '0.02em' }}>Dressed in Florence,<br/>seen on every stage.</h2>
<p style={{ marginTop: 'var(--space-6)', color: 'rgba(250,247,241,0.82)', fontSize: 'clamp(15px,2.5vw,18px)', maxWidth: 460 }}>
Period tailoring to contemporary campaigns &mdash; built by hand, fitted to your production.
</p>
</div>
</div>
</section>
</div>
);
}

const container = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-5)' };
window.KitHome = Home;