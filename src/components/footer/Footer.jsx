import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__title">Kratika Singh</div>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">Education</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

        </ul>

        <span className="footer__copy">All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
