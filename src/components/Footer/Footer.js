import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {AiOutlineMail, AiOutlineLink, AiOutlineInstagram} from 'react-icons/ai';
import { HashLink } from "react-router-hash-link";
import Logo from "./zarf_logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.row}>
        <div className={classes.col}>
          <img className={classes.karma} src={Logo} alt="Karma logo" />
          <p className={classes.para}>
            Annual national level techno managerial cultural extravaganza of the Zakir Husain College of Engineering and Technology. ZARF enables brilliant minds to compete, discuss ideas, educate others about new technical breakthroughs, and be a part of the tech platform.
          </p>
        </div>

        <div className={classes.col}>
          <h3>Contact us</h3>
          <p>Zakir Husain Of College and Technology,</p>
          <p>Aligarh Muslim University</p>
          <p>Aligarh - 202002</p>
          <br/>
          <p className={classes.contactNo}>Syed Talha Usman - +91 6395873229</p>
          <p className={classes.contactNo}>(Student's Convener)</p>
          {/* <br/>
          <p className={classes.contactNo}>Yousuf Ali Khan - +91 9193089467</p>
          <p className={classes.contactNo}>(Literary Coordinator)</p>
          <br/>
          <p className={classes.contactNo}>Mohd Salman - +91 7310505898</p>
          <p className={classes.contactNo}>(Cultural Coordinator)</p>
          <br/>
          <p className={classes.contactNo}>Sayed Ali Farid - +91 8755615361</p>
          <p className={classes.contactNo}>(Technical Coordinator)</p>
          <br/>
          <p className={classes.contactNo}>Ahmad Mudassir - +91 9997361212</p>
          <p className={classes.contactNo}>(Public Relations Coordinator)</p> */}
          {/* <p className={classes.contactNo}>Sithara beegam - 8592 002 134</p> */}
        </div>
{/* 
        <div className={classes.col}>
          <h3>phone no.</h3>
          <p>lorejdg</p>
        </div> */}

        <div className={`${classes.col} ${classes.links}`}>
          <h3>Links</h3>
          <ul>
            <HashLink
              to="/#about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>About</li>
            </HashLink>

            <HashLink
              to="/#contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Contact us</li>
            </HashLink>

            <a
              href="https://docs.google.com/document/d/1keZJSVn3mEitQbphwmCf64jmPeYA-qePZ29VpG1NLyE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Privacy policy</li>
            </a>

            <a
              href="https://docs.google.com/document/d/1jwkFevHObIxAG499lza1iAclZKlsV4f75_XNa-sx94o/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Terms and condition</li>
            </a>

            {/* <a
              href="https://docs.google.com/document/d/1K0En27BTf6KJB2eHZmnr7BAMDWK8T83--8HJOu-GkA0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Refund & Cancellation Policy</li>
            </a> */}
            {/* <a
              href="https://docs.google.com/document/d/1DVGB-PePPd7XCNW4LAJ6qBShudKzBJtuaAaiC6Q1DWY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Shipping Policy</li>
            </a> */}
          </ul>
        </div>

        <div className={classes.col}>
          <h3>Follow us on</h3>
          <div className={classes.socialIcons}>
            <a
              href="https://www.instagram.com/zarf.amu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram className={classes.icons} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zarf2023@gmail.com&su=SUBJECT&body=BODY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail className={classes.icons} />
              {/* <FontAwesomeIcon className={classes.icons} icon={faYoutube} /> */}
            </a>
            <a
              href="https://linktr.ee/zarf2k23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLink className={classes.icons} />
            </a>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <p className={classes.copyright}>
        ZARF'23 | Copyright &#169; All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
