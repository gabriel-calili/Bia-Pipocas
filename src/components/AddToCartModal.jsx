import { useEffect, useRef, useState } from 'react';
import PopcornArt from './PopcornArt.jsx';
import FormatArt from './FormatArt.jsx';
import { IconClose, IconGift, IconMinus, IconPlus } from './Icons.jsx';
import { FLAVORS, FORMATS, formatBRL, getUnitPrice } from '../data/menu.js';
import { useCart } from '../context/CartContext.jsx';

const QUICK_QTY = [1, 10, 20, 50];

export function QtyStepper({ value, onChange, min = 1, label = 'Quantidade' }) {
  return (
    <div className="stepper" role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(Math.max(min, value - 1))} aria-label="Diminuir">
        <IconMinus width={16} height={16} />
      </button>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          onChange(Number.isNaN(n) ? min : Math.max(min, Math.min(999, n)));
        }}
        aria-label={label}
      />
      <button type="button" onClick={() => onChange(Math.min(999, value + 1))} aria-label="Aumentar">
        <IconPlus width={16} height={16} />
      </button>
    </div>
  );
}

export default function AddToCartModal({ selection, onClose }) {
  const { addItem } = useCart();
  const isKit = selection.type === 'kit';
  const item = selection.item;

  const [formatId, setFormatId] = useState(FORMATS[0].id);
  const [qty, setQty] = useState(isKit ? 1 : 10);
  const [kitFlavors, setKitFlavors] = useState([FLAVORS[1].id, '']);
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const format = FORMATS.find((f) => f.id === formatId);
  const unitPrice = isKit ? item.price : getUnitPrice(item, format);
  const subtotal = unitPrice * qty;

  const handleAdd = () => {
    if (isKit) {
      const chosen = kitFlavors.filter(Boolean).map((id) => FLAVORS.find((f) => f.id === id).name);
      addItem({
        key: `kit:${item.id}:${kitFlavors.filter(Boolean).join('+')}`,
        title: item.name,
        detail: `Sabores: ${chosen.join(' + ')}`,
        unitPrice,
        qty,
      });
    } else {
      addItem({
        key: `flavor:${item.id}:${format.id}`,
        title: item.name,
        detail: `${format.name} (${format.weight})`,
        unitPrice,
        qty,
      });
    }
    onClose();
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          <IconClose />
        </button>

        <div className="modal__head">
          {isKit ? (
            <span className="modal__kit-icon">
              <IconGift width={40} height={40} />
            </span>
          ) : (
            <PopcornArt colors={item.colors} size={96} />
          )}
          <div>
            <span className="eyebrow">{isKit ? 'Kit para festa' : 'Monte seu pedido'}</span>
            <h3 id="modal-title" className="modal__title">
              {item.name}
            </h3>
            <p className="modal__desc">{item.description}</p>
          </div>
        </div>

        {isKit ? (
          <fieldset className="field-group">
            <legend>Escolha até {item.flavors} sabores</legend>
            <div className="kit-flavors">
              {kitFlavors.map((val, idx) => (
                <select
                  key={idx}
                  value={val}
                  onChange={(e) =>
                    setKitFlavors((prev) => prev.map((v, i) => (i === idx ? e.target.value : v)))
                  }
                  aria-label={`Sabor ${idx + 1}`}
                >
                  {idx > 0 && <option value="">— Sem segundo sabor —</option>}
                  {FLAVORS.map((f) => (
                    <option key={f.id} value={f.id} disabled={kitFlavors.includes(f.id) && val !== f.id}>
                      {f.name}
                    </option>
                  ))}
                </select>
              ))}
            </div>
          </fieldset>
        ) : (
          <fieldset className="field-group">
            <legend>Escolha a embalagem</legend>
            <div className="format-options">
              {FORMATS.map((f) => (
                <label key={f.id} className={`format-option ${formatId === f.id ? 'format-option--active' : ''}`}>
                  <input
                    type="radio"
                    name="format"
                    value={f.id}
                    checked={formatId === f.id}
                    onChange={() => setFormatId(f.id)}
                  />
                  <FormatArt type={f.icon} size={44} />
                  <span className="format-option__text">
                    <strong>{f.name}</strong>
                    <small>{f.weight}</small>
                  </span>
                  <span className="format-option__price">{formatBRL(getUnitPrice(item, f))}</span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <fieldset className="field-group">
          <legend>Quantidade</legend>
          <div className="qty-row">
            <QtyStepper value={qty} onChange={setQty} />
            {!isKit && (
              <div className="quick-qty">
                {QUICK_QTY.map((n) => (
                  <button
                    type="button"
                    key={n}
                    className={`chip ${qty === n ? 'chip--active' : ''}`}
                    onClick={() => setQty(n)}
                  >
                    {n} un.
                  </button>
                ))}
              </div>
            )}
          </div>
        </fieldset>

        <div className="modal__footer">
          <div className="modal__subtotal">
            <small>
              {qty} × {formatBRL(unitPrice)}
            </small>
            <strong>{formatBRL(subtotal)}</strong>
          </div>
          <button className="btn btn--gold" onClick={handleAdd}>
            Adicionar ao pedido
          </button>
        </div>
      </div>
    </div>
  );
}
