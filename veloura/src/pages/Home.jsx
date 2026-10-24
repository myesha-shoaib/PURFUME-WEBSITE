import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import Perfume3D from "../components/Perfume3D";
import ProductCard from "../components/ProductCard";
import products from "../data/Products";

const heroSlides = [
  {
    id: "signature",
    eyebrow: "THE ART OF FINE FRAGRANCE",
    title: "A SCENT THAT",
    accent: "DEFINES YOU.",
    description:
      "Discover extraordinary fragrances crafted for those who leave an unforgettable impression.",
    label: "Luxury in every drop",
    sublabel: "01 / SIGNATURE",
    tone: "wine"
  },
  {
    id: "golden",
    eyebrow: "THE GOLDEN HOUR EDIT",
    title: "WEAR YOUR",
    accent: "RADIANCE.",
    description:
      "A warm, luminous trail of saffron, amber and polished woods for evenings worth remembering.",
    label: "A glow that lingers",
    sublabel: "02 / GOLDEN OUD",
    tone: "amber"
  },
  {
    id: "velvet",
    eyebrow: "THE NEW FEMININE",
    title: "SOFTNESS",
    accent: "WITH EDGE.",
    description:
      "Velvety petals meet modern musk in a signature made for quiet confidence and close encounters.",
    label: "Petals after dark",
    sublabel: "03 / VELVET ROSE",
    tone: "rose"
  }
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const featuredRef = useRef(null);
  const activeSlide = heroSlides[heroIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 6800);

    return () => window.clearInterval(timer);
  }, []);

  function showHeroSlide(index) {
    setHeroIndex((index + heroSlides.length) % heroSlides.length);
  }

  function scrollFeatured(direction) {
    featuredRef.current?.scrollBy({
      left: direction * featuredRef.current.clientWidth * 0.82,
      behavior: "smooth"
    });
  }

  return (
    <main>
      <section className="hero">
        <div className="hero-content hero-copy" key={activeSlide.id}>
          <div className="eyebrow">
            <Sparkles size={15} />
            {activeSlide.eyebrow}
          </div>

          <h1>
            {activeSlide.title}
            <br />
            <span>{activeSlide.accent}</span>
          </h1>

          <p className="hero-description">{activeSlide.description}</p>

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
              <strong>12+</strong>
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

          <Perfume3D tone={activeSlide.tone} />

          <div className="floating-label label-top" key={`${activeSlide.id}-top`}>
            <span>{activeSlide.sublabel}</span>
            <strong>{activeSlide.label}</strong>
          </div>

          <div className="floating-label label-bottom">
            <span>EAU DE PARFUM</span>
            <strong>Made to be remembered.</strong>
          </div>

          <div className="hero-slider-controls" aria-label="Hero fragrance slider">
            <button
              type="button"
              onClick={() => showHeroSlide(heroIndex - 1)}
              aria-label="Previous fragrance story"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="hero-slider-dots">
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.id}
                  className={index === heroIndex ? "active" : ""}
                  onClick={() => showHeroSlide(index)}
                  aria-label={`Show ${slide.eyebrow.toLowerCase()}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => showHeroSlide(heroIndex + 1)}
              aria-label="Next fragrance story"
            >
              <ChevronRight size={17} />
            </button>
          </div>
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

          <div className="featured-heading-actions">
            <div className="slider-arrows" aria-label="Featured products slider">
              <button
                type="button"
                onClick={() => scrollFeatured(-1)}
                aria-label="Previous featured products"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollFeatured(1)}
                aria-label="Next featured products"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            <Link to="/shop" className="text-link">
              View All Products <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="featured-viewport" ref={featuredRef}>
          <div className="featured-track">
            {products.map((product) => (
              <div className="featured-slide" key={product.id}>
                <ProductCard product={product} priority={product.id <= 4} />
              </div>
            ))}
          </div>
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
            Explore rich woods, sensual florals and captivating notes that make
            every moment extraordinary.
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
          <p>Discover new arrivals, fragrance stories and exclusive offers.</p>

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
