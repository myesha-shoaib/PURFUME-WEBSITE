import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import Perfume3D from "../components/Perfume3D";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            THE ART OF FINE FRAGRANCE
          </div>

          <h1>
            A SCENT THAT
            <br />
            <span>DEFINES YOU.</span>
          </h1>

          <p className="hero-description">
            Discover extraordinary fragrances crafted for those
            who leave an unforgettable impression.
          </p>

          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary">
              Explore Collection <ArrowRight size={17} />
            </Link>

            <Link to="/about" className="btn btn-outline">
              Discover Our Story
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>24+</strong>
              <span>Signature Scents</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Premium Quality</span>
            </div>

            <div>
              <strong>4.9/5</strong>
              <span>Customer Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <Perfume3D />

          <div className="floating-label label-top">
            <span>01 / SIGNATURE</span>
            <strong>Luxury in every drop</strong>
          </div>

          <div className="floating-label label-bottom">
            <span>EAU DE PARFUM</span>
            <strong>Made to be remembered.</strong>
          </div>
        </div>

        <div className="hero-scroll">
          <ArrowDownRight size={16} />
          SCROLL TO DISCOVER
        </div>
      </section>

      <section className="benefits">
        <div>✦ &nbsp; PREMIUM INGREDIENTS</div>
        <div>✦ &nbsp; LONG-LASTING FRAGRANCE</div>
        <div>✦ &nbsp; ELEGANTLY CRAFTED</div>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CURATED FOR YOU</p>
            <h2>Signature <span>Scents</span></h2>
            <p>Find the fragrance that tells your story.</p>
          </div>

          <Link to="/shop" className="text-link">
            View All Products <ArrowRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="collection-banner">
        <div className="collection-copy">
          <p className="eyebrow">THE EXCLUSIVE COLLECTION</p>
          <h2>
            More than a fragrance.
            <br />
            <span>A statement.</span>
          </h2>
          <p>
            Explore rich woods, sensual florals and captivating
            notes that make every moment extraordinary.
          </p>
          <Link to="/collections" className="btn btn-primary">
            Explore Collections <ArrowRight size={17} />
          </Link>
        </div>

        <div className="collection-art">
          <div className="collection-ring" />
          <div className="collection-monogram">V.</div>
        </div>
      </section>

      <section className="section">
        <div className="newsletter">
          <p className="eyebrow">THE VELOURA LETTER</p>
          <h2>A little luxury, <span>in your inbox.</span></h2>
          <p>
            Discover new arrivals, fragrance stories and exclusive offers.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you for joining the VELOURA newsletter!");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}