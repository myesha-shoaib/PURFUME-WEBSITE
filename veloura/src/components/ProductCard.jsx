import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, wishlist, toggleWishlist } = useStore();

  const isFavorite = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </Link>

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