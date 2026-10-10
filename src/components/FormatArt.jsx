/** Ilustrações das embalagens (rosa + dourado + creme). */

const S = { stroke: '#6B452B', strokeWidth: 1.6, strokeLinejoin: 'round', strokeLinecap: 'round' };
const pop = (cx, cy) => (
  <g fill="#FFF6E6" {...S} strokeWidth={1.2}>
    <circle cx={cx - 6} cy={cy} r="5" />
    <circle cx={cx + 6} cy={cy} r="5" />
    <circle cx={cx} cy={cy - 5} r="5.5" />
  </g>
);

function Bow({ x, y }) {
  return (
    <g fill="#EFB7B5" {...S} strokeWidth={1.2}>
      <path d={`M${x} ${y} l-8 -5 v10 Z`} />
      <path d={`M${x} ${y} l8 -5 v10 Z`} />
      <circle cx={x} cy={y} r="2.2" fill="#C99A32" />
    </g>
  );
}

const shapes = {
  bag: (
    <>
      {pop(32, 20)}
      {pop(46, 18)}
      <path d="M20 26h40l-4 40H24Z" fill="#FFF9F2" fillOpacity=".7" {...S} />
      <rect x="31" y="42" width="18" height="11" rx="3" fill="#F8D1D0" {...S} strokeWidth={1.2} />
      <Bow x={40} y={28} />
    </>
  ),
  cone: (
    <>
      {pop(32, 22)}
      {pop(48, 22)}
      {pop(40, 14)}
      <path d="M20 26h40L40 70Z" fill="#F8D1D0" {...S} />
      <path d="M26 34h28M31 44h18M35 54h10" stroke="#C99A32" strokeWidth="1.4" strokeDasharray="0.1 4" strokeLinecap="round" />
      <path d="M20 26q5 4 10 0t10 0 10 0 10 0" fill="none" {...S} />
    </>
  ),
  box: (
    <>
      {pop(32, 22)}
      {pop(48, 22)}
      <path d="M18 28h44v38H18Z" fill="#F8D1D0" {...S} />
      <path d="M18 28l4-6h36l4 6" fill="#FFF9F2" {...S} />
      <path d="M40 28v38" stroke="#EFB7B5" strokeWidth="4" />
      <Bow x={40} y={30} />
      <rect x="26" y="46" width="28" height="10" rx="3" fill="#FFF9F2" stroke="#C99A32" strokeWidth="1.2" />
    </>
  ),
  jar: (
    <>
      <rect x="22" y="14" width="36" height="8" rx="3" fill="#C99A32" {...S} />
      <path d="M22 22h36v40a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6Z" fill="#FFF9F2" fillOpacity=".6" {...S} />
      {pop(32, 40)}
      {pop(48, 42)}
      {pop(40, 56)}
      <Bow x={40} y={24} />
    </>
  ),
  bucket: (
    <>
      {pop(28, 20)}
      {pop(42, 16)}
      {pop(54, 21)}
      <path d="M16 24h48l-6 44H22Z" fill="#FFF9F2" {...S} />
      <path d="M26 24l2 44M36 24l1 44M46 24l-1 44M56 24l-3 44" stroke="#EFB7B5" strokeWidth="4" />
      <path d="M16 24h48l-6 44H22Z" fill="none" {...S} />
      <circle cx="40" cy="46" r="8" fill="#F8D1D0" stroke="#C99A32" strokeWidth="1.4" />
    </>
  ),
};

export default function FormatArt({ type, size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden="true">
      {shapes[type] ?? shapes.box}
    </svg>
  );
}
