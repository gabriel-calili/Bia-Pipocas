# Bia Pipocas · Cardápio Digital

Site em React (Vite) com cardápio digital, seção "Sobre" e pedido direto pelo WhatsApp.

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # gera a versão de produção em /dist
```

> No PowerShell, se aparecer erro de "execução de scripts desabilitada", use `npm.cmd` no lugar de `npm`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Número do WhatsApp, Instagram, horário, cidade | `src/data/config.js` |
| Sabores, embalagens, kits e preços | `src/data/menu.js` |
| Texto da mensagem enviada no WhatsApp | `src/data/whatsapp.js` |
| Cores, fontes e estilos | `src/styles.css` |
| Fotos | `public/images/` |
