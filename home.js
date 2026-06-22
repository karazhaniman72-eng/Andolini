// Andolini — single-page calling card: Hero (logo) · Collections · Photo banner · Contact
function Home({ onOpen, jumpRef }) {
  const Plate = window.KitPlate;
  const works = window.KIT_WORKS;

  return (
    <div>
      {/* HERO — the logo is the hero */}
      <section style={{ position: 'relative', minHeight: '100vh', marginTop: -76,
        background: "linear-gradient(165deg, rgba(27,24,19,0.30), rgba(27,24,19,0.45)), url('Hero.jpg') center/cover no-repeat",
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        {/* HERO LOGO — the ANDOLINI wordmark lives in js/wordmark.js.
            To use your own logo instead: drop it in images/ (e.g. images/logo.png)
            and change the src below to:  src="images/logo.png" */}
        <img src={window.ANDOLINI_WORDMARK || 'images/logo.png'} alt="Andolini"
          style={{ width: 'min(620px, 72vw)', height: 'auto', display: 'block' }} />
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
      <section id="work" style={{ padding: 'var(--space-10) 0' }}>
        <div style={{ ...container, marginBottom: 'var(--space-8)' }}>
          <div className="andolini-overline" style={{ marginBottom: 'var(--space-3)' }}>Selected work</div>
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 400 }}>Our costumes</h2>
        </div>
        <div style={{ ...container, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}
          className="kit-collections">
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

      {/* PHOTO BANNER — big campaign image with text on top.
          TO ADD YOUR BANNER PHOTO:
            1) Drop the file into images/ (e.g. images/banner.jpg)
            2) In the `background` line below, swap the gradient for:
                 "url('images/banner.jpg') center/cover no-repeat"
          (A warm gradient is used until you add a photo.) */}
      <section id="atelier" style={{ position: 'relative', minHeight: '78vh', display: 'flex',
        alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
          background: "url('More3.jpg') center/cover no-repeat" }}></div>{/* ← banner photo */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(27,24,19,0.62), rgba(27,24,19,0.18) 60%, transparent)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', ...container, pointerEvents: 'none' }}>
          <div style={{ maxWidth: 560 }}>
            <div className="andolini-overline" style={{ color: 'var(--sand-400)', marginBottom: 'var(--space-5)' }}>The Atelier</div>
            <h2 style={{ fontSize: 'clamp(34px,5vw,68px)', fontWeight: 400, lineHeight: 1.04, color: 'var(--sand-50)',
              letterSpacing: '0.02em' }}>Dressed in Florence,<br/>seen on every stage.</h2>
            <p style={{ marginTop: 'var(--space-6)', color: 'rgba(250,247,241,0.82)', fontSize: 18, maxWidth: 460 }}>
              Period tailoring to contemporary campaigns &mdash; built by hand, fitted to your production.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const container = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-7)' };
window.KitHome = Home;
