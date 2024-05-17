import React from "react";
import { Helmet } from "react-helmet";
import sunflower_oil from "../images/sunflower_oil.jpg";

function Products() {
  return (
    <div className="main">
      <Helmet>
        <title>OilTarator • Products</title>
        <meta name="title" content="OilTarator • Products" />
        <meta name="description" content="This is OilTarator product page." />
        <meta property="og:url" content="https://oiltarator.com/products" />
        <meta property="og:title" content="OilTarator • Products" />
        <meta
          property="og:description"
          content="This is OilTarator products page."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />

        <meta
          property="twitter:url"
          content="https://oiltarator.com/products"
        />
        <meta property="twitter:title" content="OilTarator • Products" />
        <meta
          property="twitter:description"
          content="This is OilTarator products page."
        />
        <meta
          property="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
      </Helmet>
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
