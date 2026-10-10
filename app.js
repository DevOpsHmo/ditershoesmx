const WA = "526621746719";

const models = [
  {
    id: "dupe-samba",
    name: "Dupe Samba",
    price: 500,
    sizes: "3 al 6 MX",
    colors: [
      { name: "Café", hex: "#6b4636", image: "images/dupe-samba-cafe.jpg" },
      { name: "Negro", hex: "#2b2b2b", image: "images/dupe-samba-negro.jpg" },
      { name: "Late", hex: "#d8c3ae", image: "images/dupe-samba-late.jpg" }
    ]
  },
  {
    id: "samba-low",
    name: "Samba Low",
    price: 500,
    sizes: "3 al 6 MX",
    colors: [
      { name: "Late / Café", hex: "#c4b29a", image: "images/samba-low-late-cafe.jpg", worn: "images/samba-low-late-cafe-puesta.jpg" },
      { name: "Blanco / Negro", hex: "#f4f4f4", image: "images/samba-low-blanco-negro.jpg", worn: "images/samba-low-blanco-negro-puesta.jpg" },
      { name: "Negro", hex: "#1c1c1c", image: "images/samba-low-negro.jpg" },
      { name: "Café / Rosa", hex: "#8a5a52", image: "images/samba-low-cafe-rosa.jpg", worn: "images/samba-low-cafe-rosa-puesta.jpg" }
    ]
  },
  {
    id: "samba-jane",
    name: "Samba Jane",
    price: 550,
    sizes: "3 al 6 MX",
    colors: [
      { name: "Blanco", hex: "#f7f7f7", image: "images/samba-jane-blanco.jpg" },
      { name: "Café", hex: "#6a4034", image: "images/samba-jane-cafe.jpg" }
    ]
  },
  {
    id: "ofelia",
    name: "Ofelia",
    price: 600,
    sizes: "3 al 6 MX",
    colors: [
      { name: "Late / Café", hex: "#c9b2a2", image: "images/ofelia-late-cafe.jpg" },
      { name: "Blanco", hex: "#f5f5f5", image: "images/ofelia-blanco.jpg" },
      { name: "Negro", hex: "#222", image: "images/ofelia-negro.jpg" }
    ]
  },
  {
    id: "matilda",
    name: "Matilda",
    price: 600,
    sizes: "3 al 6 MX",
    colors: [
      { name: "Olivo", hex: "#5d6848", image: "images/matilda-olivo.jpg" },
      { name: "Late", hex: "#cbb8a4", image: "images/matilda-late.jpg" },
      { name: "Café", hex: "#6b4638", image: "images/matilda-cafe.jpg" }
    ]
  },
  {
    id: "tenis-nb",
    name: "Tenis NB",
    price: 600,
    sizes: "3 al 6 MX",
    colors: [
      { name: "Beige", hex: "#e6d7c3", image: "images/nb-beige.jpg" },
      { name: "Plata", hex: "#c5c8cc", image: "images/nb-plata.jpg" },
      { name: "Blanco", hex: "#f7f7f7", image: "images/nb-blanco.jpg" }
    ]
  },
  { id: "georgina", name: "Georgina", price: 960, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Moka", hex: "#6b4636", image: "images/botas-p2-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p2-1.jpg" }
  ]},
  { id: "dakota", name: "Dakota", price: 850, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Moka", hex: "#6b4636", image: "images/botas-p3-0.jpg" },
    { name: "Negro", hex: "#111", image: "images/botas-p3-1.jpg" }
  ]},
  { id: "dallas", name: "Dallas", price: 850, sizes: "3 al 6 MX", colors: [
    { name: "Latte", hex: "#c4a574", image: "images/botas-p4-0.jpg" },
    { name: "Mantequilla", hex: "#f3ead7", image: "images/botas-p4-1.jpg" },
    { name: "Negro", hex: "#222", image: "images/botas-p4-2.jpg" }
  ]},
  { id: "romelia", name: "Romelia", price: 750, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Moka", hex: "#6b4636", image: "images/botas-p5-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p5-1.jpg" }
  ]},
  { id: "romeo", name: "Romeo", price: 790, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p6-0.jpg" },
    { name: "Moka", hex: "#6b4636", image: "images/botas-p6-1.jpg" }
  ]},
  { id: "victoria", name: "Botín Victoria", price: 790, sizes: "3 al 6 MX · Tacón 7", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p7-0.jpg" },
    { name: "Moka", hex: "#4a3028", image: "images/botas-p7-1.jpg" }
  ]},
  { id: "arkansas", name: "Arkansas", price: 950, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Arena", hex: "#d8d0c4", image: "images/botas-p8-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p8-1.jpg" }
  ]},
  { id: "texas", name: "Texas", price: 890, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Chocolate", hex: "#5c4638", image: "images/botas-p9-0.jpg" },
    { name: "Arena", hex: "#d8d0c4", image: "images/botas-p9-1.jpg" },
    { name: "Camel", hex: "#c4a06a", image: "images/botas-p9-2.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p9-3.jpg" }
  ]},
  { id: "montana", name: "Montana", price: 850, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Plata", hex: "#c5c8cc", image: "images/botas-p10-0.jpg" },
    { name: "Late", hex: "#f2f0ec", image: "images/botas-p10-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p10-2.jpg" }
  ]},
  { id: "harley", name: "Harley", price: 825, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p11-0.jpg" },
    { name: "Testa", hex: "#5c4038", image: "images/botas-p11-1.jpg" },
    { name: "Rioja", hex: "#7a3050", image: "images/botas-p11-2.jpg" }
  ]},
  { id: "gales", name: "Gales", price: 870, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Moka", hex: "#4a3028", image: "images/botas-p12-0.jpg" }
  ]},
  { id: "durango", name: "Durango", price: 950, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Durango", hex: "#9a9078", image: "images/botas-p13-0.jpg" }
  ]},
  { id: "tequila", name: "Tequila", price: 950, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Arena", hex: "#c4b59a", image: "images/botas-p14-0.jpg" },
    { name: "Camel", hex: "#8a5a32", image: "images/botas-p14-1.jpg" }
  ]},
  { id: "cleveland", name: "Cleveland", price: 860, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p15-0.jpg" },
    { name: "Moka", hex: "#4a372c", image: "images/botas-p15-1.jpg" }
  ]},
  { id: "alabama", name: "Alabama", price: 950, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Negro", hex: "#222", image: "images/botas-p16-0.jpg" },
    { name: "Moka", hex: "#3a2418", image: "images/botas-p16-1.jpg" }
  ]},
  { id: "eugenia", name: "Eugenia", price: 950, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p17-0.jpg" }
  ]},
  { id: "arizona", name: "Arizona", price: 850, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p18-0.jpg" }
  ]},
  { id: "espana", name: "España", price: 850, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p19-0.jpg" }
  ]},
  { id: "paulina", name: "Paulina", price: 850, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p20-0.jpg" }
  ]},
  { id: "texana", name: "Texana", price: 950, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Moka", hex: "#6b5348", image: "images/botas-p21-0.jpg" },
    { name: "Negro", hex: "#2b2b2b", image: "images/botas-p21-1.jpg" }
  ]},
  { id: "manhatan", name: "Manhatan", price: 890, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Negro", hex: "#222", image: "images/botas-p22-0.jpg" },
    { name: "Marrón", hex: "#8a5a32", image: "images/botas-p22-1.jpg" }
  ]},
  { id: "claudia", name: "Claudia", price: 495, sizes: "3 al 6 MX", colors: [
    { name: "Vino", hex: "#6b2430", image: "images/flats-p2-1.jpg" },
    { name: "Maquillaje", hex: "#e6cfc0", image: "images/flats-p2-2.jpg" },
    { name: "Negro", hex: "#1a1a1a", image: "images/flats-p2-0.jpg" },
    { name: "Café", hex: "#5c3a2e", image: "images/flats-p2-3.jpg" }
  ]},
  { id: "mary-jane", name: "Mary Jane", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/flats-p3-0.jpg" },
    { name: "Vino", hex: "#6b2430", image: "images/flats-p3-1.jpg" },
    { name: "Rojo", hex: "#d0122a", image: "images/flats-p3-2.jpg" },
    { name: "Café", hex: "#8d7568", image: "images/flats-p3-3.jpg" },
    { name: "Leopardo", hex: "#8a6238", image: "images/flats-p3-4.jpg" }
  ]},
  { id: "fer", name: "Fer", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/flats-p4-0.jpg" },
    { name: "Late", hex: "#f2f0ec", image: "images/flats-p4-1.jpg" }
  ]},
  { id: "demi", name: "Demi", price: 485, sizes: "3 al 7 MX", colors: [
    { name: "Café", hex: "#6b4636", image: "images/flats-p5-0.jpg" },
    { name: "Late", hex: "#f7f4ef", image: "images/flats-p5-1.jpg" }
  ]},
  { id: "viviana", name: "Viviana", price: 490, sizes: "3 al 7 MX", colors: [
    { name: "Blanco", hex: "#f7f7f7", image: "images/flats-p6-0.jpg" },
    { name: "Maquillaje", hex: "#e4cfc0", image: "images/flats-p6-1.jpg" }
  ]},
  { id: "milan", name: "Milan", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Maquillaje", hex: "#c4a882", image: "images/flats-p7-0.jpg" },
    { name: "Negro", hex: "#3a1c16", image: "images/flats-p7-1.jpg" }
  ]},
  { id: "corea", name: "Corea", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Café", hex: "#4a3028", image: "images/flats-p8-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/flats-p8-1.jpg" }
  ]},
  { id: "encaje", name: "Encaje", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Late", hex: "#cbb89a", image: "images/flats-p9-0.jpg" },
    { name: "Negro", hex: "#2a2a2a", image: "images/flats-p9-1.jpg" }
  ]},
  { id: "lulu", name: "Lulu", price: 490, sizes: "3 al 6 MX", colors: [
    { name: "Blanco", hex: "#f7f7f7", image: "images/flats-p10-0.jpg" },
    { name: "Vino", hex: "#6b2430", image: "images/flats-p10-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/flats-p10-0.jpg" }
  ]},
  { id: "malibu", name: "Malibu", price: 490, sizes: "3 al 6 MX", colors: [
    { name: "Leopardo", hex: "#8a6238", image: "images/flats-p10-1.jpg" }
  ]},
  { id: "venezuela", name: "Venezuela", price: 490, sizes: "3 al 6 MX", colors: [
    { name: "Charol Negro", hex: "#111", image: "images/flats-p11-1.jpg" },
    { name: "Charol Café", hex: "#4a3028", image: "images/flats-p11-2.jpg" },
    { name: "Charol Maquillaje", hex: "#e4d2c8", image: "images/flats-p11-0.jpg" }
  ]},
  { id: "alemania", name: "Alemania", price: 485, sizes: "3 al 7 MX", colors: [
    { name: "Plata", hex: "#c5c8cc", image: "images/flats-p12-0.jpg" },
    { name: "Late", hex: "#e6dfd4", image: "images/flats-p12-1.jpg" },
    { name: "Café", hex: "#6b4632", image: "images/flats-p12-2.jpg" }
  ]},
  { id: "maya", name: "Maya", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Oro", hex: "#d4b483", image: "images/flats-p13-0.jpg" },
    { name: "Maquillaje", hex: "#e6cbb8", image: "images/flats-p13-1.jpg" },
    { name: "Plata", hex: "#d5d6d8", image: "images/flats-p13-2.jpg" },
    { name: "Negro", hex: "#1a1a1a", image: "images/flats-p13-3.jpg" }
  ]},
  { id: "boston", name: "Boston", price: 700, sizes: "3 al 7 MX · Unisex", colors: [
    { name: "Verde", hex: "#6d6848", image: "images/flats-p14-0.jpg" },
    { name: "Negro", hex: "#2a2a28", image: "images/flats-p14-1.jpg" },
    { name: "Arena", hex: "#e6d3bc", image: "images/flats-p14-2.jpg" },
    { name: "Café", hex: "#6b4632", image: "images/flats-p14-3.jpg" }
  ]},
  { id: "osiris", name: "Osiris", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Miga", hex: "#f3eee6", image: "images/flats-p15-0.jpg" },
    { name: "Vino", hex: "#6b2430", image: "images/flats-p15-1.jpg" },
    { name: "Charol Negro", hex: "#111", image: "images/flats-p15-2.jpg" }
  ]},
  { id: "argentina", name: "Argentina", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Miga", hex: "#e6dfd4", image: "images/flats-p16-2.jpg" },
    { name: "Vino", hex: "#6b2430", image: "images/flats-p16-0.jpg" },
    { name: "Café", hex: "#c4956a", image: "images/flats-p16-1.jpg" },
    { name: "Negro", hex: "#1a1a1a", image: "images/flats-p16-3.jpg" }
  ]},
  { id: "japon", name: "Japón", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/flats-p17-0.jpg" },
    { name: "Café", hex: "#6b4632", image: "images/flats-p17-1.jpg" }
  ]},
  { id: "leilany", name: "Leilany", price: 485, sizes: "2 al 7 MX", colors: [
    { name: "Café", hex: "#6b4632", image: "images/flats-p18-0.jpg" }
  ]}
];

const filters = document.getElementById("filters");
const grid = document.getElementById("grid");
const dialog = document.getElementById("lightbox");
const dialogImg = document.getElementById("lightbox-img");

const viewport = document.querySelector('meta[name="viewport"]');
const zoomOff = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover";
const zoomOn = "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=4, user-scalable=yes, viewport-fit=cover";

function setPageZoom(allow) {
  viewport.setAttribute("content", allow ? zoomOn : zoomOff);
}

function openPhoto() {
  setPageZoom(true);
  dialog.showModal();
}

dialog.addEventListener("close", () => setPageZoom(false));
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("gesturestart", (event) => {
  if (!dialog.open) event.preventDefault();
});

let active = "todos";

function money(n) {
  return `$${n}`;
}

function priceHtml(model, size) {
  if (model.id === "romeo" && size === "6") {
    return `<span class="was">${money(model.price)}</span><span class="now">${money(700)}</span>`;
  }
  return money(model.price);
}

function sizeButtons(model) {
  if (model.category === "flats" && model.sizes.includes("2 al 7")) return ["2", "3", "4", "5", "6", "7"];
  if (model.category === "flats" && model.sizes.includes("3 al 7")) return ["3", "4", "5", "6", "7"];
  return ["3", "4", "5", "6"];
}

function waLink(model, color, size) {
  const text = `Hola, quiero pedir ${model.name} color ${color.name}. Talla: ${size} MX`;
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

const categoryNames = { tenis: "Tenis", botas: "Botas", flats: "Flats" };

for (const model of models) {
  const src = model.colors[0].image;
  if (src.includes("/botas-")) model.category = "botas";
  else if (src.includes("/flats-")) model.category = "flats";
  else model.category = "tenis";
}

function renderFilters() {
  const items = [{ id: "todos", name: "Todos" }];
  for (const model of models) {
    if (!items.some((item) => item.id === model.category)) {
      items.push({ id: model.category, name: categoryNames[model.category] });
    }
  }
  filters.innerHTML = items.map((item) =>
    `<button type="button" data-id="${item.id}" class="${item.id === active ? "active" : ""}">${item.name}</button>`
  ).join("");
}

function card(model) {
  const color = model.colors[0];
  return `
    <article class="card" data-model="${model.id}">
      <img src="${color.image}" alt="${model.name} ${color.name}" />
      <div class="card-body">
        <p class="model">${model.name}</p>
        <h3 class="color-name">${color.name}</h3>
        <p class="meta">Tallas ${model.sizes}</p>
        <div class="sizes" role="group" aria-label="Talla MX">
          ${sizeButtons(model).map((s) => `<button type="button" data-size="${s}">${s}</button>`).join("")}
        </div>
        <p class="size-hint" hidden>Elige una talla</p>
        <p class="price">${money(model.price)}</p>
        <div class="swatches">
          ${model.colors.map((c, i) => `<button type="button" class="${i === 0 ? "active" : ""}" style="background:${c.hex}" data-index="${i}" aria-label="${c.name}"></button>`).join("")}
        </div>
        <a class="btn order-link" href="#" target="_blank" rel="noopener">Pedir por WhatsApp</a>
      </div>
    </article>`;
}

function render() {
  const list = active === "todos" ? models : models.filter((m) => m.category === active || m.id === active);
  grid.innerHTML = list.map(card).join("");
}

filters.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  active = btn.dataset.id;
  renderFilters();
  render();
});

function selectedColor(cardEl, model) {
  const activeSwatch = cardEl.querySelector(".swatches button.active");
  const index = activeSwatch ? Number(activeSwatch.dataset.index) : 0;
  return model.colors[index];
}

function syncOrder(cardEl, model) {
  const size = cardEl.dataset.size;
  const link = cardEl.querySelector(".order-link");
  if (!size) {
    link.href = "#";
    return;
  }
  link.href = waLink(model, selectedColor(cardEl, model), size);
}

grid.addEventListener("click", (e) => {
  const sizeBtn = e.target.closest(".sizes button");
  const order = e.target.closest(".order-link");
  const swatch = e.target.closest(".swatches button");
  const img = e.target.closest(".card img");
  const wornBtn = e.target.closest(".worn");
  const cardEl = e.target.closest(".card");
  if (!cardEl) return;
  const model = models.find((m) => m.id === cardEl.dataset.model);

  if (sizeBtn) {
    cardEl.dataset.size = sizeBtn.dataset.size;
    cardEl.querySelectorAll(".sizes button").forEach((b) => b.classList.remove("active"));
    sizeBtn.classList.add("active");
    cardEl.querySelector(".size-hint").hidden = true;
    cardEl.querySelector(".price").innerHTML = priceHtml(model, sizeBtn.dataset.size);
    syncOrder(cardEl, model);
  }

  if (order && !cardEl.dataset.size) {
    e.preventDefault();
    cardEl.querySelector(".size-hint").hidden = false;
  }

  if (swatch) {
    const color = model.colors[Number(swatch.dataset.index)];
    cardEl.querySelector("img").src = color.image;
    cardEl.querySelector("img").alt = `${model.name} ${color.name}`;
    cardEl.querySelector(".color-name").textContent = color.name;
    cardEl.querySelectorAll(".swatches button").forEach((b) => b.classList.remove("active"));
    swatch.classList.add("active");
    syncOrder(cardEl, model);
    const worn = cardEl.querySelector(".worn");
    if (worn) {
      if (color.worn) {
        worn.hidden = false;
        worn.dataset.worn = color.worn;
      } else {
        worn.hidden = true;
      }
    }
  }

  if (img) {
    dialogImg.src = img.src;
    dialogImg.alt = img.alt;
    openPhoto();
  }

  if (wornBtn && !wornBtn.hidden) {
    dialogImg.src = wornBtn.dataset.worn;
    dialogImg.alt = `${model.name} puesta`;
    openPhoto();
  }
});

renderFilters();
render();
