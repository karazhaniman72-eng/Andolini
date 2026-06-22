// Andolini — Lightbox: tap a work, scroll through its photos.
function Lightbox({ work, onClose, onOrder }) {
  const Plate = window.KitPlate;
  const open = !!work;
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 120, background: 'var(--sand-50)',
      transform: open ? 'translateY(0)' : 'translateY(100%)',
      opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), opacity var(--dur-base)',
      overflowY: 'auto' }} data-lightbox-scroll>
      {/* sticky bar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 5, background: 'rgba(250,247,241,0.9)',
        backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-hairline)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 var(--space-7)', height: 72 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: '0.06em' }}>{work?.name}</div>
          <div className="andolini-overline" style={{ marginTop: 2 }}>{work?.tagline}</div>
        </div>
        <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-900)' }}><window.KitIcon.Close/></button>
      </div>

      {/* scrollable photo stack */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: 'var(--space-7) var(--space-7) var(--space-9)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        {(work?.shots || []).map((t, i) => (
          <Plate key={i} tone={t} style={{ width: '100%', aspectRatio: i % 2 === 0 ? '4/5' : '3/4',
            borderRadius: 'var(--radius-sm)' }} />
        ))}
        <div style={{ textAlign: 'center', paddingTop: 'var(--space-6)' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>
            Order our costumes here.
          </p>
          <button onClick={onOrder} style={{ display: 'inline-flex', fontFamily: 'var(--font-display)',
            fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '15px 38px', border: 'none',
            cursor: 'pointer', background: 'var(--ink-900)', color: 'var(--sand-50)', borderRadius: 'var(--radius-sm)' }}>Order &mdash; view addresses</button>
        </div>
      </div>
    </div>
  );
}
window.KitLightbox = Lightbox;
