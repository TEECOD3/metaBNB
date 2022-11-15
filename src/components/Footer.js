import { Facebook, Instagram, Twitter } from "../assets/icon";
import metaLogoLight from "../assets/metalight.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <img src={metaLogoLight} alt="footer logo" />
          <div className="social">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
        <div className="list">
          <div className="community">
            <ul>
              <h3>Community</h3>
              <li>NTF</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className="places">
            <ul>
              <h3>Places</h3>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn More</li>
            </ul>
          </div>
          <div className="about">
            <ul>
              <h3>About us</h3>
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <p> &#169; 2022 Metabnb</p>
      </div>
    </div>
  );
};

export default Footer;
