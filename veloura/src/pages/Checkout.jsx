import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Checkout() {
  const { cart, cartTotal } = useStore();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    // Demo only: no order is sent to a server.
    setSubmitted(true);
  }

  if (cart.length === 0) {
    return (
      <main className="page-container empty-state">
        <h1>Your shopping bag is empty.</h1>
        <Link to="/shop" className="btn btn-primary">
          Explore Shop
        </Link>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="page-container empty-state">
        <p className="eyebrow">CHECKOUT DEMO</p>
        <h1>Thank you!</h1>
        <p>
          Your form has been completed, but no real order or payment
          has been processed.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <p className="eyebrow">ALMOST YOURS</p>
        <h1>Secure <span>Checkout</span></h1>
        <p>Enter your details to continue.</p>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Contact Information</h2>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <h2>Delivery Address</h2>

          <label>
            Full Name
            <input name="name" required />
          </label>

          <label>
            Phone Number
            <input type="tel" name="phone" required />
          </label>

          <label>
            Address
            <input name="address" required />
          </label>

          <label>
            City
            <input name="city" required />
          </label>

          <label>
            Payment Method
            <select name="payment" required defaultValue="">
              <option value="" disabled>Select payment method</option>
              <option value="cod">Cash on Delivery</option>
              <option value="online">Online Payment (demo only)</option>
            </select>
          </label>

          <button className="btn btn-primary checkout-btn" type="submit">
            Place Demo Order
          </button>

          <p className="form-notice">
            This is a frontend demonstration. Real orders and payments
            require a secure backend and payment integration.
          </p>
        </form>

        <aside className="cart-summary">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <div className="checkout-product" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <strong>{item.name}</strong>
                <p>Quantity: {item.quantity}</p>
              </div>

              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}