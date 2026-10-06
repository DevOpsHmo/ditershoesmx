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
  }
];

const filters = document.getElementById("filters");
const grid = document.getElementById("grid");
const dialog = document.getElementById("lightbox");
const dialogImg = document.getElementById("lightbox-img");
const dialogCap = document.getElementById("lightbox-cap");

let active = "todos";

function money(n) {
  return `$${n}`;
}

const SIZES = ["3", "4", "5", "6"];

function waLink(model, color, size) {
  const text = `Hola, quiero pedir ${model.name} color ${color.name}. Talla: ${size} MX`;
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

function renderFilters() {
  const items = [{ id: "todos", name: "Todos" }, ...models];
  filters.innerHTML = items.map((m) =>
    `<button type="button" data-id="${m.id}" class="${m.id === active ? "active" : ""}">${m.name}</button>`
  ).join("");
}

function card(model) {
  const color = model.colors[0];
  const worn = color.worn
    ? `<button type="button" class="btn btn-ghost worn" data-worn="${color.worn}">Ver puesta</button>`
    : "";
  return `
    <article class="card" data-model="${model.id}">
      <img src="${color.image}" alt="${model.name} ${color.name}" />
      <div class="card-body">
        <p class="model">${model.name}</p>
        <h3 class="color-name">${color.name}</h3>
        <p class="meta">Tallas ${model.sizes}</p>
        <div class="sizes" role="group" aria-label="Talla MX">
          ${SIZES.map((s) => `<button type="button" data-size="${s}">${s}</button>`).join("")}
        </div>
        <p class="size-hint" hidden>Elige una talla</p>
        <p class="price">${money(model.price)}</p>
        <div class="swatches">
          ${model.colors.map((c, i) => `<button type="button" class="${i === 0 ? "active" : ""}" style="background:${c.hex}" data-index="${i}" aria-label="${c.name}"></button>`).join("")}
        </div>
        <a class="btn order-link" href="#" target="_blank" rel="noopener">Pedir por WhatsApp</a>
        ${worn}
      </div>
    </article>`;
}

function render() {
  const list = active === "todos" ? models : models.filter((m) => m.id === active);
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
    dialogCap.textContent = img.alt;
    dialog.showModal();
  }

  if (wornBtn && !wornBtn.hidden) {
    dialogImg.src = wornBtn.dataset.worn;
    dialogImg.alt = `${model.name} puesta`;
    dialogCap.textContent = `${model.name} · foto puesta`;
    dialog.showModal();
  }
});

renderFilters();
render();
