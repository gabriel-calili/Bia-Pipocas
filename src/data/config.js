/**
 * Configurações gerais da loja.
 * ⚠️ Altere o número do WhatsApp abaixo para o número real da Bia Pipocas.
 * Formato: código do país + DDD + número, apenas dígitos (ex.: 5511987654321).
 */
export const STORE = {
  name: 'Bia Pipocas',
  tagline: 'Pipocas Gourmet',
  whatsappNumber: '5511999999999',
  whatsappDisplay: '(11) 99999-9999',
  instagram: 'biapipocas',
  city: 'São Paulo · SP',
  hours: 'Seg a Sáb · 9h às 19h',
  /** Antecedência mínima (em dias) para encomendas com data marcada. */
  leadTimeDays: 2,
};

export const PAYMENT_METHODS = ['Pix', 'Cartão de crédito', 'Cartão de débito', 'Dinheiro'];
