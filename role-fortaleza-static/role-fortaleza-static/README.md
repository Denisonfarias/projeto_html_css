# RolêFortaleza (Static)

Site estático em HTML, CSS e JavaScript puro — os melhores rolês de Fortaleza.

## Como rodar localmente

Basta abrir `index.html` no navegador. Ou rodar um servidor estático:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e suba todos os arquivos desta pasta.
2. Vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve. Em alguns minutos o site estará disponível em `https://<seu-usuario>.github.io/<seu-repo>/`.

## Estrutura

```
index.html      # marcação
styles.css      # estilos (paleta tropical + responsivo)
script.js       # filtros, busca e renderização dos cards
assets/         # imagens (hero e venues)
```

Sem build, sem dependências — 100% compatível com GitHub Pages.
