import { useMemo, useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { QtyStepper } from './AddToCartModal.jsx';
import { IconBag, IconCheck, IconTrash, IconWhatsApp } from './Icons.jsx';
import { useCart } from '../context/CartContext.jsx';
import { PAYMENT_METHODS, STORE } from '../data/config.js';
import { formatBRL } from '../data/menu.js';
import { buildOrderMessage, whatsappLink } from '../data/whatsapp.js';

const OCCASIONS = [
  'Aniversário',
  'Festa infantil',
  'Chá de bebê / revelação',
  'Casamento / noivado',
  'Batizado',
  'Evento corporativo',
  'Presente',
  'Outro',
];

const toISO = (d) => {
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
};

const INITIAL = {
  name: '',
  occasion: '',
  date: '',
  time: '',
  delivery: 'retirada',
  address: '',
  payment: PAYMENT_METHODS[0],
  customization: '',
  notes: '',
};

export default function Order() {
  const { items, total, count, updateQty, removeItem, clear } = useCart();
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sentLink, setSentLink] = useState(null);

  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + STORE.leadTimeDays);
    return toISO(d);
  }, []);

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (items.length === 0) er.cart = 'Adicione pelo menos um item do cardápio.';
    if (form.name.trim().length < 2) er.name = 'Informe seu nome.';
    if (form.delivery === 'entrega' && form.address.trim().length < 6) er.address = 'Informe o endereço de entrega.';
    if (form.date && form.date < minDate)
      er.date = `Encomendas precisam de pelo menos ${STORE.leadTimeDays} dias de antecedência.`;
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      document.querySelector('.order .is-invalid, .order .cart-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const link = whatsappLink(buildOrderMessage(items, total, form));
    setSentLink(link);
    window.open(link, '_blank', 'noopener');
  };

  const startOver = () => {
    clear();
    setForm(INITIAL);
    setSentLink(null);
  };

  return (
    <section id="pedido" className="section section--rose order">
      <div className="scallop scallop--top-rose" aria-hidden="true" />
      <div className="container">
        <SectionTitle
          eyebrow="Finalize sua encomenda"
          title="Seu pedido"
          subtitle="Revise os itens, conte para a gente os detalhes da sua comemoração e envie tudo pelo WhatsApp."
        />

        {sentLink ? (
          <div className="order-sent card">
            <span className="order-sent__icon">
              <IconCheck width={36} height={36} />
            </span>
            <h3 className="script">Pedido enviado!</h3>
            <p>
              Abrimos o WhatsApp com a mensagem do seu pedido. É só tocar em <strong>enviar</strong> por lá. A Bia vai
              confirmar disponibilidade, valores finais e forma de entrega.
            </p>
            <div className="order-sent__actions">
              <a className="btn btn--whatsapp" href={sentLink} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp /> O WhatsApp não abriu? Clique aqui
              </a>
              <button className="btn btn--outline" onClick={startOver}>
                Fazer um novo pedido
              </button>
              <button className="btn btn--link" onClick={() => setSentLink(null)}>
                Voltar e editar
              </button>
            </div>
          </div>
        ) : (
          <form className="order__grid" onSubmit={handleSubmit} noValidate>
            {/* ---------- Resumo do carrinho ---------- */}
            <div className="card order__cart">
              <h3 className="card__title">
                <IconBag /> Itens ({count})
              </h3>

              {items.length === 0 ? (
                <div className={`cart-empty ${errors.cart ? 'cart-error' : ''}`}>
                  <p>Seu pedido ainda está vazio.</p>
                  <a href="#cardapio" className="btn btn--gold btn--sm">
                    Escolher sabores
                  </a>
                  {errors.cart && <span className="error">{errors.cart}</span>}
                </div>
              ) : (
                <>
                  <ul className="cart-list">
                    {items.map((i) => (
                      <li key={i.key} className="cart-item">
                        <div className="cart-item__info">
                          <strong>{i.title}</strong>
                          <small>{i.detail}</small>
                          <small className="cart-item__unit">{formatBRL(i.unitPrice)} cada</small>
                        </div>
                        <div className="cart-item__controls">
                          <QtyStepper value={i.qty} onChange={(q) => updateQty(i.key, q)} label={`Quantidade de ${i.title}`} />
                          <span className="cart-item__total">{formatBRL(i.unitPrice * i.qty)}</span>
                          <button
                            type="button"
                            className="icon-btn"
                            onClick={() => removeItem(i.key)}
                            aria-label={`Remover ${i.title}`}
                          >
                            <IconTrash width={18} height={18} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="cart-total">
                    <span>Total estimado</span>
                    <strong>{formatBRL(total)}</strong>
                  </div>
                  <p className="note">
                    Valores de referência. A confirmação final (e a taxa de entrega, se houver) é feita pelo WhatsApp.
                  </p>
                  <a href="#cardapio" className="btn btn--link">
                    + Adicionar mais sabores
                  </a>
                </>
              )}
            </div>

            {/* ---------- Dados do cliente ---------- */}
            <div className="card order__form">
              <h3 className="card__title">Detalhes da encomenda</h3>

              <div className="field">
                <label htmlFor="name">Seu nome *</label>
                <input
                  id="name"
                  className={errors.name ? 'is-invalid' : ''}
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Como podemos te chamar?"
                  autoComplete="name"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="occasion">Ocasião</label>
                  <select id="occasion" value={form.occasion} onChange={set('occasion')}>
                    <option value="">Selecione…</option>
                    {OCCASIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="payment">Pagamento</label>
                  <select id="payment" value={form.payment} onChange={set('payment')}>
                    {PAYMENT_METHODS.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="date">Data da festa / entrega</label>
                  <input
                    id="date"
                    type="date"
                    min={minDate}
                    className={errors.date ? 'is-invalid' : ''}
                    value={form.date}
                    onChange={set('date')}
                  />
                  {errors.date && <span className="error">{errors.date}</span>}
                </div>
                <div className="field">
                  <label htmlFor="time">Horário</label>
                  <input id="time" type="time" value={form.time} onChange={set('time')} />
                </div>
              </div>

              <div className="field">
                <span className="label">Como deseja receber?</span>
                <div className="segmented" role="radiogroup">
                  {[
                    ['retirada', 'Retirar'],
                    ['entrega', 'Entrega'],
                  ].map(([val, label]) => (
                    <label key={val} className={form.delivery === val ? 'is-active' : ''}>
                      <input
                        type="radio"
                        name="delivery"
                        value={val}
                        checked={form.delivery === val}
                        onChange={set('delivery')}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {form.delivery === 'entrega' && (
                <div className="field">
                  <label htmlFor="address">Endereço de entrega *</label>
                  <input
                    id="address"
                    className={errors.address ? 'is-invalid' : ''}
                    value={form.address}
                    onChange={set('address')}
                    placeholder="Rua, número, bairro e cidade"
                    autoComplete="street-address"
                  />
                  {errors.address && <span className="error">{errors.address}</span>}
                </div>
              )}

              <div className="field">
                <label htmlFor="customization">Personalização</label>
                <textarea
                  id="customization"
                  rows={3}
                  value={form.customization}
                  onChange={set('customization')}
                  placeholder="Ex.: Nome e idade do aniversariante, tema da festa, cores dos laços…"
                />
              </div>

              <div className="field">
                <label htmlFor="notes">Observações</label>
                <textarea
                  id="notes"
                  rows={2}
                  value={form.notes}
                  onChange={set('notes')}
                  placeholder="Alguma restrição, dúvida ou pedido especial?"
                />
              </div>

              <button type="submit" className="btn btn--whatsapp btn--block">
                <IconWhatsApp /> Enviar pedido pelo WhatsApp
              </button>
              <p className="note note--center">
                Você será direcionado(a) ao WhatsApp da {STORE.name} com a mensagem pronta.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
