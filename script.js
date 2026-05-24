const categories = ["Todos","Bares","Pubs","Barracas","Comédia","Música ao Vivo","Rooftops"];
const categoryEmojis = {
  "Todos":"🔥","Bares":"🍸","Pubs":"🍺","Barracas":"🏖️","Comédia":"😂","Música ao Vivo":"🎶","Rooftops":"🌇"
};

const venues = [
  // BARRACAS DE PRAIA
  { id:10, name:"Chico do Caranguejo Praia", category:"Barracas", description:"Frutos do mar em ambiente descontraído na Praia do Futuro.", neighborhood:"Praia do Futuro", rating:4.4, priceLevel:3, image:"assets/venue-barraca.jpg", hours:"09h - 18h" },
  { id:11, name:"Órbita Blue Bar", category:"Barracas", description:"Restobar praiano de menu sofisticado com vista pra praia.", neighborhood:"Praia do Futuro", rating:4.5, priceLevel:3, image:"assets/venue-barraca.jpg", hours:"11h - 19h30" },
  { id:12, name:"Barraca da Boa", category:"Barracas", description:"Bar casual com frutos do mar e cerveja gelada na Beira Mar.", neighborhood:"Meireles", rating:4.2, priceLevel:2, image:"assets/venue-barraca.jpg", hours:"17h - 23h" },
  { id:13, name:"Mercado dos Peixes de Fortaleza", category:"Barracas", description:"Mercado tradicional de peixes e frutos do mar na Beira Mar.", neighborhood:"Meireles", rating:4.4, priceLevel:2, image:"assets/venue-barraca.jpg", hours:"06h - 22h" },
  
  // BARES
  { id:14, name:"Bar da Gelada", category:"Bares", description:"Bar animado com refeição no local, viagem e clima descontraído.", neighborhood:"Parque Dois Irmãos", rating:4.4, priceLevel:2, image:"assets/bdg.png", hours:"17h - 02h" },
  { id:15, name:"Arena Bar & Petiscaria", category:"Bares", description:"Bar e grill com petiscos variados e ambiente acolhedor.", neighborhood:"Demócrito Rocha", rating:4.5, priceLevel:2, image:"assets/arena_bar.png", hours:"17h - 00h" },
  { id:16, name:"Samba do Vila", category:"Bares", description:"Amplo espaço com rodas de samba, porções, caipirinhas e clima animado.", neighborhood:"Varjota", rating:4.2, priceLevel:2, image:"assets/samba_do_vila.png", hours:"17h - 02h" },
  { id:17, name:"Boteco do Imprensa", category:"Bares", description:"Boteco tradicional com petiscos, cerveja gelada e clima descontraído.", neighborhood:"Aldeota", rating:4.1, priceLevel:2, image:"assets/boteco_imprensa.png", hours:"17h - 00h" },

  //
  { id:3, name:"Comedy Club Fortaleza", category:"Comédia", description:"Os melhores comediantes do Nordeste toda sexta e sábado.", neighborhood:"Aldeota", rating:4.9, priceLevel:2, image:"assets/venue-comedy.jpg", hours:"20h - 00h" },
  { id:4, name:"O'Malley's Pub", category:"Pubs", description:"Cervejas artesanais importadas e petiscos irresistíveis.", neighborhood:"Varjota", rating:4.5, priceLevel:3, image:"assets/venue-pub.jpg", hours:"17h - 03h" },
  { id:5, name:"Palco da Praia", category:"Música ao Vivo", description:"Forró, MPB e sertanejo ao vivo com os pés na areia.", neighborhood:"Praia de Iracema", rating:4.6, priceLevel:2, image:"assets/venue-musica.jpg", hours:"19h - 04h" },
  { id:6, name:"Sky Lounge", category:"Rooftops", description:"Vista panorâmica de Fortaleza com cocktails premium.", neighborhood:"Mucuripe", rating:4.8, priceLevel:4, image:"assets/venue-rooftop.jpg", hours:"18h - 01h" },
  { id:9, name:"Stand Up CE", category:"Comédia", description:"Open mic toda quarta e shows especiais nos fins de semana.", neighborhood:"Centro", rating:4.3, priceLevel:1, image:"assets/venue-comedy.jpg", hours:"19h - 23h" },
];

let activeCategory = "Todos";
let searchQuery = "";

const filtersEl = document.getElementById("filters");
const gridEl = document.getElementById("grid");
const emptyEl = document.getElementById("empty");
const searchEl = document.getElementById("search");

function renderFilters() {
  filtersEl.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">
      <span class="emoji">${categoryEmojis[cat]}</span>${cat}
    </button>
  `).join("");
  filtersEl.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderFilters();
      renderGrid();
    });
  });
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function renderGrid() {
  const q = searchQuery.toLowerCase();
  const filtered = venues.filter(v => {
    const cat = activeCategory === "Todos" || v.category === activeCategory;
    const s = !q || v.name.toLowerCase().includes(q) || v.description.toLowerCase().includes(q) || v.neighborhood.toLowerCase().includes(q);
    return cat && s;
  });

  if (filtered.length === 0) {
    gridEl.innerHTML = "";
    emptyEl.hidden = false;
    return;
  }
  emptyEl.hidden = true;

  gridEl.innerHTML = filtered.map((v, i) => `
    <article class="card" style="animation-delay:${i * 50}ms">
      <div class="card-img-wrap">
        <img src="${v.image}" alt="${escapeHtml(v.name)}" loading="lazy" />
        <span class="badge">${v.category}</span>
        <span class="rating"><span class="star">★</span>${v.rating}</span>
      </div>
      <div class="card-body">
        <div class="card-head">
          <h3 class="card-title">${escapeHtml(v.name)}</h3>
          <span class="card-price">${'R$'.repeat(v.priceLevel)}</span>
        </div>
        <p class="card-desc">${escapeHtml(v.description)}</p>
        <div class="card-meta">
          <span>📍 ${escapeHtml(v.neighborhood)}</span>
          <span>🕒 ${escapeHtml(v.hours)}</span>
        </div>
      </div>
    </article>
  `).join("");
}

searchEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderGrid();
});

renderFilters();
renderGrid();
