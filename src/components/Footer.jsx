import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img src={require("../assets/boostim.png")} alt="Boostim Logo" />
            <h2>boostim</h2>
          </div>
          <p>
            We offer Link comprehensive suite of digital marketing services that cover all aspects of
            our online presence. From SEO and social media marketing to content creation and PPC
            advertising, they have the expertise and resources to handle our diverse marketing needs.
          </p>
          <div className="social-icons">
            <span><FontAwesomeIcon className="s-icons" icon={faFacebook} /></span>
            <span><FontAwesomeIcon className="s-icons" icon={faTwitter} /></span>
            <span><FontAwesomeIcon className="s-icons" icon={faLinkedin} /></span>
            <span><FontAwesomeIcon className="s-icons" icon={faInstagram} /></span>
          </div>
        </div>

        <div className="footer-middle">
          <h3>Navigation</h3>
          <ul>
            <li><span>Service</span></li>
            <li><span>Agency</span></li>
            <li><span>Case Study</span></li>
            <li><span>Resource</span></li>
            <li><span>Contact</span></li>
          </ul>
        </div>

        <div className="footer-middle">
          <h3>Licence</h3>
          <ul>
            <li><span>Privacy Policy</span></li>
            <li><span>Copyright</span></li>
            <li><span>Email Address</span></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>
          <p><FontAwesomeIcon icon={faPhone} /> (406) 555-0120</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> Hey@boostim.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 2972 Westheimer Rd, Santa Ana, Illinois 85486</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
