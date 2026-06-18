# RolêFortaleza
Este projeto é um site desenvolvido como trabalho da disciplina de HTML e CSS. O objetivo foi criar uma página simples, organizada e visualmente agradável, utilizando os principais conceitos estudados em sala.

## Tecnologias utilizadas
-HTML
-CSS
-JS

## Objetivo do projeto
O site foi criado para praticar a estruturação de páginas com HTML e a estilização com CSS, trabalhando elementos como menu de navegação, imagens, textos, cores, fontes e organização do layout.

## Funcionalidades
### Página inicial com apresentação do tema
-Menu de navegação
-Seções organizadas
-Estilização personalizada com CSS
-Layout simples e responsivo

--

Markdown%md
📍 **RolêFortaleza** • _Documentação do Frontend_<br>
### **Mapeamento de Estrutura, Estilos e Lógica do Projeto** <br>
Squad: _Desenvolvimento / Produto_ <br>
Responsável: _Documentação do Sistema_ <br>
Data criação: _2026-06-18_ <br>

---

📍 RolêFortaleza • Documentação do Frontend
Mapeamento de Estrutura, Estilos e Lógica do Projeto
Squad: Desenvolvimento / Produto
Responsável: Documentação do Sistema
Data criação: 2026-06-18

📁 Estrutura do projeto
Arquivo
O que faz
 
index.html
Página inicial (Início)
sobre.html
Página "Sobre"
contato.html
Página "Contato"
styles.css
Visual de todas as páginas (cores, fontes, layout)
script.js
Lógica dinâmica: filtros, cards, busca, formulário
assets/
Imagens (hero, venues, ícones)


🧭 NAVBAR (topo de todas as páginas)
Onde está no HTML: index.html:32-49, sobre.html:15-32, contato.html:15-32
<nav class="navbar">
  <div class="navbar-left">
    <div class="logo">📍 RolêFortaleza</div>
    <div class="nav-links">
      <a href="index.html">Início</a>
      <a href="sobre.html">Sobre</a>
      <a href="contato.html">Contato</a>
    </div>
  </div>
  <div class="nav-actions">
    <a href="#" class="nav-login">Login</a>
    <a href="#" class="nav-cadastro">Cadastro</a>
  </div>
</nav>


Estilo: styles.css:43-97 (.navbar, .logo, .nav-links, .nav-actions) + styles.css:127-141 (botões Login/Cadastro)
🌅 HERO (banner do topo com imagem)
Imagem de fundo: index.html:52 aponta para assets/fundo-fortaleza.jpg. Nas outras páginas, assets/praia_sobre.png.
Título e subtítulo: index.html:55-56:
<h1>Descubra os melhores rolês de <span class="accent">Fortaleza</span></h1>
<p>Bares, barracas de praia, pubs, shows de comédia...</p>


Estilo: styles.css:146-193 (.hero, .hero-bg, .hero-overlay, .hero-content)
.accent (em styles.css:185-187) é o que pinta "Fortaleza" de amarelo.
.hero-overlay (em styles.css:163-167) é o degradê escuro sobre a imagem.
🔍 BARRA DE BUSCA
HTML: index.html:57-59
<div class="search">
  <input id="search" type="text" placeholder="Qual é a vibe de hoje?" />
</div>


Estilo: styles.css:195-220 (forma redonda, sombra, tamanho)
Lógica: script.js:403-406 — toda vez que você digita, ela filtra os cards pelo nome/descrição/bairro:
searchEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderGrid();
});


🏷️ FILTROS DE CATEGORIA (Todos, Bares, Pubs, etc.)
HTML: index.html:64 — só uma <div id="filters"> vazia. O JS preenche dinamicamente.
Lista de categorias: script.js:24-32
const categories = ["Todos","Bares","Pubs","Barracas","Comédia","Romântico","Econômico"];


Emojis das categorias: script.js:33-41
const categoryEmojis = { Todos: "🔥", Bares: "🍸", ... };


Quem desenha os botões: função renderFilters() em script.js:329-346
Estilo: styles.css:230-273 — botões redondos. O laranja do botão ativo vem de .filter-btn.active (styles.css:264-269).
Para adicionar/remover categoria: edite o array em script.js:24 e o objeto em script.js:33.
🃏 CARDS DOS LOCAIS (o miolo do site)
Os dados dos locais ficam em script.js:43-319 no array venues. Cada local é um objeto estruturado:
{
  id: 14,
  name: "Bar da Gelada",
  category: "Bares",
  description: "Bar animado...",
  neighborhood: "Parque Dois Irmãos",
  rating: 4.4,
  priceLevel: 2,        // controla os R$ (2 = "R$R$")
  image: "assets/bdg.png",
  hours: "17h - 02h",
}


Quem desenha os cards na tela: função renderGrid() em script.js:358-401. Ela se encarrega de:
Filtrar os venues pela categoria ativa
Filtrar pela busca textual
Gerar o HTML dinâmico de cada card
Estilo: styles.css:275-414
.grid — define que vira 1, 2 ou 3 colunas conforme o tamanho da tela (styles.css:283-293)
.card — fundo branco, sombra, animação ao passar o mouse (styles.css:296-311)
.badge — pílula azul com a categoria (canto superior esquerdo, styles.css:330-340)
.rating — nota com estrela (canto superior direito, styles.css:342-355)
.card-price — os "R$" amarelos (styles.css:378-382)
Para adicionar um novo rolê: copie um objeto de venues em script.js, modifique os dados e garanta um id único.
📄 PÁGINA "SOBRE" (sobre.html)
Hero da página — sobre.html:34-45 (mesma estrutura do home, com imagem diferente)
Bloco "Nossa proposta" — sobre.html:49-64:
<section class="about-section">
  <span class="section-label">Nossa proposta</span>
  <h2>Encontre o rolê ideal com mais facilidade</h2>
  ...
</section>


Os 3 cards (Pubs e bares / Barracas / Eventos) — sobre.html:66-84. Cada um tem ícone (emoji), título e descrição.
Bloco azul final "Pronto para escolher..." — sobre.html:86-90, com o botão "Ver rolês" que volta para a home.
Estilo da página inteira: styles.css:445-621
.about-section — caixa branca com sombra
.about-cards — grid dos 3 cards
.about-cta — caixa azul final
✉️ PÁGINA "CONTATO" (contato.html)
Igual a sobre.html, mas com a implementação de um formulário interativo:
Os 3 cards — contato.html:61-79 (Sugestões / Correções / Parcerias)
Formulário — contato.html:85-100:
<form id="contactForm" action="mailto" method="POST">
  <input id="name" name="name" required>
  <input id="email" name="email" required>
  <textarea id="message" required></textarea>
  <button type="submit">Enviar</button>
</form>


Lógica de envio (mensagem de sucesso) — script.js:1-22: Intercepta o submit, mostra a mensagem verde, limpa os campos e esconde a mensagem automaticamente após 5 segundos.
Estilo do formulário: styles.css:660-681 (.input, .botao-form, form)
Estilo da mensagem de sucesso: styles.css:99-125 (.success-message + animação slideDown)
🎨 PALETA DE CORES (centralizada)
styles.css:1-16 define as cores em variáveis CSS globais. Para mudar o tema visual do site inteiro de forma instantânea, basta alterar aqui:
:root {
  --primary: #ff6b33;     /* laranja dos botões/destaques */
  --secondary: #00468a;   /* azul dos badges/seção CTA */
  --accent: #f7b91a;      /* amarelo do "Fortaleza", R$, estrela */
  --background: #fafafa;  /* fundo geral */
  --card: #ffffff;        /* fundo dos cards */
  --foreground: #1a1a1a;  /* cor do texto */
}


📱 RESPONSIVIDADE
O site se ajusta dinamicamente a celular, tablet e desktop via media queries:
Tamanho de tela
O que muda
Referência no CSS
 
Mobile (<640px)
Grid de cards vira 1 coluna
—
Tablet (640-1023px)
Grid vira 2 colunas
styles.css:283-287
Desktop (≥1024px)
Grid vira 3 colunas
styles.css:289-293
Mobile (<720px)
Navbar muda layout, Login/Cadastro somem
styles.css:623-651
Tablet+ (≥768px)
Cards da Sobre/Contato viram 3 colunas
styles.css:617-621


🎬 ANIMAÇÕES
Fade-up dos cards ao carregar — styles.css:409-414 (@keyframes fadeUp) aplicado em .card (linha 305). O delay escalonado para efeito cascata vem de script.js:380 (animation-delay:${i * 50}ms).
Hover dos cards — styles.css:308-311 (sobe 6px e ganha sombra mais suave) + styles.css:326-328 (imagem interna ganha um sutil zoom de 10%).
Mensagem de sucesso do form — styles.css:116-125 (@keyframes slideDown).
🧠 RESUMO PARA APRESENTAR
Dica para explicação rápida (Pitch de 1 minuto):
"O site tem 3 páginas HTML que compartilham o mesmo styles.css e o mesmo script.js. A página inicial é dinâmica: o script.js guarda uma lista de 23 locais e usa duas funções — renderFilters() para gerar os botões de categoria e renderGrid() para gerar os cards. Os filtros e a busca chamam renderGrid() novamente, que filtra a lista e regenera só os cards visíveis. As páginas Sobre e Contato são estáticas, e o formulário de contato usa um JavaScript pequeno que mostra uma mensagem de sucesso ao enviar. Todo o visual vem de variáveis CSS — basta mudar --primary para trocar a cor de destaque do site inteiro."
