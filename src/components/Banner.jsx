/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="sobre">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/banner.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Olá, Seja bem vindo.</h6>
            <h3>Sua consultoria de RH </h3>
            <p>"Olá, somos do grupo LM Consultoria de Recursos Humanos. Como consultoria especializada em recursos humanos, nosso objetivo é ajudar as empresas a gerenciar suas equipes de trabalho de maneira eficaz e eficiente. Oferecemos uma variedade de serviços, incluindo recrutamento e seleção, gestão de desempenho, treinamento e desenvolvimento, e soluções de benefícios. Acreditamos que um ambiente de trabalho saudável e positivo é fundamental para o sucesso de qualquer negócio, e trabalhamos diligentemente para ajudar as empresas a criar esse tipo de ambiente. Obrigado por considerar o LM Consultoria de Recursos Humanos para suas necessidades de gerenciamento de equipe.".</p>
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