/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">LM.Consultoria</span>
        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100089032914114">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/91718519/admin/">
            <i className="fab fa-linkedin"></i>
          </a>
           <a href="https://www.instagram.com/lmconsultoriar/">
            <i className="fa-brands fa-instagram" ></i>
          </a>
          <a href="https://web.whatsapp.com/">
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