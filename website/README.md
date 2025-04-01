# ILUMA.i Website

Este é o website estático da ILUMA.i, com carrossel interativo e acesso à câmera.

## Como Usar

1. Estrutura de Pastas:
   ```
   website/
   ├── index.html
   ├── README.md
   └── public/
       └── IMG/
           ├── ILUMAi/
           │   ├── ILUMAi_BREEZE.png
           │   ├── ILUMAi_MIDNIGHT.png
           │   ├── ILUMAi_LEAF.png
           │   ├── ILUMAi_TERRACOTA.png
           │   └── ILUMAi-VIOLET.png
           ├── ILUMAi-PRIME/
           │   ├── ILUMAi-PRIME_BREEZE.png
           │   ├── ILUMAi-PRIME_MIDNIGHT.png
           │   ├── ILUMAi-PRIME_LEAF.png
           │   └── ILUMAi-PRIME_TERRACOTA.png
           └── ILUMAi-ONE/
               ├── ILUMAi-ONE_BREEZE.png
               ├── ILUMAi-ONE_MIDNIGHT.png
               ├── ILUMAi-ONE_LEAF.png
               ├── ILUMAi-ONE_TERRACOTA.png
               └── ILUMAi-ONE-VIOLET.png
   ```

2. Imagens Necessárias:
   - Cada pasta dentro de `public/IMG/` deve conter as imagens do respectivo modelo em todas as cores disponíveis
   - Os nomes dos arquivos devem seguir exatamente o padrão mostrado acima
   - Formato recomendado: PNG com fundo transparente
   - Tamanho recomendado: 1000x1000 pixels

3. Para Executar Localmente:
   ```bash
   # Opção 1: Usando Python (Python 3 necessário)
   python -m http.server 8000

   # Opção 2: Usando Node.js (Node.js necessário)
   npx serve

   # Opção 3: Usando Live Server no VS Code
   # Instale a extensão "Live Server" e clique em "Go Live"
   ```

4. Para Hospedar Online:
   - Faça upload da pasta `website` completa para qualquer serviço de hospedagem:
     - Vercel
     - Netlify
     - GitHub Pages
     - Firebase Hosting
     - etc.

## Funcionalidades

- Carrossel interativo com 3 modelos
- Visualização detalhada de cada modelo
- Seleção de cores (diferentes por modelo)
- Acesso à câmera para efeito de fundo
- Design responsivo
- Interface em português

## Requisitos Técnicos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Para a câmera funcionar:
  - Conexão HTTPS (exceto em localhost)
  - Permissões de câmera no navegador
  - Câmera disponível no dispositivo

## Notas Importantes

1. Câmera:
   - Em localhost: funciona com HTTP
   - Em produção: requer HTTPS
   - Se a câmera não funcionar, o site mostra um gradiente como fallback

2. Performance:
   - As imagens devem ser otimizadas para web
   - O site usa CDNs para React e TailwindCSS
   - Recomendado usar um CDN também para as imagens em produção

3. Compatibilidade:
   - Mobile: totalmente responsivo
   - Desktop: funciona em todas as resoluções
   - Tablets: interface adaptativa 