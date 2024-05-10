import React from "react";
import { Helmet } from "react-helmet";

function Homepage() {
  return (
    <div className="main">
      <Helmet>
        <title>OilTarator</title>
        <meta name="title" content="OilTarator" />
        <meta name="description" content="This is OilTarator homepage." />
        <meta property="og:url" content="https://oiltarator.com/" />
        <meta property="og:title" content="OilTarator" />
        <meta
          property="og:description"
          content="This is OilTarator homepage."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />

        <meta property="twitter:url" content="https://oiltarator.com/" />
        <meta property="twitter:title" content="OilTarator" />
        <meta
          property="twitter:description"
          content="This is OilTarator homepage."
        />
        <meta
          property="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
      </Helmet>
      <h1>Home</h1>
      <div className="homepage-center">
        <p>Website in the making</p>
        <p>Opening soon</p>
      </div>
    </div>
  );
}

export default Homepage;
