import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import stawilogo from "..//images/StawiBrood_Logo-removebg-preview.png";

function Contact() {
  return (
    <div className="footer">
      <div className="social-media-icons">
        <h3>Connect with us:</h3>
        <a href="https://www.facebook.com/people/Stawi-Brood/100087050424447/" className="icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a href="https://twitter.com/StawiBrood" className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/stawi-brood-ba6389255/" className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:stawibrood@gmail.com">
          {" "}
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
      </div>

      <div className="footer-navbar">
        <h3>Who we are</h3>
        <ul>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#product">Our product</a>
          </li>
          <li>
            <a href="Team-stawi">Our Team</a>
          </li>
          <li>
            <a className="active" href="contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div id="contact">
        <a href="#About">
          {" "}
          <img src={stawilogo} alt="StawiBrood Logo" />
        </a>
        <p>
          StawiBrood is tech-driven IoT solution that caters for small scale poultry <br />
          farmers in Kenya with a conducive enviroment to enable them <br /> increase chicken production{" "}
        </p>
        <br />
        <p>
          © 2022 StawiBrood. All rights reserved. We respect your privacy. <br /> By using our site, you agree to our terms.
        </p>
      </div>
    </div>
  );
}

export default Contact;
