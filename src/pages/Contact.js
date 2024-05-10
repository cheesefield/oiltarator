import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div className="main">
      <Helmet>
        <title>OilTarator • Contact</title>
        <meta name="title" content="OilTarator • Contact" />
        <meta name="description" content="This is OilTarator contact page." />
        <meta property="og:url" content="https://oiltarator.com/contact" />
        <meta property="og:title" content="OilTarator • Contact" />
        <meta
          property="og:description"
          content="This is OilTarator contact page."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />

        <meta property="twitter:url" content="https://oiltarator.com/contact" />
        <meta property="twitter:title" content="OilTarator • contact" />
        <meta
          property="twitter:description"
          content="This is OilTarator contact page."
        />
        <meta
          property="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
      </Helmet>
      <form
        id="contact-form"
        method="POST"
        action="https://formspree.io/f/meqplbdo"
      >
        <h2 className="contact-h2">Contact us</h2>
        <div className="contact">
          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input type="text" name="firstName" required="required" />
                <span className="text">First name</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <input type="text" name="lastName" required="required" />
                <span className="text">Last name</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input type="text" name="email" required="required" />
                <span className="text">Email</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <input type="text" name="phoneNumber" required="required" />
                <span className="text">Phone number</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <textarea
                  required="required"
                  cols="30"
                  rows="10"
                  name="message"
                ></textarea>
                <span className="text">Write your message here...</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100 submit">
            <div className="col">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
