import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react";
import products from "../data/Products";
import { useStore } from "../context/StoreContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const { addToCart, wishlist, toggleWishlist } = useStore();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="page-container empty-state">
        <h1>Fragrance not found</h1>
        <Link to="/shop" className="btn btn-primary">
          Return to Shop
        </Link>
      </main>
    );
  }

  const isFavorite = wishlist.some((item) => item.id === product.id);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  }

  return (
    <main className="page-container">
      <Link to="/shop" className="back-link">
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="product-detail">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <p className="eyebrow">{product.category} COLLECTION</p>

          <h1>{product.name}</h1>

          <div className="detail-rating">
            <Star size={16} fill="currentColor" />
            {product.rating} <span>Customer rating</span>
          </div>

          <p className="detail-price">${product.price}</p>

          <p className="detail-description">
            {product.description}
          </p>

          <div className="detail-notes">
            <span>FRAGRANCE NOTES</span>
            <p>{product.notes}</p>
          </div>

          <div className="detail-size">
            <span>SIZE</span>
            <button className="size-option">{product.size}</button>
          </div>

          <div className="detail-actions">
            <div className="quantity-control">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              className="btn btn-primary add-detail-btn"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={17} /> Add to Bag
            </button>

            <button
              className={`detail-wishlist ${isFavorite ? "active" : ""}`}
              onClick={() => toggleWishlist(product)}
              aria-label="Toggle wishlist"
            >
              <Heart fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="detail-perks">
            <p>✦ Premium fragrance collection</p>
            <p>✦ Carefully packaged for delivery</p>
            <p>✦ Customer support available</p>
          </div>
        </div>
      </div>
    </main>
  );
}
