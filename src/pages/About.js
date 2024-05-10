import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="main">
      <Helmet>
        <title>OilTarator • About</title>
        <meta name="title" content="OilTarator • About" />
        <meta name="description" content="This is OilTarator about page." />
        <meta property="og:url" content="https://oiltarator.com/about" />
        <meta property="og:title" content="OilTarator • About" />
        <meta
          property="og:description"
          content="This is OilTarator about page."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />

        <meta property="twitter:url" content="https://oiltarator.com/about" />
        <meta property="twitter:title" content="OilTarator • About" />
        <meta
          property="twitter:description"
          content="This is OilTarator about page."
        />
        <meta
          property="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
      </Helmet>
      <h1>About us</h1>
      <p>
        We are a trading company operating extensively in the technical
        vegetable oil trade industry.
      </p>
      <p>
        Our product database includes oils in a wide range of species, from pure
        vegetable oils:
      </p>
      <ul>
        <li>soybean</li>
        <li>sunflower</li>
        <li>rapeseed</li>
      </ul>
      <p>
        to oils with increased acidity, and mixtures of vegetable oils prepared
        especially at the customer's request, under specific parameters.
      </p>
      <p>
        Oiltarator s.r.o. has modern technical facilities with a storage
        capacity of up to 1,300 tons. Our base is located in Ostrava, approx. 20
        km to the Polish border, close to the motorway exit, which makes
        organizing transport much easier. As a company, we also provide goods
        storage and reloading services.
      </p>
      <p>
        We invite you to cooperate. We will be happy to answer all your
        questions.
      </p>
      <div className="center">
        <h2>Where you can find us?</h2>
        <iframe
          title="maps"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lihovarsk%C3%A1%20642/16,%20718%2000%20Ostrava%20-%20Kun%C4%8Di%C4%8Dky,%20%C4%8Cesko+(OilTarator%20s.r.o)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>
    </div>
  );
}

export default About;
