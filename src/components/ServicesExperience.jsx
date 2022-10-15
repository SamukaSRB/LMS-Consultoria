import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Curriculos",
      desc: "Para começar, é importante saber o que você quer em termos de carreira. Você precisa descobrir o que você gosta e o que te faz feliz. Depois, é preciso identificar os campos de atuação que você quer se dedicar. Por fim, é importante escolher os cursos e programas de ensino que estão relacionados a esses campos de atuação.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Entrevistas",
      desc: "A primeira impressão é a que fica” não é um ditado sem fundamento. Pelo contrário, a ciência comprovou esse fato em diversos estudos. A Time vai mais longe e afirma que alguns estudiosos consideram esse o ponto mais importante das entrevistas. Otimize as primeiras impressões desde o início, enquadrando a conversa com algumas frases bem ensaiadas sobre como você quer ser percebido. Isso vai acabar sendo a estrutura com que a outra pessoa forma suas memórias sobre você.",
      active: false,
    },
    {
      icon: "fa-ruler",
      title: "Contratação",
      desc: "Você já ouviu falar que as pessoas são o maior patrimônio de uma empresa? Os funcionários que fazem parte de uma organização desempenham um papel fundamental no crescimento e sucesso dos negócios. E é justamente por isso que o processo de contratação de novos colaboradores é tão importante.Mas selecionar o profissional mais adequado e qualificado para fazer parte do quadro de funcionários representa um desafio e tanto para os gestores. Afinal, os gastos envolvidos tanto no processo de contratação quanto de um possível desligamento podem impactar significativamente o orçamento da organização. Dessa forma, fazer uma escolha assertiva no momento da contratação é muito mais interessante e vantajoso para qualquer empresa. Mas como não errar na hora de contratar novos funcionários? ",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
      
        {/* <div className="experiences" id="experiences">
          <div className="experience">
            <h3>12</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>60+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>08</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>122+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default ServicesExperience;