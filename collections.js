// Andolini — four collections. Tap one to scroll through its photos.
//
// Each collection has:
//   cover → the photo shown on the front-page card
//   shots → the photos shown in the gallery when you tap that card
//
// Photos live in the repository root. To swap a photo, replace the
// filename below (filenames are case-sensitive on the live site).

const KIT_WORKS = [
  {
    id: 'costumes',
    name: 'Costumes',
    tagline: 'Stage & screen wardrobe',
    cover: "url('Costumes1.jpg') center/cover no-repeat",
    shots: [
      "url('Costumes1.jpg') center/cover no-repeat",
      "url('costumes2.jpg') center/cover no-repeat",
      "url('Costumes3.jpg') center/cover no-repeat",
      "url('Costumes4.jpg') center/cover no-repeat",
      "url('Costumes5.jpg') center/cover no-repeat",
    ],
  },
  {
    id: 'casual',
    name: 'Casual',
    tagline: 'Everyday tailoring',
    cover: "url('Casual1.jpg') center/cover no-repeat",
    shots: [
      "url('Casual1.jpg') center/cover no-repeat",
      "url('Casual2.jpg') center/cover no-repeat",
      "url('Casual3.jpg') center/cover no-repeat",
      "url('Casual4.jpg') center/cover no-repeat",
      "url('Casual5.PNG') center/cover no-repeat",
    ],
  },
  {
    id: 'sport',
    name: 'Sport',
    tagline: 'Performance & tailored athletic',
    cover: "url('sport1.jpg') center/cover no-repeat",
    shots: [
      "url('sport1.jpg') center/cover no-repeat",
      "url('sport2.jpg') center/cover no-repeat",
      "url('sport3.jpg') center/cover no-repeat",
      "url('sport4.jpg') center/cover no-repeat",
    ],
  },
  {
    id: 'more',
    name: 'More from us',
    tagline: 'Bags, scarves & jewellery',
    cover: "url('More1.jpg') top center/cover no-repeat",
    shots: [
      "url('More1.jpg') center/cover no-repeat",
      "url('More2.jpg') center/cover no-repeat",
      "url('More3.jpg') center/cover no-repeat",
      "url('More4.jpg') center/cover no-repeat",
      "url('More5.jpg') center/cover no-repeat",
    ],
  },
];

function Plate({ tone, children, style }) {
  return (
    <div style={{ background: tone, position: 'relative', overflow: 'hidden', ...style }}>
      {children}
    </div>
  );
}
window.KitPlate = Plate;
window.KIT_WORKS = KIT_WORKS;
