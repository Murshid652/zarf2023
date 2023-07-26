import React from "react";
import Faq from "../Faq/Faq";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>

            <Faq />
          {/* <div className={classes.persons}>

            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Shamsudheen</h3>
              <div className={classes.details}>
                <p>
                  Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+917012824370">
                  +91 7012 824 370
                </a>
              </div>
            </div>

            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Sithara Beegam</h3>
              <div className={classes.details}>
                <p>
                  Vice Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+918592002134">
                  +91 8592 002 134
                </a>
              </div>
            </div>
          </div> */}

          <div className={classes.mapBox}>
            <iframe
              className={classes.map}
              title="Kmct Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.5822502153655!2d78.07415941487614!3d27.914790282706484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4fcb0ea6ddb%3A0x765b62941f223b8e!2sZakir%20Husain%20College%20of%20Engineering%20and%20Technology%2C%20AMU!5e0!3m2!1sen!2sin!4v1676224866555!5m2!1sen!2sin"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
