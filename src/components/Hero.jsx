import { LogoMedallion } from './Logo.jsx';
import { IconSparkle, IconWhatsApp } from './Icons.jsx';
import { FLAVORS, FORMATS } from '../data/menu.js';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">
            <IconSparkle width={16} height={16} /> Pipocas gourmet personalizadas
          </span>
          <h1 className="hero__title">
            Pipocas feitas para <span className="script gold-text">encantar</span> e celebrar
          </h1>
          <p className="hero__lead">
            Um toque de carinho para deixar sua festa ainda mais especial. Sabores artesanais, embalagens
            delicadas e personalização em cada detalhe.
          </p>
          <div className="hero__ctas">
            <a href="#cardapio" className="btn btn--gold">
              Ver cardápio
            </a>
            <a href="#pedido" className="btn btn--outline">
              <IconWhatsApp width={18} height={18} /> Fazer pedido
            </a>
          </div>
          <ul className="hero__stats">
            <li>
              <strong>{FLAVORS.length}</strong> sabores
            </li>
            <li>
              <strong>{FORMATS.length}</strong> embalagens
            </li>
            <li>
              <strong>100%</strong> artesanal
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="arch-frame">
            <img src="/images/hero.jpg" alt="Caixinhas listradas em rosa com pipocas gourmet e laços de cetim" />
          </div>
          <LogoMedallion size={168} className="hero__medallion float" />
        </div>
      </div>
      <div className="scallop scallop--cream" aria-hidden="true" />
    </section>
  );
}
