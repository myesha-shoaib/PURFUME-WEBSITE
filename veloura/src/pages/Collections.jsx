import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "For Him",
    category: "Men",
    description: "Bold woods. Refined character.",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "For Her",
    category: "Women",
    description: "Floral elegance. Lasting impressions.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Beyond Labels",
    category: "Unisex",
    description: "Exceptional scents without boundaries.",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Collections() {
  return (
    <main className="page-container">
      <div className="page-heading">
        <p className="eyebrow">EXPLORE VELOURA</p>
        <h1>
          Our <span>Collections</span>
        </h1>
        <p>Find your fragrance, your way.</p>
      </div>

      <div className="collection-grid">
        {collections.map((collection) => (
          <article className="collection-card" key={collection.title}>
            <img src={collection.image} alt={collection.title} />

            <div className="collection-card-content">
              <p>{collection.category.toUpperCase()} COLLECTION</p>
              <h2>{collection.title}</h2>
              <span>{collection.description}</span>

              <Link
                to={`/shop?category=${collection.category}`}
                className="collection-link"
              >
                Explore Collection <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
