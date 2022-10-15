/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Olá, Seja bem vindo.</h6>
            <h3>Sua consultoria de RH </h3>
            <p>LMS-Consultoria RH é uma empresa especializada em soluções de gestão de RH.</p>
            <p>Atua nos segmentos de Recrutamento e Seleção, Gestão de Pessoal,Desenvolvimento de Talentos, Orientação e Treinamento, Saúde e Segurança no Trabalho.</p>
            <a className="btn" href="#vagas">
              Sobre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;