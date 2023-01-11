import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Curriculos",
      desc: "Comece com as informações de contato. Inclua seu nome completo, endereço, número de telefone e endereço de e-mail. Escreva um resumo pessoal. Isso deve incluir as suas habilidades, experiências e objetivos de carreira de forma resumida. Liste sua educação e formação. Inclua as instituições que você frequentou, os cursos que você tomou e as datas de conclusão. Adicione sua experiência profissional. Liste as empresas para as quais você trabalhou, as posições que você ocupou e as datas de início e término. Descreva suas responsabilidades e realizações para cada cargo. Destaque suas habilidades e conhecimentos. Inclua idiomas que você fala, habilidades de informática e outros conhecimentos relevantes para o trabalho. Adicione qualquer experiência voluntária ou extracurricular. Isso pode incluir atividades comunitárias, membro de associações profissionais, etc. Certifique-se de revisar e editar seu currículo antes de enviá-lo. Verifique por erros de ortografia e gramática, e certifique-se de que todas as informações estejam atualizadas e precisas. Adicione uma foto se você estiver se candidatando a um trabalho no setor de atendimento ao cliente, vendas, eventos, entre outros. Faça um currículo simples, com uma estrutura clara e fácil de ler. Use uma fonte legível e manter espaçamento entre as seções. Certifique-se de que o currículo está alinhado com o trabalho para o qual você está se candidatando.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Entrevistas",
      desc: "Faça uma pesquisa sobre a empresa. Estude a história, missão e valores da empresa, bem como sua estrutura, produtos e serviços. Analise a descrição do cargo. Leia atentamente a descrição da vaga para ter uma ideia das responsabilidades e habilidades requeridas. Releia o seu currículo. Estude suas habilidades e experiências para que você possa falar sobre elas com confiança durante a entrevista. Treine sua comunicação não-verbal. Estude a linguagem corporal e o tom de voz, e lembre-se de se manter relaxado e simpático. Faça perguntas. Tenha algumas perguntas prontas para fazer ao entrevistador, isso demonstra interesse no trabalho e na empresa. Seja pontual e se apresente de forma apropriada. Chegue cedo à entrevista e vista-se de forma adequada para a ocasião. Comece com confiança. Comece a entrevista com uma boa impressão e seja positivo.",
      active: false,
    },
    {
      icon: "fa-ruler",
      title: "Contratação",
      desc: "A fase de contratação dos selecionados refere-se ao processo de seleção de funcionários, onde candidatos qualificados são escolhidos para ocupar cargos específicos na empresa ou organização. Essa fase geralmente ocorre após o processo de triagem dos currículos e entrevistas, quando os candidatos mais qualificados são escolhidos para serem contratados. Algumas etapas comuns nessa fase incluem: -Realizar entrevistas individuais -Avaliação de habilidades -Verificação de referências -Exames médicos e psicológicos (caso necessário) -Formalização do contrato de trabalho ",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="dicas">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              {/* <button className="btn">Know More</button> */}
            </div>
          ))}
        </div>
      
        <div className="experiences" id="servicos">
          <div className="experience">
            <h3>12</h3>
            <p>Serviços</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>60+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>08</h4>
              <p>Empresas</p>
            </div>
            <div className="portfolio">
              <h4>122+</h4>
              <p>Projetos</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Pessoas</p>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
}

export default ServicesExperience;