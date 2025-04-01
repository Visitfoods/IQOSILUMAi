# ILUMA.i Website Estático

Este é um website estático que apresenta os produtos ILUMA.i com um carrossel interativo e acesso à câmera.

## Como Usar

1. Certifique-se de que todos os arquivos estão na mesma pasta:
   - `index.html`
   - Pasta `public/IMG/` com todas as imagens
   - Pasta `public/Icons/` com todos os ícones

2. Para executar localmente:
   - Use um servidor local (como Live Server do VS Code)
   - OU abra diretamente o arquivo index.html no navegador Chrome/Firefox

3. Para hospedar online:
   - Faça upload de todos os arquivos para qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc.)
   - Certifique-se de usar HTTPS para o acesso à câmera funcionar

## Funcionalidades

- Carrossel interativo com 3 modelos ILUMA.i
- Visualização detalhada de cada modelo
- Seleção de cores para cada modelo
- Acesso à câmera para efeitos de fundo (requer HTTPS)
- Design responsivo para todos os tamanhos de tela

## Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão HTTPS para funcionalidades da câmera
- Permissões de câmera habilitadas no navegador

## Estrutura de Arquivos

```
/
├── index.html
├── public/
│   ├── IMG/
│   │   ├── ILUMAi/
│   │   ├── ILUMAi-PRIME/
│   │   └── ILUMAi-ONE/
│   └── Icons/
└── README.md
```

## Notas Importantes

1. Para o acesso à câmera funcionar:
   - Use HTTPS ou localhost
   - Permita o acesso à câmera quando solicitado pelo navegador
   - Certifique-se de que nenhum outro aplicativo está usando a câmera

2. Se estiver usando localmente:
   - Chrome/Edge: funciona com `file://` ou `http://localhost`
   - Firefox: requer `http://localhost`
   - Safari: requer HTTPS

3. Para melhor performance:
   - As imagens devem estar otimizadas
   - Use um CDN para os scripts externos em produção