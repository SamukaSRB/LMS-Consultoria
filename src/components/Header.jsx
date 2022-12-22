import React from "react";

import { useState, useEffect } from "react";
function Header() {
  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (
    <header className={`${stickyClass}`}>
      <div className="header-inner">   
      <div className="header-img">
            <img src="/banner.png" alt="" />
          </div> 
        <span className="logo"></span>     
            
         
        <div className="links">
          <a className="link" href="#">
            Home
          </a>         
          <a className="link" href="#servicos">
            Serviços
          </a> 
          <a className="link" href="#dicas">
            Dicas
          </a>         
          <a className="link" href="#vagas">
           Vagas
          </a>
          <a className="link" href="#sobre">
           Sobre
          </a>
        </div>
        <span className="menu" onClick={() => setActive(!active)}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      <div className={`mobile-links ${active ? "active" : ""}`}>
        <a className="link" onClick={() => setActive(!active)} href="#banner">
          Home
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#services">
          Sevices
        </a>
        <a
          className="link"
          onClick={() => setActive(!active)}
          href="#experiences"
        >
          Experience
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#vagas">
          Vagas
        </a>
      </div>
    </header>
  );
}

export default Header;