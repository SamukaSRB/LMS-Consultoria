/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Vagas() {
  const [vagas] = useState([ 
    {
      title: "Cargo:Mecânico de Geometria e Balanceamento/SC",
      // subtitle: " ",//Nao mexer
      // desc:  "",
      // subtitle2:"",//Não mexer 
      // req:   "",
      // subtitle3:"",//Não mexer
      // tipo:   "",
      // gLink: "",//Colocar Link da vaga
      // lLink: "",//Colcoar Link de email
      
    },
 {
    title: "Cargo: (Pessoas com deficiência) Empacotador Localidade Maringá/PR",
    // subtitle: " ",//Nao mexer
    // desc:  "",
    // subtitle2:"",//Não mexer 
    // req:   "",
    // subtitle3:"",//Não mexer
    // tipo:   "",
    // gLink: "",//Colocar Link da vaga
    // lLink: "",//Colcoar Link de email
    
  },
  
    {
      title: "Cargo: Vendedor Externo (pessoas com deficiência)",
      // subtitle: " ",//Nao mexer
      // desc:  "",
      // subtitle2:"",//Não mexer 
      // req:   "",
      // subtitle3:"",//Não mexer
      // tipo:   "",
      // gLink: "",//Colocar Link da vaga
      // lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação",
      // subtitle: " ",//Nao mexer
      // desc:  "",
      // subtitle2:"",//Não mexer 
      // req:   "",
      // subtitle3:"",//Não mexer
      // tipo:   "",
      // gLink: "",//Colocar Link da vaga
      // lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: HEAD DE ATENDIMENTO ",
      // subtitle: "Descrição:",//Nao mexer
      // desc:  "Empresa de trade marketing voltada a atuação End-to-end em campanhas e ações de PDV, busca por Head de Atendimento. Será responsável por planejar e coordenar as atividades da equipe de executivos e analistas da área de atendimento, visando a atingir os objetivos da empresa relacionados com volume de vendas",
      // subtitle2:"Requisitos:",//Não mexer 
      // req:   "Pacote Office avançado (principalmente Excel); - Conhecimento e experiência com funil de vendas e jornada do cliente; - Experiência com trade marketing, logística promocional ou marketing promocional; - Experiência com indicadores de NPS, lead time e faturamento; - Experiência com gestão de pessoas e processos",
      // subtitle3:"",//Não mexer
      // tipo:   "",
      // gLink: "",//Colocar Link da vaga
      // lLink: "",//Colcoar Link de email
      
    },  
    {
      title: "Cargo: DESENVOLVEDOR PHP 100% remota.",
      // subtitle: "Descrição:",//Nao mexer
      // desc:  "Empresa com marketplace que conecta você Varejista/Comprador diretamente a Indústria/Produtor busca um desenvolvedor PHP para atuar no desenvolvimento das aplicações web",
      // subtitle2:"Requisitos:",//Não mexer 
      // req:   "Experiência com PHP; - Experiência com o framework Laravel; - Experiência com MySQL; - Experiência com versionamento de código utilizando GIT; - Vivência em metodologia Ágil - Scrum e Kanban; -Experiência com sistemas de alta disponibilidade (marketplaces, e-commerces, apps...) - Orientação a qualidade de código, testes automatizados (unitários, tdd) e documentação. Desejável: - Conhecimento com Docker; - Conhecimentos em desenvolvimento de componentes com Livewire.",
      // subtitle3:"",//Não mexer
      // tipo:   "",
      // gLink: "",//Colocar Link da vaga
      // lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Especialista em Seguros de Equip e Riscos",
        // subtitle: "Descrição:",//Nao mexer
        // desc:  "Empresa multinacional americana do segmento securitário, busca uma pessoa especialista em seguros de equipamentos agrícolas e riscos diversos.",
        // subtitle2:"Requisitos:",//Não mexer 
        // req:   "Experiência no ramo de seguros; - Conhecimento em seguros de equipamentos agrícolas e riscos diversos; - Perfil Sênior; - Perfil analítico e voltado a indicadores; - Morar na região de São Paulo - Remoto com idas pontuais ao escritório (atuará 2 vezes no mês de forma presencial)",
        // subtitle3:"",//Não mexer
        // tipo:   "",
        // gLink: "",//Colocar Link da vaga
        // lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo:  Sr Data Engineer (Python/SQL)",
      // subtitle: "Descrição:",//Nao mexer
      // desc:  "Empresa americana, desenvolve soluções de tecnologia que ajudam a unificar a jornada do cliente para uma abordagem mais personalizada de publicidade, marketing e operações. Experiência na área + de 6 anos Faixa salarial :A combinar",
      // subtitle2:"Requisitos:",//Não mexer 
      // req:   "Python, Sql, Google big query, Google cloud platform Requisitos comportamentais. O que você precisa ter: Inglês avançado (verbal e escrito) 4+ anos de experiência com Python e SQL Deve ter experiência com BigQuery, ter trabalhado com agregação e conjuntos de dados Etling; Necessário ter experiência com Airflow; Deve saber como importar dados de diferentes fontes para Google Cloud Storage e BigQuery Deve saber como trabalhar e transferir arquivos de S3 para GCS. Qualificações: Deve estar familiarizado com gerenciamento e criação de Data Warehouse, File Storage System e ETLs, Google Cloud (BigQuery, Google Cloud Storage).",
      // subtitle3:"",//Não mexer
      // tipo:   "",
      // gLink: "",//Colocar Link da vaga
      // lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Gerente de Planejamento e Custo.",
      // subtitle: "Descrição:",//Nao mexer
      // desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      // subtitle2:"Requisitos:",//Não mexer 
      // req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      // subtitle3:"",//Não mexer
      // tipo:   "",
      // gLink: "",//Colocar Link da vaga
      // lLink: "",//Colcoar Link de email
      
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
                  href="https://mail.google.com/mail/u/3/#inbox"
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