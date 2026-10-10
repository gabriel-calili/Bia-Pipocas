import { useId } from 'react';

/** Gera o contorno ondulado (estilo renda / etiqueta de confeitaria). */
export function scallopPath(cx, cy, r, bumps = 24, depth = 6) {
  const step = (Math.PI * 2) / bumps;
  const pt = (rad, a) => [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
  const [sx, sy] = pt(r, -Math.PI / 2);
  let d = `M${sx.toFixed(2)} ${sy.toFixed(2)}`;
  for (let i = 0; i < bumps; i++) {
    const a0 = -Math.PI / 2 + i * step;
    const [mx, my] = pt(r + depth * 2, a0 + step / 2);
    const [ex, ey] = pt(r, a0 + step);
    d += ` Q${mx.toFixed(2)} ${my.toFixed(2)} ${ex.toFixed(2)} ${ey.toFixed(2)}`;
  }
  return `${d} Z`;
}

/** Pequeno ícone de pipoca usado como ornamento. */
export function PopcornMark({ x = 0, y = 0, scale = 1, fill = '#FFF9F2', stroke = '#C99A32' }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill} stroke={stroke} strokeWidth={1.4}>
      <circle cx="-7" cy="2" r="6.5" />
      <circle cx="7" cy="2" r="6.5" />
      <circle cx="-3.5" cy="-6" r="6.5" />
      <circle cx="4.5" cy="-6.5" r="6" />
      <circle cx="0" cy="4" r="6.5" />
    </g>
  );
}

/**
 * Logotipo completo: medalhão com moldura ondulada, lettering "Bia" dourado
 * e descrição "Pipocas Gourmet".
 */
export function LogoMedallion({ size = 220, className = '' }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 240 240"
      role="img"
      aria-label="Bia Pipocas Gourmet"
    >
      <defs>
        <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E3C27A" />
          <stop offset="0.45" stopColor="#C99A32" />
          <stop offset="0.75" stopColor="#B8862A" />
          <stop offset="1" stopColor="#D9B45E" />
        </linearGradient>
      </defs>

      <path d={scallopPath(120, 120, 106, 28, 4.5)} fill="#FFF9F2" stroke="#EFB7B5" strokeWidth="2" />
      <circle cx="120" cy="120" r="96" fill="#F8D1D0" />
      <circle
        cx="120"
        cy="120"
        r="88"
        fill="none"
        stroke="#FFF9F2"
        strokeWidth="2.4"
        strokeDasharray="0.1 7"
        strokeLinecap="round"
      />

      <PopcornMark x={120} y={58} scale={1.05} />

      <text
        x="120"
        y="142"
        textAnchor="middle"
        fontFamily="'Great Vibes', cursive"
        fontSize="92"
        fill={`url(#gold-${id})`}
        stroke="#FFF9F2"
        strokeWidth="0.6"
      >
        Bia
      </text>

      <g stroke="#C99A32" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M58 170 q10 -6 22 0" />
        <path d="M160 170 q10 -6 22 0" />
      </g>
      <text
        x="120"
        y="174"
        textAnchor="middle"
        fontFamily="'Quicksand', sans-serif"
        fontWeight="700"
        fontSize="12.5"
        letterSpacing="3.2"
        fill="#6B452B"
      >
        PIPOCAS
      </text>
      <text
        x="120"
        y="192"
        textAnchor="middle"
        fontFamily="'Quicksand', sans-serif"
        fontWeight="600"
        fontSize="9.5"
        letterSpacing="4"
        fill="#9A6A48"
      >
        GOURMET
      </text>
    </svg>
  );
}

/** Versão simplificada para tamanhos pequenos (cabeçalho, rodapé). */
export function LogoInline({ light = false }) {
  return (
    <span className={`logo-inline ${light ? 'logo-inline--light' : ''}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
        <path d={scallopPath(20, 20, 17, 14, 1.2)} fill="#FFF9F2" stroke="#EFB7B5" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="14.5" fill="#F8D1D0" />
        <PopcornMark x={20} y={21} scale={0.72} />
      </svg>
      <span className="logo-inline__text">
        <span className="logo-inline__name">Bia</span>
        <span className="logo-inline__sub">Pipocas Gourmet</span>
      </span>
    </span>
  );
}
