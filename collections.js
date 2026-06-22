// Andolini — four collections. Tap one to scroll through its photos.
//
// ════════════════════════════════════════════════════════════════════
// ✦✦ YOUR PHOTOS GO HERE ✦✦
// ────────────────────────────────────────────────────────────────────
// Each collection has:
//   cover  → the photo on the front-page card
//   shots  → the photos shown when you tap that card (the gallery)
//
// HOW TO ADD A PHOTO:
//   1) Drop your image file into the  images/  folder
//      (e.g. images/costumes-1.jpg)
//   2) Replace a gradient string below with:
//          "url('images/costumes-1.jpg') center/cover no-repeat"
//
// Example — Costumes cover using a real photo:
//          cover: "url('images/costumes-1.jpg') center/cover no-repeat",
//
// Any gradient you don't replace simply stays as a coloured tile.
// ════════════════════════════════════════════════════════════════════
const KIT_WORKS = [
  { id: 'costumes', name: 'Costumes', tagline: 'Stage & screen wardrobe',
    cover: 'linear-gradient(150deg,#DACBAE,#9C8A6C)',   // ← front-page card photo
    shots: [                                            // ← gallery photos for "Costumes"
      'linear-gradient(150deg,#DACBAE,#9C8A6C)','linear-gradient(160deg,#E8DCC8,#B9A687)','linear-gradient(140deg,#CEBEA6,#786A51)','linear-gradient(150deg,#F3ECE0,#CEBEA6)','linear-gradient(160deg,#B9A687,#54493A)'] },
  { id: 'sport', name: 'Sport', tagline: 'Performance & tailored athletic',
    cover: 'linear-gradient(150deg,#E8DCC8,#B9A687)',   // ← front-page card photo
    shots: [                                            // ← gallery photos for "Sport"
      'linear-gradient(150deg,#E8DCC8,#B9A687)','linear-gradient(150deg,#DACBAE,#786A51)','linear-gradient(160deg,#CEBEA6,#9C8A6C)','linear-gradient(140deg,#F3ECE0,#DACBAE)'] },
  { id: 'accessories', name: 'Accessories', tagline: 'Bags, scarves & jewellery',
    cover: 'linear-gradient(150deg,#F3ECE0,#CEBEA6)',   // ← front-page card photo
    shots: [                                            // ← gallery photos for "Accessories"
      'linear-gradient(150deg,#F3ECE0,#CEBEA6)','linear-gradient(150deg,#E8DCC8,#B9A687)','linear-gradient(160deg,#DACBAE,#9C8A6C)','linear-gradient(150deg,#CEBEA6,#786A51)'] },
  { id: 'shoes', name: 'Shoes', tagline: 'Footwear, handmade',
    cover: 'linear-gradient(150deg,#CEBEA6,#786A51)',   // ← front-page card photo
    shots: [                                            // ← gallery photos for "Shoes"
      'linear-gradient(150deg,#CEBEA6,#786A51)','linear-gradient(150deg,#B9A687,#54493A)','linear-gradient(160deg,#DACBAE,#9C8A6C)','linear-gradient(140deg,#E8DCC8,#B9A687)'] },
];

function Plate({ tone, children, style }) {
  return (
    <div style={{ background: tone, position: 'relative', overflow: 'hidden', ...style }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.14 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(20px,3vw,42px)',
          letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--white)', paddingLeft: '0.3em' }}>A</span>
      </div>
      {children}
    </div>
  );
}
window.KitPlate = Plate;
window.KIT_WORKS = KIT_WORKS;
