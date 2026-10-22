import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";

export default function Wishlist() {
  const { wishlist } = useStore();

  return (
    <main className="page-container">
      <div className="page-heading">
        <p className="eyebrow">YOUR PERSONAL COLLECTION</p>
        <h1>Your <span>Wishlist</span></h1>
        <p>Your favourite fragrances, all in one place.</p>
      </div>

      {wishlist.length > 0 ? (
        <div className="product-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>Your wishlist is waiting</h2>
          <p>Save the fragrances you love and find them here.</p>
          <Link to="/shop" className="btn btn-primary">
            Discover Fragrances
          </Link>
        </div>
      )}
    </main>
  );
}