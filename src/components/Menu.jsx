import { useMemo, useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import PopcornArt from './PopcornArt.jsx';
import { IconPlus } from './Icons.jsx';
import { CATEGORIES, FLAVORS, formatBRL, getStartingPrice } from '../data/menu.js';

export default function Menu({ onSelect }) {
  const [category, setCategory] = useState('todas');
  const [query, setQuery] = useState('');

  const flavors = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FLAVORS.filter(
      (f) =>
        (category === 'todas' || f.category === category) &&
        (!q || f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <section id="cardapio" className="section section--rose menu">
      <div className="scallop scallop--top-rose" aria-hidden="true" />
      <div className="container">
        <SectionTitle
          eyebrow="Cardápio digital"
          title="Nossos sabores"
          subtitle="Escolha seu sabor favorito, depois a embalagem e a quantidade. Seu pedido segue direto para o nosso WhatsApp."
        />

        <div className="menu__toolbar">
          <div className="tabs" role="tablist" aria-label="Categorias">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={category === c.id}
                className={`tab ${category === c.id ? 'tab--active' : ''}`}
                onClick={() => setCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <input
            className="search"
            type="search"
            placeholder="Buscar sabor…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar sabor"
          />
        </div>

        {flavors.length === 0 ? (
          <p className="empty">Nenhum sabor encontrado. Que tal tentar outra busca? 🍿</p>
        ) : (
          <ul className="flavor-grid">
            {flavors.map((f) => (
              <li key={f.id} className="flavor-card">
                {f.tags?.map((t) => (
                  <span key={t} className={`tag ${t === 'Assinatura' ? 'tag--gold' : ''}`}>
                    {t}
                  </span>
                ))}
                <div className="flavor-card__art">
                  <PopcornArt colors={f.colors} size={128} />
                </div>
                <span className="flavor-card__cat">{CATEGORIES.find((c) => c.id === f.category)?.label}</span>
                <h3 className="flavor-card__name">{f.name}</h3>
                <p className="flavor-card__desc">{f.description}</p>
                <div className="flavor-card__footer">
                  <span className="price">
                    <small>a partir de</small>
                    {formatBRL(getStartingPrice(f))}
                  </span>
                  <button className="btn btn--gold btn--sm" onClick={() => onSelect({ type: 'flavor', item: f })}>
                    <IconPlus width={16} height={16} /> Adicionar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="menu__banner">
          <img src="/images/texturas.jpg" alt="Pipocas com cobertura de chocolate, chocolate branco com confeitos, caramelo e leite em pó" loading="lazy" />
          <div className="menu__banner-copy">
            <span className="script">Não sabe qual escolher?</span>
            <p>Monte um pedido com vários sabores — combine cores e coberturas com o tema da sua festa.</p>
          </div>
        </div>
      </div>
      <div className="scallop scallop--cream" aria-hidden="true" />
    </section>
  );
}
