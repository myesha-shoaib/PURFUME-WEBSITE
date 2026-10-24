import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useStore } from "../context/StoreContext";

const fallbackTones = [
  ["#5b1d31", "#b44d63", "#d8b879"],
  ["#7b3045", "#d88991", "#ead7bd"],
  ["#8b5128", "#d49a50", "#f0d394"],
  ["#3d3434", "#8b7470", "#d7bf8e"],
  ["#6a3826", "#b97845", "#e0bd7f"],
  ["#5d5362", "#a58eaa", "#ddc4a0"]
];

export default function ProductCard({ product, priority = false }) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const [imageReady, setImageReady] = useState(false);

  const isFavorite = wishlist.some(
    (item) => item.id === product.id
  );
  const [bodyColor, glowColor, capColor] =
    fallbackTones[(product.id - 1) % fallbackTones.length];

  const fallbackStyle = {
    "--fallback-body": bodyColor,
    "--fallback-glow": glowColor,
    "--fallback-cap": capColor
  };

  return (
    <article className="product-card" style={fallbackStyle}>
      <div className={`product-image-wrap ${imageReady ? "image-ready" : ""}`}>
        <Link to={`/product/${product.id}`}>
          <div className="product-image-fallback" aria-hidden="true">
            <span className="fallback-aura" />
            <span className="fallback-bottle">
              <span className="fallback-cap" />
              <span className="fallback-label">
                <small>VELOURA</small>
                <strong>{product.name}</strong>
                <i>EAU DE PARFUM</i>
              </span>
              <span className="fallback-shine" />
            </span>
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading={priority ? "eager" : "lazy"}
            onLoad={() => setImageReady(true)}
            onError={(event) => {
              setImageReady(false);
              event.currentTarget.style.display = "none";
            }}
          />
        </Link>

        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label={
            isFavorite ? "Remove from wishlist" : "Add to wishlist"
          }
        >
          <Heart size={19} fill={isFavorite ? "currentColor" : "none"} />
        </button>

        <button
          className="quick-add"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag size={16} />
          Add to Bag
        </button>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <p className="product-notes">{product.notes}</p>

        <div className="product-bottom">
          <span className="product-price">${product.price}</span>

          <span className="product-rating">
            <Star size={14} fill="currentColor" />
            {product.rating}
          </span>
        </div>
      </div>
    </article>
  );
}
