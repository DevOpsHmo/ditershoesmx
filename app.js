const WA = "526621746719";

const models = [
  {
    id: "dupe-samba",
    name: "Dupe Samba",
    price: 500,
    sizes: "3 al 6 MX",
    colors: [
      { name: "Café", hex: "#6b4636", image: "images/dupe-samba-cafe.jpg" },
      { name: "Late", hex: "#d8c3ae", image: "images/dupe-samba-late.jpg" },
      { name: "Negro", hex: "#2b2b2b", image: "images/dupe-samba-negro.jpg" }
    ]
  },
  {
    id: "samba-low",
    name: "Samba Low",
    price: 500,
    sizes: "3 al 6 MX",
    colors: [
      { name: "Café / Rosa", hex: "#8a5a52", image: "images/samba-low-cafe-rosa.jpg", worn: "images/samba-low-cafe-rosa-puesta.jpg" },
      { name: "Blanco / Negro", hex: "#f4f4f4", image: "images/samba-low-blanco-negro.jpg", worn: "images/samba-low-blanco-negro-puesta.jpg" },
      { name: "Late / Café", hex: "#c4b29a", image: "images/samba-low-late-cafe.jpg", worn: "images/samba-low-late-cafe-puesta.jpg" },
      { name: "Negro", hex: "#1c1c1c", image: "images/samba-low-negro.jpg" }
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
      { name: "Negro", hex: "#222", image: "images/ofelia-negro.jpg" },
      { name: "Blanco", hex: "#f5f5f5", image: "images/ofelia-blanco.jpg" },
      { name: "Late / Café", hex: "#c9b2a2", image: "images/ofelia-late-cafe.jpg" }
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
      { name: "Plata", hex: "#c5c8cc", image: "images/nb-plata.jpg" },
      { name: "Beige", hex: "#e6d7c3", image: "images/nb-beige.jpg" },
      { name: "Blanco", hex: "#f7f7f7", image: "images/nb-blanco.jpg" }
    ]
  },
  { id: "georgina", name: "Georgina", price: 960, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p2-1.jpg" },
    { name: "Moka", hex: "#6b4636", image: "images/botas-p2-0.jpg" }
  ]},
  { id: "dakota", name: "Dakota", price: 850, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Moka", hex: "#6b4636", image: "images/botas-p3-0.jpg" },
    { name: "Negro", hex: "#111", image: "images/botas-p3-1.jpg" }
  ]},
  { id: "dallas", name: "Dallas", price: 850, sizes: "3 al 6 MX", colors: [
    { name: "Mantequilla", hex: "#f3ead7", image: "images/botas-p4-1.jpg" },
    { name: "Latte", hex: "#c4a574", image: "images/botas-p4-0.jpg" },
    { name: "Negro", hex: "#222", image: "images/botas-p4-2.jpg" }
  ]},
  { id: "romelia", name: "Romelia", price: 750, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p5-1.jpg" },
    { name: "Moka", hex: "#6b4636", image: "images/botas-p5-0.jpg" }
  ]},
  { id: "romeo", name: "Romeo", price: 790, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Moka", hex: "#6b4636", image: "images/botas-p6-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p6-0.jpg" }
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
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p9-3.jpg" },
    { name: "Arena", hex: "#d8d0c4", image: "images/botas-p9-1.jpg" },
    { name: "Chocolate", hex: "#5c4638", image: "images/botas-p9-0.jpg" },
    { name: "Camel", hex: "#c4a06a", image: "images/botas-p9-2.jpg" }
  ]},
  { id: "montana", name: "Montana", price: 850, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Plata", hex: "#c5c8cc", image: "images/botas-p10-0.jpg" },
    { name: "Late", hex: "#f2f0ec", image: "images/botas-p10-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p10-2.jpg" }
  ]},
  { id: "harley", name: "Harley", price: 825, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Rioja", hex: "#7a3050", image: "images/botas-p11-2.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p11-0.jpg" },
    { name: "Testa", hex: "#5c4038", image: "images/botas-p11-1.jpg" }
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
    { name: "Moka", hex: "#4a372c", image: "images/botas-p15-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/botas-p15-0.jpg" }
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
    { name: "Negro", hex: "#2b2b2b", image: "images/botas-p21-1.jpg" },
    { name: "Moka", hex: "#6b5348", image: "images/botas-p21-0.jpg" }
  ]},
  { id: "manhatan", name: "Manhatan", price: 890, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Marrón", hex: "#8a5a32", image: "images/botas-p22-1.jpg" },
    { name: "Negro", hex: "#222", image: "images/botas-p22-0.jpg" }
  ]},
  { id: "claudia", name: "Claudia", price: 495, sizes: "3 al 6 MX", colors: [
    { name: "Vino", hex: "#6b2430", image: "images/flats-p2-1.jpg" },
    { name: "Maquillaje", hex: "#e6cfc0", image: "images/flats-p2-2.jpg" },
    { name: "Negro", hex: "#1a1a1a", image: "images/flats-p2-0.jpg" },
    { name: "Café", hex: "#5c3a2e", image: "images/flats-p2-3.jpg" }
  ]},
  { id: "mary-jane", name: "Mary Jane", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Rojo", hex: "#d0122a", image: "images/flats-p3-2.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/flats-p3-0.jpg" },
    { name: "Vino", hex: "#6b2430", image: "images/flats-p3-1.jpg" },
    { name: "Café", hex: "#8d7568", image: "images/flats-p3-3.jpg" },
    { name: "Leopardo", hex: "#8a6238", image: "images/flats-p3-4.jpg" }
  ]},
  { id: "fer", name: "Fer", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Late", hex: "#f2f0ec", image: "images/flats-p4-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/flats-p4-0.jpg" }
  ]},
  { id: "demi", name: "Demi", price: 485, sizes: "3 al 7 MX", colors: [
    { name: "Late", hex: "#f7f4ef", image: "images/flats-p5-1.jpg" },
    { name: "Café", hex: "#6b4636", image: "images/flats-p5-0.jpg" }
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
    { name: "Charol Maquillaje", hex: "#e4d2c8", image: "images/flats-p11-0.jpg" },
    { name: "Charol Negro", hex: "#111", image: "images/flats-p11-1.jpg" },
    { name: "Charol Café", hex: "#4a3028", image: "images/flats-p11-2.jpg" }
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
    { name: "Vino", hex: "#6b2430", image: "images/flats-p16-0.jpg" },
    { name: "Miga", hex: "#e6dfd4", image: "images/flats-p16-2.jpg" },
    { name: "Café", hex: "#c4956a", image: "images/flats-p16-1.jpg" },
    { name: "Negro", hex: "#1a1a1a", image: "images/flats-p16-3.jpg" }
  ]},
  { id: "japon", name: "Japón", price: 485, sizes: "3 al 6 MX", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/flats-p17-0.jpg" },
    { name: "Café", hex: "#6b4632", image: "images/flats-p17-1.jpg" }
  ]},
  { id: "leilany", name: "Leilany", price: 485, sizes: "2 al 7 MX", colors: [
    { name: "Café", hex: "#6b4632", image: "images/flats-p18-0.jpg" }
  ]},
  { id: "gali", name: "Gali", price: 485, sizes: "2 al 7 MX · Tacón 10", colors: [
    { name: "Rojo", hex: "#9b1c2c", image: "images/zapatillas-gali-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-gali-1.jpg" },
    { name: "Avellana", hex: "#8a5a32", image: "images/zapatillas-gali-2.jpg" },
    { name: "Maquillaje", hex: "#e6cbb8", image: "images/zapatillas-gali-3.jpg" },
    { name: "Oro", hex: "#d4b483", image: "images/zapatillas-gali-4.jpg" }
  ]},
  { id: "coquette", name: "Coquette", price: 550, sizes: "2 al 7 MX · Tacón 8", colors: [
    { name: "Amarillo", hex: "#e8d56a", image: "images/zapatillas-coquette-0.jpg" },
    { name: "Rosa", hex: "#e8a8c0", image: "images/zapatillas-coquette-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-coquette-3.jpg" }
  ]},
  { id: "italia", name: "Italia", price: 550, sizes: "2 al 7 MX · Tacón 10", colors: [
    { name: "Rojo", hex: "#8b1e2d", image: "images/zapatillas-italia-1.jpg" },
    { name: "Negro", hex: "#111", image: "images/zapatillas-italia-0.jpg" },
    { name: "Maquillaje", hex: "#d4b8a8", image: "images/zapatillas-italia-2.jpg" }
  ]},
  { id: "karime", name: "Karime", price: 495, sizes: "2 al 7 MX · Tacón 6", colors: [
    { name: "Blanco", hex: "#f4f0e8", image: "images/zapatillas-karime-0.jpg" },
    { name: "Maquillaje", hex: "#c4a890", image: "images/zapatillas-karime-1.jpg" }
  ]},
  { id: "alejandra", name: "Alejandra", price: 525, sizes: "3 al 6 MX · Tacón 10 · Plataforma 2", colors: [
    { name: "Oro", hex: "#d4b483", image: "images/zapatillas-alejandra-1.jpg" },
    { name: "Charol Negro", hex: "#111", image: "images/zapatillas-alejandra-0.jpg" },
    { name: "Avellana", hex: "#c4a06a", image: "images/zapatillas-alejandra-2.jpg" },
    { name: "Charol Maquillaje", hex: "#e4d2c8", image: "images/zapatillas-alejandra-3.jpg" }
  ]},
  { id: "princesa", name: "Princesa", price: 525, sizes: "3 al 6 MX · Tacón 10", colors: [
    { name: "Plata", hex: "#c5c8cc", image: "images/zapatillas-princesa-1.jpg" },
    { name: "Nude", hex: "#e6cbb8", image: "images/zapatillas-princesa-0.jpg" }
  ]},
  { id: "keila", name: "Keila", price: 500, sizes: "3 al 7 MX · Tacón 8", colors: [
    { name: "Amarillo", hex: "#e8d56a", image: "images/zapatillas-keila-1.jpg" },
    { name: "Ice", hex: "#e6dfd4", image: "images/zapatillas-keila-0.jpg" },
    { name: "Avellana", hex: "#c4a06a", image: "images/zapatillas-keila-2.jpg" }
  ]},
  { id: "odalya", name: "Odalya", price: 500, sizes: "3 al 6 MX · Tacón 3", colors: [
    { name: "Polka Blanco", hex: "#f4f0e8", image: "images/zapatillas-odalya-2.jpg" },
    { name: "Avena", hex: "#c4b59a", image: "images/zapatillas-odalya-0.jpg" },
    { name: "Polka Negro", hex: "#3a3028", image: "images/zapatillas-odalya-1.jpg" }
  ]},
  { id: "zoe", name: "Zoe", price: 495, sizes: "2 al 7 MX · Tacón 6", colors: [
    { name: "Rosa", hex: "#e8a8c0", image: "images/zapatillas-zoe-2.jpg" },
    { name: "Miga", hex: "#f3eee6", image: "images/zapatillas-zoe-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-zoe-1.jpg" },
    { name: "Testa", hex: "#5c4038", image: "images/zapatillas-zoe-3.jpg" }
  ]},
  { id: "carlota", name: "Carlota", price: 500, sizes: "3 al 6 MX · Tacón 9", colors: [
    { name: "Vino", hex: "#6b2430", image: "images/zapatillas-carlota-4.jpg" },
    { name: "Maquillaje", hex: "#e6cbb8", image: "images/zapatillas-carlota-0.jpg" },
    { name: "Ch. Miga", hex: "#f3eee6", image: "images/zapatillas-carlota-1.jpg" },
    { name: "Carey", hex: "#6b4632", image: "images/zapatillas-carlota-2.jpg" },
    { name: "Chocolate", hex: "#4a3028", image: "images/zapatillas-carlota-3.jpg" }
  ]},
  { id: "monica", name: "Mónica", price: 500, sizes: "2 al 7 MX · Tacón 8", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-monica-0.jpg" },
    { name: "Ch. Miga", hex: "#f3eee6", image: "images/zapatillas-monica-1.jpg" }
  ]},
  { id: "alexia", name: "Alexia", price: 495, sizes: "2 al 7 MX · Tacón 6", colors: [
    { name: "Vino", hex: "#6b2430", image: "images/zapatillas-alexia-2.jpg" },
    { name: "Maquillaje", hex: "#e6cbb8", image: "images/zapatillas-alexia-0.jpg" },
    { name: "Negro Mate", hex: "#1c1c1c", image: "images/zapatillas-alexia-1.jpg" },
    { name: "Ice", hex: "#e6dfd4", image: "images/zapatillas-alexia-3.jpg" },
    { name: "Carey", hex: "#6b4632", image: "images/zapatillas-alexia-4.jpg" },
    { name: "Ch. Negro", hex: "#111", image: "images/zapatillas-alexia-5.jpg" },
    { name: "Polka Nutty", hex: "#d8c4b4", image: "images/zapatillas-alexia-6.jpg" }
  ]},
  { id: "gloria", name: "Gloria", price: 495, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Camel", hex: "#8a5a32", image: "images/zapatillas-gloria-0.jpg" },
    { name: "Ice", hex: "#e6dfd4", image: "images/zapatillas-gloria-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-gloria-2.jpg" }
  ]},
  { id: "majo", name: "Majo", price: 550, sizes: "2 al 6 MX · Tacón 13 · Plataforma 3", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-majo-1.jpg" },
    { name: "Miga", hex: "#f3eee6", image: "images/zapatillas-majo-0.jpg" }
  ]},
  { id: "karina", name: "Karina", price: 500, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Carey", hex: "#6b4632", image: "images/zapatillas-karina-1.jpg" },
    { name: "Mica / Miga", hex: "#e6dfd4", image: "images/zapatillas-karina-2.jpg" },
    { name: "Negro", hex: "#111", image: "images/zapatillas-karina-0.jpg" }
  ]},
  { id: "amanda", name: "Amanda", price: 550, sizes: "3 al 6 MX · Tacón 10", colors: [
    { name: "Oro", hex: "#d4b483", image: "images/zapatillas-amanda-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-amanda-1.jpg" }
  ]},
  { id: "karely", name: "Karely", price: 500, sizes: "3 al 6 MX · Tacón 6", colors: [
    { name: "Oro", hex: "#d4b483", image: "images/zapatillas-karely-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-karely-1.jpg" }
  ]},
  { id: "carolina", name: "Carolina", price: 500, sizes: "2 al 7 MX · Tacón 6", colors: [
    { name: "Vino", hex: "#6b2430", image: "images/zapatillas-carolina-2.jpg" },
    { name: "Negro", hex: "#111", image: "images/zapatillas-carolina-0.jpg" },
    { name: "Miga", hex: "#f3eee6", image: "images/zapatillas-carolina-1.jpg" }
  ]},
  { id: "lana", name: "Lana", price: 550, sizes: "2 al 7 MX · Tacón 10", colors: [
    { name: "Miga", hex: "#f3eee6", image: "images/zapatillas-lana-2.jpg" },
    { name: "Rojo", hex: "#b4232a", image: "images/zapatillas-lana-0.jpg" },
    { name: "Negro", hex: "#111", image: "images/zapatillas-lana-1.jpg" },
    { name: "Vino", hex: "#6b2430", image: "images/zapatillas-lana-3.jpg" }
  ]},
  { id: "carry", name: "Carry", price: 550, sizes: "2 al 7 MX · Tacón 8", colors: [
    { name: "Late", hex: "#f2f0ec", image: "images/zapatillas-carry-0.jpg" },
    { name: "Ch. Negro", hex: "#111", image: "images/zapatillas-carry-1.jpg" }
  ]},
  { id: "marieta", name: "Marieta", price: 550, sizes: "2 al 7 MX · Tacón 8", colors: [
    { name: "Vino", hex: "#6b2430", image: "images/zapatillas-marieta-1.jpg" },
    { name: "Miga", hex: "#f3eee6", image: "images/zapatillas-marieta-0.jpg" },
    { name: "Negro", hex: "#111", image: "images/zapatillas-marieta-2.jpg" }
  ]},
  { id: "veronica", name: "Verónica", price: 550, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Miga", hex: "#f3eee6", image: "images/zapatillas-veronica-2.jpg" },
    { name: "Negro", hex: "#111", image: "images/zapatillas-veronica-0.jpg" },
    { name: "Vino", hex: "#6b2430", image: "images/zapatillas-veronica-1.jpg" }
  ]},
  { id: "dafne", name: "Dafne", price: 550, sizes: "2 al 7 MX · Tacón 10", colors: [
    { name: "Oro", hex: "#d4b483", image: "images/zapatillas-dafne-0.jpg" }
  ]},
  { id: "marilu", name: "Marilú", price: 550, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Maquillaje", hex: "#e6cbb8", image: "images/zapatillas-marilu-0.jpg" }
  ]},
  { id: "charlotte", name: "Charlotte", price: 550, sizes: "2 al 7 MX · Tacón 8", colors: [
    { name: "Plata", hex: "#c5c8cc", image: "images/zapatillas-charlotte-0.jpg" }
  ]},
  { id: "loretta", name: "Loretta", price: 550, sizes: "2 al 7 MX · Tacón 10", colors: [
    { name: "Miga", hex: "#f3eee6", image: "images/zapatillas-loretta-0.jpg" }
  ]},
  { id: "loretta-polka", name: "Loretta Polka", price: 550, sizes: "3 al 6 MX · Tacón 10", colors: [
    { name: "Azul", hex: "#2a4f86", image: "images/zapatillas-loretta-polka-2.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-loretta-polka-0.jpg" },
    { name: "Rojo", hex: "#c23b4a", image: "images/zapatillas-loretta-polka-1.jpg" },
    { name: "Blanco", hex: "#f7f7f7", image: "images/zapatillas-loretta-polka-3.jpg" }
  ]},
  { id: "catalina", name: "Catalina", price: 550, sizes: "2 al 7 MX · Tacón 8", colors: [
    { name: "Rojo", hex: "#c41220", image: "images/zapatillas-catalina-1.jpg" },
    { name: "Negro", hex: "#111", image: "images/zapatillas-catalina-0.jpg" }
  ]},
  { id: "eva", name: "Eva", price: 485, sizes: "2 al 7 MX · Tacón 5", colors: [
    { name: "Camel", hex: "#8a5a32", image: "images/zapatillas-eva-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-eva-0.jpg" }
  ]},
  { id: "arlet", name: "Arlet", price: 495, sizes: "2 al 7 MX · Tacón 7", colors: [
    { name: "Vino", hex: "#6b2430", image: "images/zapatillas-arlet-1.jpg" },
    { name: "Negro", hex: "#111", image: "images/zapatillas-arlet-0.jpg" },
    { name: "Miga", hex: "#f3eee6", image: "images/zapatillas-arlet-2.jpg" }
  ]},
  { id: "julieta", name: "Julieta", price: 550, sizes: "3 al 6 MX · Tacón 3", colors: [
    { name: "Negro", hex: "#111", image: "images/zapatillas-julieta-0.jpg" }
  ]},
  { id: "madeline", name: "Madeline", price: 590, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Marrón", hex: "#6b4632", image: "images/zapatillas-madeline-2.jpg" },
    { name: "Blanco", hex: "#f4f0e8", image: "images/zapatillas-madeline-0.jpg" },
    { name: "Beige", hex: "#e6d3bc", image: "images/zapatillas-madeline-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-madeline-3.jpg" }
  ]},
  { id: "teressa", name: "Teressa", price: 590, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Negro", hex: "#1c1c1c", image: "images/zapatillas-teressa-1.jpg" },
    { name: "Beige", hex: "#e6d3bc", image: "images/zapatillas-teressa-0.jpg" },
    { name: "Marrón", hex: "#6b4632", image: "images/zapatillas-teressa-2.jpg" }
  ]},
  { id: "atziry", name: "Atziry", price: 590, sizes: "3 al 6 MX · Tacón 8", colors: [
    { name: "Vino", hex: "#6b2430", image: "images/zapatillas-atziry-1.jpg" },
    { name: "Maquillaje", hex: "#e6cbb8", image: "images/zapatillas-atziry-2.jpg" },
    { name: "Negro", hex: "#111", image: "images/zapatillas-atziry-0.jpg" }
  ]},
  { id: "pantufla-004", name: "Pantufla 004", price: 500, sizes: "2 al 6 MX", colors: [
    { name: "Beige", hex: "#d8c4a8", image: "images/pantuflas-004-2.jpg" },
    { name: "Camel", hex: "#c4843a", image: "images/pantuflas-004-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/pantuflas-004-1.jpg" }
  ]},
  { id: "pantufla-001", name: "Pantufla 001", price: 500, sizes: "2 al 6 MX", colors: [
    { name: "Rosa", hex: "#e8a8c0", image: "images/pantuflas-001-2.jpg" },
    { name: "Camel", hex: "#c4a06a", image: "images/pantuflas-001-0.jpg" },
    { name: "Blanco", hex: "#f7f7f7", image: "images/pantuflas-001-1.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/pantuflas-001-3.jpg" }
  ]},
  { id: "pantufla-005", name: "Pantufla 005", price: 600, sizes: "2 al 6 MX", colors: [
    { name: "Chocolate", hex: "#4a3028", image: "images/pantuflas-005-2.jpg" },
    { name: "Camel", hex: "#c4843a", image: "images/pantuflas-005-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/pantuflas-005-1.jpg" }
  ]},
  { id: "pantufla-006", name: "Pantufla 006", price: 600, sizes: "2 al 6 MX", colors: [
    { name: "Camel", hex: "#c4843a", image: "images/pantuflas-006-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/pantuflas-006-1.jpg" },
    { name: "Beige", hex: "#d8c4a8", image: "images/pantuflas-006-2.jpg" }
  ]},
  { id: "pantufla-003", name: "Pantufla 003", price: 600, sizes: "2 al 6 MX", colors: [
    { name: "Camel", hex: "#c4a06a", image: "images/pantuflas-003-2.jpg" },
    { name: "Chocolate", hex: "#5c4030", image: "images/pantuflas-003-0.jpg" },
    { name: "Negro", hex: "#1c1c1c", image: "images/pantuflas-003-1.jpg" }
  ]}
];

const filters = document.getElementById("filters");
const grid = document.getElementById("grid");
const pager = document.getElementById("pager");
const dialog = document.getElementById("lightbox");
const dialogImg = document.getElementById("lightbox-img");

function openPhoto() {
  dialog.showModal();
}

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

let active = "todos";
let page = 1;

function pageSize() {
  return window.matchMedia("(max-width: 720px)").matches ? 6 : 15;
}

function money(n) {
  return `$${n}`;
}

function sizeButtons(model) {
  const sizes = model.sizes;
  if (sizes.includes("2 al 7")) return ["2", "3", "4", "5", "6", "7"];
  if (sizes.includes("2 al 6")) return ["2", "3", "4", "5", "6"];
  if (sizes.includes("3 al 7")) return ["3", "4", "5", "6", "7"];
  return ["3", "4", "5", "6"];
}

function waLink(model, color, size) {
  const text = `Hola, quiero pedir ${model.name} color ${color.name}. Talla: ${size} MX`;
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

const categoryNames = { tenis: "Tenis", botas: "Botas", flats: "Flats", zapatillas: "Zapatillas", pantuflas: "Pantunflas" };
const categoryOrder = ["tenis", "botas", "flats", "zapatillas", "pantuflas"];

for (const model of models) {
  const src = model.colors[0].image;
  if (src.includes("/botas-")) model.category = "botas";
  else if (src.includes("/flats-")) model.category = "flats";
  else if (src.includes("/zapatillas-")) model.category = "zapatillas";
  else if (src.includes("/pantuflas-")) model.category = "pantuflas";
  else model.category = "tenis";
}

function renderFilters() {
  const items = [{ id: "todos", name: "Todos" }, ...categoryOrder.map((id) => ({ id, name: categoryNames[id] }))];
  filters.innerHTML = items.map((item) =>
    `<button type="button" data-id="${item.id}" class="${item.id === active ? "active" : ""}">${item.name}</button>`
  ).join("");
}

function imgSrc(path) {
  return String(path).replace(/\.(jpe?g|png)$/i, ".webp");
}

function card(model, index) {
  const color = model.colors[0];
  const eager = index < 2;
  return `
    <article class="card" data-model="${model.id}">
      <img src="${imgSrc(color.image)}" alt="${model.name} ${color.name}" width="800" height="1000" style="aspect-ratio:4/5" ${eager ? 'fetchpriority="high"' : ''} decoding="async" />
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

function currentList() {
  return active === "todos" ? models : models.filter((m) => m.category === active || m.id === active);
}

function pageButtons(pages) {
  const desktop = pageSize() > 6;
  const shown = desktop
    ? new Set(Array.from({ length: pages }, (_, i) => i + 1))
    : new Set([1, pages, page - 1, page, page + 1].filter((n) => n >= 1 && n <= pages));
  const nums = [...shown].sort((a, b) => a - b);
  const parts = [];
  let prev = 0;
  for (const n of nums) {
    if (prev && n - prev > 1) parts.push(`<span class="pager-gap" aria-hidden="true">…</span>`);
    parts.push(`<button type="button" data-page="${n}" ${n === page ? 'aria-current="page"' : ""}>${n}</button>`);
    prev = n;
  }
  return parts.join("");
}

function renderPager(pages) {
  if (!pager) return;
  if (pages <= 1) {
    pager.hidden = true;
    pager.innerHTML = "";
    return;
  }
  pager.hidden = false;
  pager.innerHTML = `
    <button type="button" data-page="${page - 1}" ${page === 1 ? "disabled" : ""}>Anterior</button>
    ${pageButtons(pages)}
    <button type="button" data-page="${page + 1}" ${page === pages ? "disabled" : ""}>Siguiente</button>`;
}

function render() {
  const list = currentList();
  const size = pageSize();
  const pages = Math.max(1, Math.ceil(list.length / size));
  if (page > pages) page = pages;
  if (page < 1) page = 1;
  const slice = list.slice((page - 1) * size, page * size);
  grid.innerHTML = slice.length
    ? slice.map((model, index) => card(model, index)).join("")
    : `<p class="empty-cat">Pronto verás los modelos de ${categoryNames[active] || "esta categoría"}.</p>`;
  renderPager(pages);
}

filters.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  active = btn.dataset.id;
  page = 1;
  renderFilters();
  render();
});

pager.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn || btn.disabled) return;
  page = Number(btn.dataset.page);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let sized = pageSize();
window.addEventListener("resize", () => {
  const next = pageSize();
  if (next === sized) return;
  sized = next;
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
    cardEl.querySelector("img").src = imgSrc(color.image);
    cardEl.querySelector("img").alt = `${model.name} ${color.name}`;
    cardEl.querySelector(".color-name").textContent = color.name;
    cardEl.querySelectorAll(".swatches button").forEach((b) => b.classList.remove("active"));
    swatch.classList.add("active");
    syncOrder(cardEl, model);
    const worn = cardEl.querySelector(".worn");
    if (worn) {
      if (color.worn) {
        worn.hidden = false;
        worn.dataset.worn = imgSrc(color.worn);
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
