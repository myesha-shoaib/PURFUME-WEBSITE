import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <main className="page-container">
      <section className="about-hero">
        <p className="eyebrow">THE STORY BEHIND THE SCENT</p>

        <h1>
          Luxury isn't seen.
          <br />
          <span>It's remembered.</span>
        </h1>

        <p>
          VELOURA celebrates the art of fragrance through
          thoughtful design, captivating scent profiles and
          the timeless beauty of personal expression.
        </p>

        <Link to="/shop" className="btn btn-primary">
          Explore Our Fragrances <ArrowRight size={17} />
        </Link>
      </section>

      <section className="about-values">
        <article>
          <span>01</span>
          <h2>Craftsmanship</h2>
          <p>Every fragrance tells a story through its carefully considered notes.</p>
        </article>

        <article>
          <span>02</span>
          <h2>Individuality</h2>
          <p>Discover a scent that feels personal, expressive and entirely yours.</p>
        </article>

        <article>
          <span>03</span>
          <h2>Timeless Design</h2>
          <p>From the fragrance to the bottle, every detail matters.</p>
        </article>
      </section>
    </main>
  );
}   