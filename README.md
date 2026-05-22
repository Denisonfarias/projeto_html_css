# RolêFortaleza (Static)

Site estático em HTML, CSS e JavaScript puro — os melhores rolês de Fortaleza.

## Publicar no GitHub Pages (passo a passo)

1. Crie um repositório no GitHub (público ou privado se tiver Pages habilitado no plano).
2. Suba **o conteúdo desta pasta** (arquivos + `assets/` + `.nojekyll`) para a raiz do repositório.
   - Importante: o arquivo `.nojekyll` é oculto. Garanta que ele foi enviado — ele evita que o GitHub Pages quebre caminhos de pastas/arquivos.
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
5. Salve. Em 1–3 minutos o site estará em `https://<seu-usuario>.github.io/<seu-repo>/`.

### Subindo pelo terminal

```bash
git init
git add .
git commit -m "site inicial"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git
git push -u origin main
```

## Como rodar localmente

Abrir `index.html` direto no navegador já funciona. Para servir por HTTP (recomendado, evita restrições de `file://`):

```bash
# Python 3
python -m http.server 8000

# Node (se tiver instalado)
npx serve .
```

Depois acesse `http://localhost:8000`.

## Estrutura

```
index.html      # marcação
styles.css      # estilos (paleta tropical + responsivo)
script.js       # filtros, busca e renderização dos cards
assets/         # imagens (hero e venues)
.nojekyll       # desativa o Jekyll no GitHub Pages
```

## Compatibilidade

- Sem build, sem dependências, sem backend.
- Apenas Google Fonts via CDN (carregado por HTTPS).
- Todos os caminhos são relativos — funciona em qualquer subpasta de domínio.
- 100% compatível com GitHub Pages, Netlify, Vercel, Cloudflare Pages.
