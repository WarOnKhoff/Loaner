import React, { useContext } from "react";
import facebookLogo from "../assets/FacebookW.png";
import instagramLogo from "../assets/Instagram.png";
import linkedinLogo from "../assets/LinkedINW.png";
import { ThemeContext } from "../context/ThemeContext";
import clsx from "clsx";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const footer = clsx({
    footer: true,
    footer_lightTheme: theme === "light"
  });
  return (
    <footer className={footer}>
      <p>Loaner © {new Date().getFullYear()}. All rights reserved.</p>
      <span className="space" />
      <div className="footer_imgGroup">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebookLogo}
            className="footer_img"
            alt="Social network logo"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramLogo}
            className="footer_img"
            alt="Social network logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinLogo}
            className="footer_img"
            alt="Social network logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
