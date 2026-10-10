import SectionTitle from './SectionTitle.jsx';
import FormatArt from './FormatArt.jsx';
import { IconCheck, IconGift } from './Icons.jsx';
import { FORMATS, KITS, formatBRL } from '../data/menu.js';

export default function Formats({ onSelect }) {
  return (
    <section id="embalagens" className="section formats">
      <div className="container">
        <SectionTitle
          eyebrow="Tipos de pipoca"
          title="Embalagens & Kits"
          subtitle="Todas as embalagens podem ser personalizadas com nome, tema e cores da sua comemoração."
        />

        <ul className="format-grid">
          {FORMATS.map((f) => (
            <li key={f.id} className="format-card">
              <div className="format-card__art">
                <FormatArt type={f.icon} size={84} />
              </div>
              <h3>{f.name}</h3>
              <span className="format-card__weight">{f.weight}</span>
              <p>{f.description}</p>
              <span className="price price--center">
                <small>a partir de</small>
                {formatBRL(f.price)}
              </span>
            </li>
          ))}
        </ul>
        <p className="note">
          * Sabores Chocolates e Especiais da Bia têm um pequeno adicional conforme o tamanho da embalagem. O valor
          exato aparece ao montar seu pedido.
        </p>

        <h3 className="kits__title script">Kits para festa</h3>
        <ul className="kit-grid">
          {KITS.map((k) => (
            <li key={k.id} className="kit-card">
              {k.tags?.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
              <span className="kit-card__icon">
                <IconGift width={26} height={26} />
              </span>
              <h4>{k.name}</h4>
              <p>{k.description}</p>
              <ul className="kit-card__list">
                {k.includes.map((i) => (
                  <li key={i}>
                    <IconCheck width={16} height={16} /> {i}
                  </li>
                ))}
              </ul>
              <div className="kit-card__footer">
                <span className="price">{formatBRL(k.price)}</span>
                <button className="btn btn--gold btn--sm" onClick={() => onSelect({ type: 'kit', item: k })}>
                  Quero este kit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
