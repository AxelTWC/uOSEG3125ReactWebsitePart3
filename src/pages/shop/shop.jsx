import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {

  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const filterProducts = (criteria) => {
    // Filter products based on selected criteria
    const filtered = PRODUCTS.filter((product) => product.category === criteria);
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setFilteredProducts(PRODUCTS);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Test Shop</h1>
      </div>
      <div className="filters">
        <h4>Filters   ====</h4>
        <button onClick={resetFilters}>Reset Filters     ======</button>
        <ul>
          <li>
            <button onClick={() => filterProducts("category1")}>Category 1</button>
          </li>
          <li>
            <button onClick={() => filterProducts("category2")}>Category 2</button>
          </li>
          {/* Add more filter options as needed */}
        </ul>
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <Product data={product} />
        ))}
      </div>

     
    </div>
  );
};
