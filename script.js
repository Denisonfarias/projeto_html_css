const categories = [
  "Todos",
  "Bares",
  "Pubs",
  "Barracas",
  "Comédia",
  "Romântico",
  "Econômico",
];
const categoryEmojis = {
  Todos: "🔥",
  Bares: "🍸",
  Pubs: "🍺",
  Barracas: "🏖️",
  Comédia: "😂",
  Romântico: "💕",
  Econômico: "💸",
};

const venues = [
  //ECONOMICO
  {
    id: 18,
    name: "Centro Cultural",
    category: "Econômico",
    description:
      "Espaço cultural com exposições, apresentações musicais, teatro, oficinas e biblioteca. É um dos principais polos de incentivo à arte e cultura em Fortaleza.",
    neighborhood: "Centro",
    rating: 4.5,
    priceLevel: 0,
    image: "assets/economico/centro-cultural.png",
    hours: "10h - 19h",
  },
  {
    id: 19,
    name: "Museu Imagem e Som",
    category: "Econômico",
    description:
      "Museu dedicado à preservação da memória audiovisual do Ceará, com exposições interativas, cinema, fotografia e acervo histórico cultural.",
    neighborhood: "Meireles",
    rating: 4.7,
    priceLevel: 0,
    image: "assets/economico/museu-imagem-som.jpg",
    hours: "Qua a Dom 13h - 20h",
  },
  {
    id: 20,
    name: "Theatro José de Alencar",
    category: "Econômico",
    description:
      "Teatro histórico inaugurado em 1910, conhecido pela arquitetura art nouveau e por sua importância artística e cultural no Ceará.",
    neighborhood: "Centro",
    rating: 4.8,
    priceLevel: 0,
    image: "assets/economico/teatro-alencar.jpg",
    hours: "Ter a Sex 9h - 22h | Sáb-Dom 14h - 22h",
  },
  {
    id: 21,
    name: "Pinacoteca do Ceará",
    category: "Econômico",
    description:
      "Museu de artes visuais inaugurado em 2022, com exposições contemporâneas, ações educativas e acervo artístico do Estado do Ceará.",
    neighborhood: "Centro",
    rating: 4.8,
    priceLevel: 0,
    image: "assets/economico/pinacoteca.jpg",
    hours: "Qua-Sex 12h–20h | Sáb-Dom: 10h–18h",
  },

  //ROMANTICO
  {
    id: 22,
    name: "Candlelight Fortaleza",
    category: "Romântico",
    description:
      "Concertos iluminados por velas criam uma atmosfera intimista e perfeita para uma noite romântica a dois.",
    neighborhood: "Centro",
    rating: 4.8,
    priceLevel: 1,
    image: "assets/romantico/candlelight.png",
    hours: "Varia conforme o evento",
  },
  {
    id: 23,
    name: "Jardins Lounge Bar",
    category: "Romântico",
    description:
      "Ambiente aconchegante com luzes suaves, música ao vivo e clima ideal para encontros especiais.",
    neighborhood: "Cidade dos Funcionários",
    rating: 4.7,
    priceLevel: 2,
    image: "assets/romantico/jardins-lounge-bar.png",
    hours: "Ter-Dom: 17h–02h",
  },
  {
    id: 24,
    name: "Spa Zen",
    category: "Romântico",
    description:
      "Espaço tranquilo e relaxante para casais aproveitarem momentos de descanso, conexão e bem-estar juntos.",
    neighborhood: "Meireles",
    rating: 4.8,
    priceLevel: 3,
    image: "assets/romantico/spa-zen.png",
    hours: "Seg-Sex: 06h–21h / Sáb: 07h–13h",
  },

  // BARRACAS DE PRAIA
  {
    id: 10,
    name: "Chico do Caranguejo Praia",
    category: "Barracas",
    description: "Frutos do mar em ambiente descontraído na Praia do Futuro.",
    neighborhood: "Praia do Futuro",
    rating: 4.4,
    priceLevel: 3,
    image: "assets/chico_caranguejo_pf.png",
    hours: "09h - 18h",
  },
  {
    id: 11,
    name: "Órbita Blue Bar",
    category: "Barracas",
    description: "Restobar praiano de menu sofisticado com vista pra praia.",
    neighborhood: "Praia do Futuro",
    rating: 4.5,
    priceLevel: 3,
    image: "assets/orbita_blue.png",
    hours: "11h - 19h30",
  },
  {
    id: 12,
    name: "Barraca da Boa",
    category: "Barracas",
    description: "Bar casual com frutos do mar e cerveja gelada na Beira Mar.",
    neighborhood: "Meireles",
    rating: 4.2,
    priceLevel: 2,
    image: "assets/barraca_da_boa.png",
    hours: "17h - 23h",
  },
  {
    id: 13,
    name: "Mercado dos Peixes de Fortaleza",
    category: "Barracas",
    description: "Mercado tradicional de peixes e frutos do mar na Beira Mar.",
    neighborhood: "Meireles",
    rating: 4.4,
    priceLevel: 2,
    image: "assets/mercado_peixes.png",
    hours: "06h - 22h",
  },

  // BARES
  {
    id: 14,
    name: "Bar da Gelada",
    category: "Bares",
    description:
      "Bar animado com refeição no local, viagem e clima descontraído.",
    neighborhood: "Parque Dois Irmãos",
    rating: 4.4,
    priceLevel: 2,
    image: "assets/bdg.png",
    hours: "17h - 02h",
  },
  {
    id: 15,
    name: "Arena Bar & Petiscaria",
    category: "Bares",
    description: "Bar e grill com petiscos variados e ambiente acolhedor.",
    neighborhood: "Demócrito Rocha",
    rating: 4.5,
    priceLevel: 2,
    image: "assets/arena_bar.png",
    hours: "17h - 00h",
  },
  {
    id: 16,
    name: "Samba do Vila",
    category: "Bares",
    description:
      "Amplo espaço com rodas de samba, porções, caipirinhas e clima animado.",
    neighborhood: "Varjota",
    rating: 4.2,
    priceLevel: 2,
    image: "assets/samba_do_vila.png",
    hours: "17h - 02h",
  },
  {
    id: 17,
    name: "Boteco do Imprensa",
    category: "Bares",
    description:
      "Boteco tradicional com petiscos, cerveja gelada e clima descontraído.",
    neighborhood: "Aldeota",
    rating: 4.1,
    priceLevel: 2,
    image: "assets/boteco_imprensa.png",
    hours: "17h - 00h",
  },

  // PUBS  E COMEDIA
  {
    id: 3,
    name: "Teatro do Humor",
    category: "Comédia",
    description: "Os melhores comediantes do Nordeste todos os dias.",
    neighborhood: "Meireles",
    rating: 4.9,
    priceLevel: 2,
    image: "assets/Teatro_do_Humor.jpg",
    hours: "16h - 23h",
  },
  {
    id: 4,
    name: "Depot Medieval",
    category: "Pubs",
    description:
      "Cenografia detalhada que remete a um castelo ou taberna, ideal para fotos e entusiastas de mitologia nórdica.",
    neighborhood: "Cidade dos Funcionários",
    rating: 4.5,
    priceLevel: 3,
    image: "assets/Depot_medieval04.png",
    hours: "18h - 23h",
  },
  {
    id: 5,
    name: "Piadaria",
    category: "Comédia",
    description: "Comédia para sua familia",
    neighborhood: "Meireles",
    rating: 4.7,
    priceLevel: 1,
    image: "assets/Piadaria.jpg",
    hours: "18h - 22h",
  },
  {
    id: 9,
    name: "Aí Dentu Comedy",
    category: "Comédia",
    description: "Open mic toda quarta e shows especiais nos fins de semana.",
    neighborhood: "Parangaba",
    rating: 4.7,
    priceLevel: 1,
    image: "assets/Aí_Dentu_Comedy.png",
    hours: "19h - 23h",
  },
  {
    id: 7,
    name: "Bulls Beer House Parquelândia",
    category: "Pubs",
    description:
      "Pub descontraído com cervejas, drinks, petiscos e ambiente ideal para sair com amigos.",
    neighborhood: "Parquelândia",
    rating: 4.6,
    priceLevel: 2,
    image: "assets/bulls_beer_pub.png",
    hours: "17h - 00h",
  },
  {
    id: 8,
    name: "House Garden",
    category: "Pubs",
    description:
      "Pub descontraído que possui um clima agradável, ideal para sair com amigos.",
    neighborhood: "Varjota",
    rating: 4.0,
    priceLevel: 2,
    image: "assets/House_Garden_Pub.png",
    hours: "18h - 00h",
  },
  {
    id: 1,
    name: "The Bar",
    category: "Pubs",
    description: "Música ao vivo e um ambiente divertido.",
    neighborhood: "Linel Machado",
    rating: 4.0,
    priceLevel: 2,
    image: "assets/The_Bar_Pub.png",
    hours: "18h - 00h",
  },
  {
    id: 2,
    name: "Arena do humor",
    category: "Comédia",
    description: "Local convidativo para toda família",
    neighborhood: "Meireles",
    rating: 4.0,
    priceLevel: 2,
    image: "assets/arena_do_humor.png",
    hours: "17h - 23h",
  },
];

let activeCategory = "Todos";
let searchQuery = "";

const filtersEl = document.getElementById("filters");
const gridEl = document.getElementById("grid");
const emptyEl = document.getElementById("empty");
const searchEl = document.getElementById("search");

function renderFilters() {
  filtersEl.innerHTML = categories
    .map(
      (cat) => `
    <button class="filter-btn ${cat === activeCategory ? "active" : ""}" data-cat="${cat}">
      <span class="emoji">${categoryEmojis[cat]}</span>${cat}
    </button>
  `,
    )
    .join("");
  filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderFilters();
      renderGrid();
    });
  });
}

function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
      c
      ],
  );
}

function renderGrid() {
  const q = searchQuery.toLowerCase();
  const filtered = venues.filter((v) => {
    const cat = activeCategory === "Todos" || v.category === activeCategory;
    const s =
      !q ||
      v.name.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.neighborhood.toLowerCase().includes(q);
    return cat && s;
  });

  if (filtered.length === 0) {
    gridEl.innerHTML = "";
    emptyEl.hidden = false;
    return;
  }
  emptyEl.hidden = true;

  gridEl.innerHTML = filtered
    .map(
      (v, i) => `
    <article class="card" style="animation-delay:${i * 50}ms">
      <div class="card-img-wrap">
        <img src="${v.image}" alt="${escapeHtml(v.name)}" loading="lazy" />
        <span class="badge">${v.category}</span>
        <span class="rating"><span class="star">★</span>${v.rating}</span>
      </div>
      <div class="card-body">
        <div class="card-head">
          <h3 class="card-title">${escapeHtml(v.name)}</h3>
          <span class="card-price">${"R$".repeat(v.priceLevel)}</span>
        </div>
        <p class="card-desc">${escapeHtml(v.description)}</p>
        <div class="card-meta">
          <span>📍 ${escapeHtml(v.neighborhood)}</span>
          <span>🕒 ${escapeHtml(v.hours)}</span>
        </div>
      </div>
    </article>
  `,
    )
    .join("");
}

searchEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderGrid();
});

renderFilters();
renderGrid();
