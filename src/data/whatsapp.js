import { STORE } from './config.js';
import { formatBRL } from './menu.js';

export const whatsappLink = (text) =>
  `https://wa.me/${STORE.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

const formatDate = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
};

/** Monta a mensagem do pedido que será enviada pelo WhatsApp. */
export function buildOrderMessage(items, total, form) {
  const lines = [];
  lines.push(`Olá, Bia! 🍿💕 Gostaria de fazer um pedido:`);
  lines.push('');
  lines.push('*ITENS DO PEDIDO*');
  items.forEach((i) => {
    lines.push(`• ${i.qty}× *${i.title}* — ${i.detail}`);
    lines.push(`   ${formatBRL(i.unitPrice)} cada · ${formatBRL(i.unitPrice * i.qty)}`);
  });
  lines.push('');
  lines.push(`*Total estimado:* ${formatBRL(total)}`);
  if (form.delivery === 'entrega') lines.push('_(taxa de entrega a combinar)_');
  lines.push('');
  lines.push('*MEUS DADOS*');
  lines.push(`👤 Nome: ${form.name.trim()}`);
  if (form.occasion) lines.push(`🎉 Ocasião: ${form.occasion}`);
  if (form.date) lines.push(`📅 Data: ${formatDate(form.date)}${form.time ? ` às ${form.time}` : ''}`);
  if (form.delivery === 'entrega') {
    lines.push(`🚗 Recebimento: Entrega`);
    lines.push(`📍 Endereço: ${form.address.trim()}`);
  } else {
    lines.push(`🛍️ Recebimento: Retirada`);
  }
  lines.push(`💳 Pagamento: ${form.payment}`);
  if (form.customization.trim()) {
    lines.push('');
    lines.push('*PERSONALIZAÇÃO*');
    lines.push(form.customization.trim());
  }
  if (form.notes.trim()) {
    lines.push('');
    lines.push('*OBSERVAÇÕES*');
    lines.push(form.notes.trim());
  }
  lines.push('');
  lines.push('Aguardo a confirmação. Obrigada! ✨');
  return lines.join('\n');
}
