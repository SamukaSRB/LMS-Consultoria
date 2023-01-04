/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">LM.Consultoria</span>
        <div className="links">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/leidiane-mota-silva-94684817b/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-whatsapp" ></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By LM-Consultoria
        </p>
      </div>
    </footer>
  );
}

export default Footer;