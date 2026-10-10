import { useEffect, useState } from 'react';
import { LogoInline } from './Logo.jsx';
import { IconBag, IconClose, IconMenu } from './Icons.jsx';
import { useCart } from '../context/CartContext.jsx';
import { formatBRL } from '../data/menu.js';

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#embalagens', label: 'Embalagens & Kits' },
  { href: '#pedido', label: 'Pedido' },
];

export default function Header() {
  const { count, total } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" aria-label="Bia Pipocas — início">
          <LogoInline />
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#pedido" className="cart-pill" aria-label={`Meu pedido: ${count} itens`}>
            <IconBag />
            <span className="cart-pill__total">{count > 0 ? formatBRL(total) : 'Meu pedido'}</span>
            {count > 0 && <span className="cart-pill__badge">{count}</span>}
          </a>
          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
