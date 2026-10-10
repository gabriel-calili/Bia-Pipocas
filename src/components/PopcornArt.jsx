import { scallopPath } from './Logo.jsx';

const PUFF = [
  [0, 0, 10],
  [-9, -3, 8.5],
  [9, -4, 8.5],
  [-4, -11, 8],
  [6, -11.5, 7.5],
  [-1, 6, 8],
];

function Puff({ x, y, s, fill }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {PUFF.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={fill} stroke="rgba(107,69,43,.22)" strokeWidth="0.9" />
      ))}
      <circle cx="-3" cy="-6" r="2.6" fill="#fff" opacity=".45" />
    </g>
  );
}

const SPRINKLES = [
  [44, 52, 20],
  [58, 40, -30],
  [72, 50, 60],
  [36, 72, -10],
  [62, 66, 35],
  [84, 70, -50],
  [50, 82, 80],
  [76, 84, 10],
];

/** Ilustração de pipoca colorida conforme o sabor. */
export default function PopcornArt({ colors, size = 120 }) {
  const { base, coat, accent } = colors;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true" className="popcorn-art">
      <path d={scallopPath(60, 60, 52, 20, 2.6)} fill="#FFF9F2" stroke="#EFB7B5" strokeWidth="1.4" />
      <circle cx="60" cy="60" r="46" fill="#FCE6E5" />
      <Puff x={42} y={72} s={1.15} fill={base} />
      <Puff x={80} y={74} s={1.05} fill={base} />
      <Puff x={61} y={50} s={1.15} fill={base} />
      <path
        d="M30 62 q8 -8 16 0 t16 0 t16 0 t14 0"
        fill="none"
        stroke={coat}
        strokeWidth="4.2"
        strokeLinecap="round"
        opacity=".92"
      />
      <path
        d="M34 80 q8 -7 15 0 t15 0 t15 0 t12 0"
        fill="none"
        stroke={coat}
        strokeWidth="3.4"
        strokeLinecap="round"
        opacity=".85"
      />
      {SPRINKLES.map(([x, y, r], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="5"
          height="2"
          rx="1"
          fill={accent}
          stroke="rgba(107,69,43,.15)"
          strokeWidth=".4"
          transform={`rotate(${r} ${x + 2.5} ${y + 1})`}
        />
      ))}
    </svg>
  );
}
