import React from "react";
import sunflower_oil from "../images/sunflower_oil.jpg";
import "../style.css";

function Products() {
  return (
    <div className="main">
      <h1>Products</h1>
      <p>
        Here is the list of oils. If you are interested in buying some, fill in
        the form and we will get back to you.
      </p>
      <div className="products">
        <div className="product">
          <img src={sunflower_oil} alt="sunflower_oil"></img>
          <p className="product_name">Sunflower oil</p>
          <p className="product_price">Price: 500Kč</p>
        </div>
        <div className="product">
          <img src={sunflower_oil} alt="sunflower_oil"></img>
          <p className="product_name">Sunflower oil</p>
          <p className="product_price">Price: 500Kč</p>
        </div>
        <div className="product">
          <img src={sunflower_oil} alt="sunflower_oil"></img>
          <p className="product_name">Sunflower oil</p>
          <p className="product_price">Price: 500Kč</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
