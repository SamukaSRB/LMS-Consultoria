/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Vagas() {
  const [vagas] = useState([
    {
      title: "Cargo: Assessor de Vendas",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Empresa pioneira no segmento de Atacarejo de Materiais de Construção do Brasil, busca Assessor de Vendas.",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Nível: Superior Cursando | Curso: Química, Engenharia elétrica, Eletrônica.Obs. Superior cursando ou curso técnico como Senai, os profissional que tiveram na graduação não é necessário possui experiência prévia em vendas. Categoria B*",
      subtitle3:"Tipo de Contratação:",//Não mexer
      tipo:   "Existem dois turnos (Manhã 07h às 14h e tarde 14h às 21h)Trabalho (6x1) com um fim de semana inteiro por mês. LOCALIZAÇÃO:A loja fica na região da Mooca, próximo a estação Mooca de trem, de fácil acesso para quem está próximo a CPTM e estação Barra funda da linha vermelha de metrô.Tipo de contratação sera regido pela CLT",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de Mídias Sociais Pleno",
      subtitle: "Descrição:",//Não mexer
      desc:  "Empresa do segmento imobiliário com foco em desenvolvimento de empreendimentos de médio e alto padrão busca por uma Analista de Mídias Sociais.",
      subtitle2:"Requisitos:",//Não mexer
      req:   "- Domínio das ferramentas para postagem;- Pessoa integrada nas novidades e trends de sucessos atuais, constantemente atualizada nas notícias.- Ótima redação e criatividade para texto.- Conhecimento em Meta Ads e Google Ads;- Gestão de contratos.",
      subtitle3:"Tipo de Contratação:",//Não mexer
      tipo:   "O trabalho é 100% presencial na zona leste de São Paulo.Salário: A combinar.A contratação e no modelo CLT.",
      gLink: "lmsconsultoriastz@gmail.com",
      lLink: "",
    },   
    
  ]);
  return (
    <section className="vagas" id="vagas">
      <div className="container"> 
      <h1>Vagas:</h1>       
        <div className="vagas-wrapper">
          {vagas.map((vagas, i) => (
            <div className="vagas" key={i}>
              <h1>{vagas.title}</h1>
              <div className="">               
              <h3>{vagas.subtitle}</h3>             
              <p>{vagas.desc}</p>
              <h3>{vagas.subtitle2}</h3>             
              <p>{vagas.req}</p> 
              <h3>{vagas.subtitle3}</h3>             
              <p>{vagas.tipo}</p>              
              <p></p>  
              <div className="btn-info">          
                <a
                  href="lmsconsultoriastz@gmail.com"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  Candidatar
                </a>
              </div>       
              </div>
                 
              {/* <div className="description">
                
                <div className="links">
                  <a href={vagas.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={vagas.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div> */}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vagas;