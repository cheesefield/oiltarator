import React from "react";

function Contact() {
  return (
    <div className="main">
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
