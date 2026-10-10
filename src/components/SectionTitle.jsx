import { IconSparkle } from './Icons.jsx';

export default function SectionTitle({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className={`section-title ${light ? 'section-title--light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="script">{title}</h2>
      <div className="ornament" aria-hidden="true">
        <span />
        <IconSparkle width={16} height={16} />
        <span />
      </div>
      {subtitle && <p className="section-title__sub">{subtitle}</p>}
    </div>
  );
}
