import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
return ( <footer className="footer"> <div className="footer-main"> <div className="footer-brand"> <Link to="/" className="brand">
<span className="brand-wordmark">VEL<span>OURA</span></span> <small>EAU DE PARFUM</small> </Link>

      <p>Fragrance is personal. Make yours unforgettable.</p>
    </div>

    <div className="footer-column">
      <h3>EXPLORE</h3>
      <Link to="/shop">Shop All</Link>
      <Link to="/collections">Collections</Link>
      <Link to="/about">Our Story</Link>
    </div>

    <div className="footer-column">
      <h3>ASSISTANCE</h3>
      <Link to="/contact">Contact Us</Link>
      <Link to="/cart">Shopping Bag</Link>
      <Link to="/wishlist">Wishlist</Link>
    </div>

    <div className="footer-column">
      <h3>FOLLOW OUR WORLD</h3>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <span style={{ fontSize: "20px" }}>◎</span>
        Instagram
        <ArrowUpRight size={15} />
      </a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 VELOURA. Demo storefront.</p>
    <p>CRAFTED FOR THE EXTRAORDINARY.</p>
  </div>
</footer>

);
}
