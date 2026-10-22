import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function Cart() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart
  } = useStore();

  return (
    <main className="page-container">
      <div className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping <span>Bag</span></h1>
        <p>Your chosen fragrances, ready when you are.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <h2>Your bag is empty</h2>
          <p>Discover a fragrance that feels like you.</p>
          <Link to="/shop" className="btn btn-primary">
            Explore Shop
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <p className="product-category">{item.category}</p>
                  <h3>{item.name}</h3>
                  <p>{item.size}</p>
                  <strong>${item.price}</strong>

                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={18} />
                </button>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-line">
              <span>Subtotal</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>

            <div className="summary-line">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>

            <Link to="/checkout" className="btn btn-primary checkout-btn">
              Continue to Checkout
            </Link>

            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}