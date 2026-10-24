const image = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=90`;

const products = [
  {
    id: 1,
    name: "Noir Intense",
    category: "Men",
    price: 125,
    size: "100ml",
    rating: 4.9,
    badge: "BESTSELLER",
    notes: "Oud · Amber · Black Pepper",
    image: image("photo-1594035910387-fea47794261f"),
    description:
      "A bold, sophisticated fragrance with deep woody notes and warm amber."
  },
  {
    id: 2,
    name: "Velvet Rose",
    category: "Women",
    price: 110,
    size: "80ml",
    rating: 4.8,
    badge: "SIGNATURE",
    notes: "Rose · Vanilla · Musk",
    image: image("photo-1541643600914-78b084683601"),
    description:
      "A luxurious floral fragrance with soft rose and creamy vanilla."
  },
  {
    id: 3,
    name: "Golden Oud",
    category: "Unisex",
    price: 145,
    size: "100ml",
    rating: 5.0,
    badge: "ICONIC",
    notes: "Oud · Saffron · Sandalwood",
    image: image("photo-1592945403244-b3fbafd7f539"),
    description:
      "An elegant blend of rich oud, golden saffron and smooth sandalwood."
  },
  {
    id: 4,
    name: "Midnight Bloom",
    category: "Women",
    price: 98,
    size: "75ml",
    rating: 4.7,
    badge: "NEW",
    notes: "Jasmine · Pear · White Musk",
    image: image("photo-1595425970377-c9703cf48b6d"),
    description:
      "A modern fragrance inspired by delicate flowers and fresh evening air."
  },
  {
    id: 5,
    name: "Royal Amber",
    category: "Men",
    price: 135,
    size: "100ml",
    rating: 4.9,
    badge: "LIMITED",
    notes: "Amber · Cedar · Tonka",
    image: image("photo-1590736969955-71cc94901144"),
    description:
      "A warm and refined fragrance with rich amber and cedarwood."
  },
  {
    id: 6,
    name: "Silk Musk",
    category: "Unisex",
    price: 105,
    size: "80ml",
    rating: 4.8,
    badge: "EVERYDAY",
    notes: "White Musk · Iris · Vanilla",
    image: image("photo-1615634260167-c8cdede054de"),
    description:
      "A clean, soft and contemporary scent designed for everyday elegance."
  },
  {
    id: 7,
    name: "Santal Veil",
    category: "Unisex",
    price: 130,
    size: "90ml",
    rating: 4.9,
    badge: "NEW",
    notes: "Sandalwood · Fig · Cashmere",
    image: image("photo-1523293182086-7651a899d37f"),
    description:
      "Creamy sandalwood and green fig wrapped in a soft cashmere accord."
  },
  {
    id: 8,
    name: "Iris Nocturne",
    category: "Women",
    price: 118,
    size: "80ml",
    rating: 4.8,
    badge: "EDITOR'S PICK",
    notes: "Iris · Plum · Suede",
    image: image("photo-1588405748880-12d1d2a59d75"),
    description:
      "A cool, powdery iris scent with a rich plum heart and suede finish."
  },
  {
    id: 9,
    name: "Cedar Atelier",
    category: "Men",
    price: 128,
    size: "100ml",
    rating: 4.7,
    notes: "Cedar · Vetiver · Bergamot",
    image: image("photo-1547887538-e3a2f32cb1cc"),
    description:
      "Crisp bergamot and dry cedar create a clean, quietly confident trail."
  },
  {
    id: 10,
    name: "Rose de Nuit",
    category: "Women",
    price: 115,
    size: "75ml",
    rating: 4.9,
    badge: "NEW",
    notes: "Damask Rose · Lychee · Amber",
    image: image("photo-1557170334-a9632e77c6e4"),
    description:
      "Luminous rose petals deepen into amber for a romantic evening signature."
  },
  {
    id: 11,
    name: "Cuir Moderne",
    category: "Unisex",
    price: 152,
    size: "100ml",
    rating: 5.0,
    badge: "RARE BLEND",
    notes: "Leather · Incense · Vanilla",
    image: image("photo-1535632066927-ab7c9ab60908"),
    description:
      "Polished leather and incense softened by a whisper of warm vanilla."
  },
  {
    id: 12,
    name: "Lumière Blanc",
    category: "Women",
    price: 102,
    size: "75ml",
    rating: 4.6,
    notes: "Neroli · Pear · White Woods",
    image: image("photo-1512207846876-bb54ef5059e2"),
    description:
      "A bright, airy composition with luminous neroli and soft white woods."
  }
];

export default products;
