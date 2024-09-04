import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Banner from "../components/Banner.js";

// import { FaOilCan, FaGlobe, FaCalendarAlt } from "react-icons/fa";
// images
import images from "../components/ImagesData.js";
import hlavni_brana from "../images/hlavni_brana.jpeg";
import sunflower from "../images/sunflower_oil_desk.jpeg";
import soybean from "../images/soybean_oil_desk.jpeg";
import rapeseed from "../images/rapeseed_oil_desk.jpeg";

import "../i18.js";
import { useTranslation } from "react-i18next";

function Homepage() {
  const { t } = useTranslation();

  const { line1, line2, line3, line4, line5 } = t("description");
  // const {
  //   numbervalue1,
  //   numberlabel1,
  //   numbervalue2,
  //   numberlabel2,
  //   numbervalue3,
  //   numberlabel3,
  // } = t("funnumbers");

  const showroomImages = images.slice(7, 11);

  return (
    <div className="main">
      <Helmet>
        <title>OilTarator • Oil trading company</title>
        <meta name="title" content="OilTarator • Oil trading company" />
        <meta
          name="description"
          content="Trading company operating extensively in the technical vegetable oil trade industry in Ostrava."
        />
        <meta property="og:url" content="https://oiltarator.com/" />
        <meta property="og:title" content="OilTarator • Oil trading company" />
        <meta
          property="og:description"
          content="Trading company operating extensively in the technical vegetable oil trade industry in Ostrava."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />

        <meta name="twitter:url" content="https://oiltarator.com/" />
        <meta name="twitter:title" content="OilTarator • Oil trading company" />
        <meta
          name="twitter:description"
          content="Trading company operating extensively in the technical vegetable oil trade industry in Ostrava."
        />
        <meta
          name="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
        <link href="www.oiltarator.com" rel="canonical" />
      </Helmet>
      <section className="brana">
        <img src={hlavni_brana} alt="hlavni brana" height="325" width="720" />
        <div className="homepage">
          <h1>{t("homepage")}</h1>
          <h3>{line1}</h3>
          <Link to="/contact">
            <button>{t("contact1")}</button>
          </Link>
        </div>
      </section>
      <Banner />
      <section className="oil_section">
        <h2>{line2}</h2>
        <div className="oils">
          <div className="oil">
            <img
              src={soybean}
              height="350"
              width="350"
              loading="lazy"
              alt="hlavni brana"
            />
            <h3>{t("oil1")}</h3>
          </div>
          <div className="oil">
            <img
              src={sunflower}
              height="350"
              width="350"
              loading="lazy"
              alt="hlavni brana"
            />
            <h3>{t("oil2")}</h3>
          </div>
          <div className="oil">
            <img
              src={rapeseed}
              height="350"
              width="350"
              loading="lazy"
              alt="hlavni brana"
            />
            <h3>{t("oil3")}</h3>
          </div>
        </div>
        <h3 className="description">{line3}</h3>
      </section>
      {/* <section className="numbers_section">
        <div className="number_row">
          <FaOilCan className="icon" />
          <div className="number_value">{numbervalue1}</div>
          <div className="number_label">{numberlabel1}</div>
        </div>
        <div className="number_row">
          <FaGlobe className="icon" />
          <div className="number_value">{numbervalue2}</div>
          <div className="number_label">{numberlabel2}</div>
        </div>
        <div className="number_row">
          <FaCalendarAlt className="icon" />
          <div className="number_value">{numbervalue3}</div>
          <div className="number_label">{numberlabel3}</div>
        </div>
      </section> */}
      <section className="showroom">
        <h2>{t("showroom_heading")}</h2>
        <div className="showroom-images">
          {showroomImages.map((image) => (
            <div key={image.id} className="showroom-image">
              <img
                src={image.thumbnail}
                alt={image.alt}
                height="350"
                width="350"
              />
            </div>
          ))}
        </div>
        <Link to="/gallery" className="showroom-link">
          <p>{t("showroom")}</p>
        </Link>
      </section>
      <p className="company_description">{line4}</p>
      <div className="greeting_flex">
        <p className="greeting">{line5}</p>
      </div>
    </div>
  );
}

export default Homepage;
