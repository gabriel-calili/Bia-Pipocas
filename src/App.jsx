import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Formats from './components/Formats.jsx';
import Order from './components/Order.jsx';
import Footer from './components/Footer.jsx';
import AddToCartModal from './components/AddToCartModal.jsx';
import { IconBag, IconCheck } from './components/Icons.jsx';
import { useCart } from './context/CartContext.jsx';
import { formatBRL } from './data/menu.js';

function FloatingCart() {
  const { count, total } = useCart();
  if (count === 0) return null;
  return (
    <a href="#pedido" className="floating-cart" aria-label="Ver meu pedido">
      <span className="floating-cart__icon">
        <IconBag />
        <span className="cart-pill__badge">{count}</span>
      </span>
      <span>Ver pedido · {formatBRL(total)}</span>
    </a>
  );
}

function Toast() {
  const { toast } = useCart();
  if (!toast) return null;
  return (
    <div className="toast" role="status" key={toast.id}>
      <IconCheck width={18} height={18} /> {toast.text}
    </div>
  );
}

export default function App() {
  const [selection, setSelection] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu onSelect={setSelection} />
        <Formats onSelect={setSelection} />
        <Order />
      </main>
      <Footer />
      <FloatingCart />
      <Toast />
      {selection && <AddToCartModal key={selection.item.id} selection={selection} onClose={() => setSelection(null)} />}
    </>
  );
}
