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

%md
📍 **RolêFortaleza** • _Documentação do Frontend_<br>
### **Mapeamento Completo de Estrutura, Estilos e Lógica do Projeto** <br>
Squad: _Desenvolvimento / Produto_ <br>
Responsável: _Documentação do Sistema_ <br>
Data alteração: _2026-06-18_ <br>

---

# 📁 Estrutura do projeto

| Arquivo | O que faz |
| :--- | :--- |
| `index.html` | Página inicial (Início) |
| `sobre.html` | Página "Sobre" |
| `contato.html` | Página "Contato" |
| `styles.css` | Visual de todas as páginas (cores, fontes, layout) |
| `script.js` | Lógica dinâmica: filtros, cards, busca, formulário |
| `assets/` | Imagens (hero, venues, ícones) |

---

# 🧭 NAVBAR (topo de todas as páginas)

* **Onde está no HTML:** `index.html:32-49`, `sobre.html:15-32`, `contato.html:15-32`

``html
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
Estilo: styles.css:43-97 (.navbar, .logo, .nav-links, .nav-actions) + styles.css:127-141 (botões Login/Cadastro)🌅 HERO (banner do topo com imagem)Imagem de fundo: index.html:52 aponta para assets/fundo-fortaleza.jpg. Nas outras páginas, assets/praia_sobre.png.Título e subtítulo: index.html:55-56:HTML<h1>Descubra os melhores rolês de <span class="accent">Fortaleza</span></h1>
<p>Bares, barracas de praia, pubs, shows de comédia...</p>
Estilo: styles.css:146-193 (.hero, .hero-bg, .hero-overlay, .hero-content).accent (em styles.css:185-187): É o que pinta "Fortaleza" de amarelo..hero-overlay (em styles.css:163-167): É o degradê escuro sobre a imagem.🔍 BARRA DE BUSCAHTML: index.html:57-59HTML<div class="search">
  <input id="search" type="text" placeholder="Qual é a vibe de hoje?" />
</div>
Estilo: styles.css:195-220 (Define a forma redonda, sombreamento e dimensionamento da barra).Lógica: script.js:403-406 — Toda vez que o usuário digita algo, o sistema escuta o evento de entrada (input) e atualiza o estado para filtrar os cards dinamicamente por nome, descrição ou bairro:JavaScriptsearchEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderGrid();
});
🏷️ FILTROS DE CATEGORIA (Todos, Bares, Pubs, etc.)HTML: index.html:64 — Contém apenas uma <div id="filters"> vazia. O preenchimento visual é feito de forma totalmente dinâmica via JavaScript.Lista de categorias: script.js:24-32JavaScriptconst categories = ["Todos", "Bares", "Pubs", "Barracas", "Comédia", "Romântico", "Econômico"];
Emojis das categorias: script.js:33-41JavaScriptconst categoryEmojis = { Todos: "🔥", Bares: "🍸", Pubs: "🍻", Barracas: "🏖️", Comédia: "🎭", Romântico: "❤️", Econômico: "💵" };
Quem desenha os botões: Função renderFilters() em script.js:329-346.Estilo: styles.css:230-273 — Configura os botões redondos. O laranja que destaca o botão selecionado/ativo é herdada da classe .filter-btn.active (styles.css:264-269).Manutenção: Para adicionar ou remover uma categoria do sistema, basta editar o array em script.js:24 e o respectivo mapeamento de emoji no objeto em script.js:33.🃏 CARDS DOS LOCAIS (O miolo do site)Os dados brutos de todos os locais cadastrados ficam centralizados em script.js:43-319 dentro do array venues. Cada local é representado por um objeto estruturado da seguinte forma:JavaScript{
  id: 14,
  name: "Bar da Gelada",
  category: "Bares",
  description: "Bar animado...",
  neighborhood: "Parque Dois Irmãos",
  rating: 4.4,
  priceLevel: 2,        // Controla a exibição de cifrões (ex: 2 = "R$R$")
  image: "assets/bdg.png",
  hours: "17h - 02h",
}
Quem desenha os cards na tela: Função renderGrid() em script.js:358-401. Ela executa três passos essenciais:Filtra a lista venues com base na categoria ativa selecionada nos botões de filtro.Filtra o resultado gerado com base no termo digitado na barra de busca.Gera o HTML dinâmico final correspondente a cada card sobrevivente aos filtros.Mapeamento de Estilos (styles.css:275-414)Classe / ElementoDescrição e ComportamentoLinhas de Referência.gridDefine a distribuição do layout em 1, 2 ou 3 colunas baseando-se no tamanho da tela do dispositivo.styles.css:283-293.cardConfigura o fundo branco, sombras e a microanimação de transição ao passar o mouse (hover).styles.css:296-311.badgePequena pílula azul exibindo a categoria do local, posicionada no canto superior esquerdo.styles.css:330-340.ratingBadge com o indicador de nota média acompanhado por uma estrela, localizado no canto superior direito.styles.css:342-355.card-priceRenderização e formatação dos símbolos amarelos de precificação (R$).styles.css:378-382Como expandir o catálogo: Para incluir um novo ponto ou rolê no site, basta duplicar e preencher uma nova estrutura de objeto dentro do array venues (no arquivo script.js), lembrando sempre de atribuir um id numérico incremental e exclusivo.📄 PÁGINA "SOBRE" (sobre.html)Hero da página — sobre.html:34-45 (mesma estrutura do home, com imagem diferente)Bloco "Nossa proposta" — sobre.html:49-64:HTML<section class="about-section">
  <span class="section-label">Nossa proposta</span>
  <h2>Encontre o rolê ideal com mais facilidade</h2>
  ...
</section>
Os 3 cards (Pubs e bares / Barracas / Eventos) — sobre.html:66-84. Cada um tem ícone (emoji), título e descrição.Bloco azul final "Pronto para escolher..." — sobre.html:86-90, com o botão "Ver rolês" que volta para a home.Estilo da página inteira: styles.css:445-621.about-section — caixa branca com sombra.about-cards — grid dos 3 cards.about-cta — caixa azul final✉️ PÁGINA "CONTATO" (contato.html)Igual a sobre.html, mas com a implementação de um formulário interativo:Os 3 cards — contato.html:61-79 (Sugestões / Correções / Parcerias)Formulário — contato.html:85-100:HTML<form id="contactForm" action="mailto" method="POST">
  <input id="name" name="name" required>
  <input id="email" name="email" required>
  <textarea id="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
Lógica de envio (mensagem de sucesso) — script.js:1-22: Intercepta o submit, mostra a mensagem verde, limpa os campos e esconde a mensagem automaticamente após 5 segundos.Estilo do formulário: styles.css:660-681 (.input, .botao-form, form)Estilo da mensagem de sucesso: styles.css:99-125 (.success-message + animação slideDown)🎨 PALETA DE CORES (centralizada)styles.css:1-16 define as cores em variáveis CSS globais. Para mudar o tema visual do site inteiro de forma instantânea, basta alterar aqui:CSS:root {
  --primary: #ff6b33;     /* laranja dos botões/destaques */
  --secondary: #00468a;   /* azul dos badges/seção CTA */
  --accent: #f7b91a;      /* amarelo do "Fortaleza", R$, estrela */
  --background: #fafafa;  /* fundo geral */
  --card: #ffffff;        /* fundo dos cards */
  --foreground: #1a1a1a;  /* cor do texto */
}
📱 RESPONSIVIDADEO site se ajusta dinamicamente a celular, tablet e desktop via media queries:Tamanho de telaO que mudaReferência no CSSMobile (<640px)Grid de cards vira 1 coluna—Tablet (640-1023px)Grid vira 2 colunasstyles.css:283-287Desktop (≥1024px)Grid vira 3 colunasstyles.css:289-293Mobile (<720px)Navbar muda layout, Login/Cadastro somemstyles.css:623-651Tablet+ (≥768px)Cards da Sobre/Contato viram 3 colunasstyles.css:617-621🎬 ANIMAÇÕESFade-up dos cards ao carregar — styles.css:409-414 (@keyframes fadeUp) aplicado em .card (linha 305). O delay escalonado para efeito cascata vem de script.js:380 (animation-delay:${i * 50}ms).Hover dos cards — styles.css:308-311 (sobe 6px e ganha sombra mais suave) + styles.css:326-328 (imagem interna ganha um sutil zoom de 10%).Mensagem de sucesso do form — styles.css:116-125 (@keyframes slideDown).🧠 RESUMO PARA APRESENTAR💡 Dica para explicação rápida (Pitch de 1 minuto):"O site tem 3 páginas HTML que compartilham o mesmo styles.css e o mesmo script.js. A página inicial é dinâmica: o script.js guarda uma lista de 23 locais e usa duas funções — renderFilters() para gerar os botões de categoria e renderGrid() para gerar os cards. Os filtros e a busca chamam renderGrid() novamente, que filtra a lista e regenera só os cards visíveis. As páginas Sobre e Contato são estáticas, e o formulário de contato usa um JavaScript pequeno que mostra uma mensagem de sucesso ao enviar. Todo o visual vem de variáveis CSS — basta mudar --primary para trocar a cor de destaque do site inteiro."
