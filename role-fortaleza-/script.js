const categories = ["Todos","Bares","Pubs","Barracas","Comédia","Música ao Vivo","Rooftops"];
const categoryEmojis = {
  "Todos":"🔥","Bares":"🍸","Pubs":"🍺","Barracas":"🏖️","Comédia":"😂","Música ao Vivo":"🎶","Rooftops":"🌇"
};

const venues = [
  { id:1, name:"Bar do Zé", category:"Bares", description:"Drinks artesanais com ingredientes cearenses e ambiente descolado.", neighborhood:"Meireles", rating:4.7, priceLevel:2, image:"assets/venue-bar.jpg", hours:"18h - 02h" },
  { id:2, name:"Barraca do Loro", category:"Barracas", description:"Pé na areia, frutos do mar frescos e pôr do sol inesquecível.", neighborhood:"Praia do Futuro", rating:4.8, priceLevel:3, image:"assets/venue-barraca.jpg", hours:"10h - 22h" },
  { id:3, name:"Comedy Club Fortaleza", category:"Comédia", description:"Os melhores comediantes do Nordeste toda sexta e sábado.", neighborhood:"Aldeota", rating:4.9, priceLevel:2, image:"assets/venue-comedy.jpg", hours:"20h - 00h" },
  { id:4, name:"O'Malley's Pub", category:"Pubs", description:"Cervejas artesanais importadas e petiscos irresistíveis.", neighborhood:"Varjota", rating:4.5, priceLevel:3, image:"assets/venue-pub.jpg", hours:"17h - 03h" },
  { id:5, name:"Palco da Praia", category:"Música ao Vivo", description:"Forró, MPB e sertanejo ao vivo com os pés na areia.", neighborhood:"Praia de Iracema", rating:4.6, priceLevel:2, image:"assets/venue-musica.jpg", hours:"19h - 04h" },
  { id:6, name:"Sky Lounge", category:"Rooftops", description:"Vista panorâmica de Fortaleza com cocktails premium.", neighborhood:"Mucuripe", rating:4.8, priceLevel:4, image:"assets/venue-rooftop.jpg", hours:"18h - 01h" },
  { id:7, name:"Boteco do Caranguejo", category:"Bares", description:"O melhor caranguejo da cidade com cerveja gelada.", neighborhood:"Praia do Futuro", rating:4.4, priceLevel:2, image:"assets/venue-bar.jpg", hours:"11h - 23h" },
  { id:8, name:"Barraca Chico do Caranguejo", category:"Barracas", description:"Tradição de 30 anos na Praia do Futuro com música ao vivo.", neighborhood:"Praia do Futuro", rating:4.7, priceLevel:3, image:"assets/venue-barraca.jpg", hours:"09h - 21h" },
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
