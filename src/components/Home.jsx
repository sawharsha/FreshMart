import React from "react";

import { useSelector }
from "react-redux";

import ProductCard
from "./ProductCard";

function Home() {

  const products = useSelector(
    (state) => state.products
  );

  return (

    <div className="product-list">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>

  );

}

export default Home;