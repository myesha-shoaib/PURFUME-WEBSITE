import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  Heart
} from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlist } = useStore();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-wordmark">
          VEL<span>OURA</span>
        </span>
        <small>EAU DE PARFUM</small>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/shop" onClick={closeMenu}>Shop</NavLink>
        <NavLink to="/collections" onClick={closeMenu}>
          Collections
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>Our Story</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </nav>

      <div className="nav-actions">
        <Link
          to="/wishlist"
          className="icon-link"
          aria-label={`Wishlist, ${wishlist.length} items`}
        >
          <Heart size={19} />
          <span>{wishlist.length}</span>
        </Link>

        <Link
          to="/cart"
          className="icon-link"
          aria-label={`Cart, ${cartCount} items`}
        >
          <ShoppingBag size={19} />
          <span>{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}
