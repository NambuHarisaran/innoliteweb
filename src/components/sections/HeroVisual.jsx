import { images } from '../../data/site.js';

// Vertical auto-scrolling image gallery with varied tile shapes.
// NOTE: these are placeholder photos (from the shared Unsplash set) — swap the
// `src` values for InnoLite's own classroom / project photos when available.

const columnA = [
  { src: images.about_students, shape: 'gshape-arch', h: 'h-56' },
  { src: images.why_coding, shape: 'gshape-circle', h: 'aspect-square' },
  { src: images.hero_circuit, shape: 'gshape-rounded', h: 'h-44' },
  { src: images.why_lab, shape: 'gshape-blob', h: 'h-52' },
];

const columnB = [
  { src: images.hero_ai, shape: 'gshape-circle', h: 'aspect-square' },
  { src: images.hero_drone, shape: 'gshape-arch', h: 'h-56' },
  { src: images.why_electronics, shape: 'gshape-leaf', h: 'h-48' },
  { src: images.about_students, shape: 'gshape-rounded', h: 'h-44' },
];

function Tile({ src, shape, h }) {
  return (
    <div
      className={`overflow-hidden bg-gray-100 shadow-lg shadow-navy/10 ring-1 ring-black/5 ${shape} ${h}`}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function Column({ items, direction }) {
  // Duplicate the set so the translateY(-50%) loop is seamless.
  const doubled = [...items, ...items];
  const track = direction === 'up' ? 'gallery-track-up' : 'gallery-track-down';
  return (
    <div className={`flex flex-col gap-4 ${track}`}>
      {doubled.map((tile, i) => (
        <Tile key={i} {...tile} />
      ))}
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Soft brand glow behind the gallery */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/15 blur-[80px]" />

      <div className="hero-gallery relative h-[440px] overflow-hidden sm:h-[520px] lg:h-[560px]">
        <div className="grid grid-cols-2 gap-4 px-1">
          <Column items={columnA} direction="up" />
          <Column items={columnB} direction="down" />
        </div>
      </div>

      {/* Floating brand chip */}
      <div className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-pill border border-gray-100 bg-white px-4 py-2 shadow-lg">
        <p className="flex items-center gap-2 whitespace-nowrap font-display text-sm font-bold text-navy">
          <span className="h-2 w-2 rounded-full bg-orange" />
          200+ Students Trained
        </p>
      </div>
    </div>
  );
}
