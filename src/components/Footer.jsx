import { LogoMedallion } from './Logo.jsx';
import { IconClock, IconInstagram, IconPin, IconWhatsApp } from './Icons.jsx';
import { STORE } from '../data/config.js';
import { whatsappLink } from '../data/whatsapp.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="scallop scallop--top-brown" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <LogoMedallion size={128} />
          <p className="script footer__slogan">Delícias personalizadas para momentos inesquecíveis.</p>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <a href={whatsappLink('Olá, Bia! Gostaria de mais informações 🍿')} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp width={18} height={18} /> {STORE.whatsappDisplay}
          </a>
          <a href={`https://instagram.com/${STORE.instagram}`} target="_blank" rel="noopener noreferrer">
            <IconInstagram width={18} height={18} /> @{STORE.instagram}
          </a>
        </div>

        <div className="footer__col">
          <h4>Atendimento</h4>
          <span>
            <IconClock width={18} height={18} /> {STORE.hours}
          </span>
          <span>
            <IconPin width={18} height={18} /> {STORE.city}
          </span>
        </div>

        <div className="footer__col">
          <h4>Navegue</h4>
          <a href="#sobre">Sobre a Bia</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#embalagens">Embalagens & Kits</a>
          <a href="#pedido">Fazer pedido</a>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {STORE.name} · Feito com carinho 💕
      </p>
    </footer>
  );
}
