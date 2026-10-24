import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/Products";

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.notes.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, sort, search]);

  return (
    <main className="page-container">
      <div className="page-heading">
        <p className="eyebrow">THE FRAGRANCE EDIT</p>
        <h1>Discover Your <span>Signature.</span></h1>
        <p>Explore our collection of captivating fragrances.</p>
      </div>

      <div className="shop-toolbar">
        <div className="filter-buttons">
          {["All", "Men", "Women", "Unisex"].map((item) => (
            <button
              key={item}
              className={category === item ? "filter-active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="shop-controls">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search fragrances..."
            aria-label="Search fragrances"
          />

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <p className="results-count">
        {filteredProducts.length} fragrances found
      </p>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-state">
          <h2>No fragrances found</h2>
          <p>Try another search or category.</p>
        </div>
      )}
    </main>
  );
}
