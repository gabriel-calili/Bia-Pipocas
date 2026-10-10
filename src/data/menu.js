/**
 * Cardápio da Bia Pipocas.
 * Todos os valores são de referência e podem ser editados livremente.
 *
 * Preço unitário de um sabor = preço da embalagem + (adicional do sabor × fator da embalagem)
 */

export const CATEGORIES = [
  { id: 'todas', label: 'Todas' },
  { id: 'classicas', label: 'Clássicas', extra: 0 },
  { id: 'chocolates', label: 'Chocolates', extra: 1 },
  { id: 'especiais', label: 'Especiais da Bia', extra: 2 },
  { id: 'salgadas', label: 'Salgadas', extra: 0 },
];

/**
 * colors: base = pipoca, coat = cobertura, accent = confeitos / detalhes
 */
export const FLAVORS = [
  // ---------- Clássicas ----------
  {
    id: 'caramelo',
    name: 'Caramelo Gourmet',
    category: 'classicas',
    description: 'Caramelo dourado e crocante, feito no tacho, com um toque de flor de sal.',
    colors: { base: '#F2C77A', coat: '#C98A2E', accent: '#E9B35A' },
  },
  {
    id: 'leite-ninho',
    name: 'Leite Ninho',
    category: 'classicas',
    description: 'Cobertura cremosa envolvida em leite em pó. Delicada e irresistível.',
    colors: { base: '#FFF6E6', coat: '#FFFFFF', accent: '#F3E3C6' },
    tags: ['Mais pedida'],
  },
  {
    id: 'leite-condensado',
    name: 'Leite Condensado',
    category: 'classicas',
    description: 'Calda brilhante de leite condensado, docinha na medida certa.',
    colors: { base: '#FBE7B8', coat: '#F7DFA3', accent: '#FFF3D6' },
  },
  {
    id: 'pacoca',
    name: 'Paçoca',
    category: 'classicas',
    description: 'Cobertura de amendoim com farofinha de paçoca por cima.',
    colors: { base: '#E8C79A', coat: '#C79A63', accent: '#A87A45' },
  },

  // ---------- Chocolates ----------
  {
    id: 'chocolate-leite',
    name: 'Chocolate ao Leite',
    category: 'chocolates',
    description: 'Banhada em chocolate ao leite nobre, com casquinha crocante.',
    colors: { base: '#8A5A3C', coat: '#6B452B', accent: '#A7704A' },
  },
  {
    id: 'chocolate-branco',
    name: 'Chocolate Branco',
    category: 'chocolates',
    description: 'Chocolate branco cremoso e aveludado, com finalização perolada.',
    colors: { base: '#FFF8EC', coat: '#FCEFD9', accent: '#E8D3AE' },
  },
  {
    id: 'brigadeiro',
    name: 'Brigadeiro',
    category: 'chocolates',
    description: 'O clássico das festas: chocolate meio amargo e granulado belga.',
    colors: { base: '#6E4128', coat: '#4E2C1A', accent: '#2F1A0F' },
    tags: ['Mais pedida'],
  },
  {
    id: 'ovomaltine',
    name: 'Ovomaltine',
    category: 'chocolates',
    description: 'Chocolate ao leite com flocos crocantes de Ovomaltine.',
    colors: { base: '#9A6B45', coat: '#7A5233', accent: '#D9B27A' },
  },
  {
    id: 'prestigio',
    name: 'Prestígio',
    category: 'chocolates',
    description: 'Chocolate ao leite com coco ralado fresquinho.',
    colors: { base: '#7C4E33', coat: '#5E3A25', accent: '#FFFFFF' },
  },

  // ---------- Especiais ----------
  {
    id: 'pink-da-bia',
    name: 'Pink da Bia',
    category: 'especiais',
    description: 'Nossa assinatura: chocolate branco rosado, confeitos perolados e brilho dourado comestível.',
    colors: { base: '#F9C9CF', coat: '#F4A9B4', accent: '#C99A32' },
    tags: ['Assinatura'],
  },
  {
    id: 'ninho-nutella',
    name: 'Ninho com Nutella',
    category: 'especiais',
    description: 'Leite Ninho cremoso com fios generosos de Nutella.',
    colors: { base: '#FFF6E6', coat: '#FFFFFF', accent: '#5A3420' },
    tags: ['Mais pedida'],
  },
  {
    id: 'morango-ninho',
    name: 'Morango com Ninho',
    category: 'especiais',
    description: 'Cobertura de morango com leite em pó, rosinha e delicada.',
    colors: { base: '#F7B9C0', coat: '#EE8F9C', accent: '#FFF6E6' },
  },
  {
    id: 'churros',
    name: 'Churros',
    category: 'especiais',
    description: 'Doce de leite, canela e açúcar cristal — sabor de quermesse com toque gourmet.',
    colors: { base: '#E7B57A', coat: '#B7793F', accent: '#8C5A2B' },
    tags: ['Novidade'],
  },

  // ---------- Salgadas ----------
  {
    id: 'manteiga',
    name: 'Manteiga Gourmet',
    category: 'salgadas',
    description: 'Manteiga de verdade e sal na medida. Simples e perfeita.',
    colors: { base: '#FFF1C2', coat: '#F7DE8A', accent: '#FFF9F2' },
  },
  {
    id: 'parmesao',
    name: 'Queijo Parmesão',
    category: 'salgadas',
    description: 'Parmesão ralado fininho com um toque de ervas.',
    colors: { base: '#FFF4D2', coat: '#F3D98B', accent: '#E0B850' },
  },
  {
    id: 'bacon',
    name: 'Bacon Crocante',
    category: 'salgadas',
    description: 'Tempero defumado com pedacinhos crocantes de bacon.',
    colors: { base: '#F6D7A8', coat: '#C7764E', accent: '#9C4A2E' },
  },
];

export const FORMATS = [
  {
    id: 'saquinho',
    name: 'Saquinho Personalizado',
    weight: '50g',
    price: 5.5,
    factor: 1,
    icon: 'bag',
    description: 'Saquinho transparente com tag personalizada e laço de cetim. Ideal para lembrancinhas.',
  },
  {
    id: 'cone',
    name: 'Cone Decorado',
    weight: '60g',
    price: 6.5,
    factor: 1.2,
    icon: 'cone',
    description: 'Cone delicado com acabamento rendado — lindo em mesas e displays.',
  },
  {
    id: 'caixinha',
    name: 'Caixinha com Laço',
    weight: '80g',
    price: 8.9,
    factor: 1.5,
    icon: 'box',
    description: 'Caixinha cartonada rosa com laço de cetim e etiqueta com o nome do homenageado.',
  },
  {
    id: 'pote',
    name: 'Pote Presente',
    weight: '150g',
    price: 15.9,
    factor: 2.5,
    icon: 'jar',
    description: 'Pote transparente com tampa, laço e cartão — um mimo perfeito para presentear.',
  },
  {
    id: 'balde',
    name: 'Balde Gourmet',
    weight: '300g',
    price: 29.9,
    factor: 5,
    icon: 'bucket',
    description: 'Balde listrado para compartilhar em sessões de cinema, chás e encontros.',
  },
];

export const KITS = [
  {
    id: 'kit-mimo',
    name: 'Kit Mimo',
    price: 44.9,
    includes: ['1 Pote Presente', '2 Caixinhas com Laço', 'Cartão escrito à mão'],
    description: 'Para surpreender alguém especial com carinho em cada detalhe.',
    flavors: 2,
  },
  {
    id: 'kit-festa',
    name: 'Kit Festa Encantada',
    price: 189.9,
    includes: ['30 Saquinhos personalizados', 'Tags com o tema da festa', 'Até 2 sabores'],
    description: 'Lembrancinhas prontas para deixar sua comemoração ainda mais especial.',
    flavors: 2,
    tags: ['Mais pedido'],
  },
  {
    id: 'kit-corporativo',
    name: 'Kit Corporativo',
    price: 429,
    includes: ['50 Caixinhas com Laço', 'Etiqueta com a sua marca', 'Até 2 sabores'],
    description: 'Brindes com apresentação diferenciada para clientes e equipes.',
    flavors: 2,
  },
];

const categoryExtra = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.extra ?? 0]));

export function getUnitPrice(flavor, format) {
  const extra = categoryExtra[flavor.category] ?? 0;
  return Math.round((format.price + extra * format.factor) * 100) / 100;
}

export function getStartingPrice(flavor) {
  return Math.min(...FORMATS.map((f) => getUnitPrice(flavor, f)));
}

export const formatBRL = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
