/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Vagas() {
  const [vagas] = useState([
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },  
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
    },
    {
      title: "Cargo: Analista de controladoria da informação Pleno ou Sênior (100% remoto)",
      subtitle: "Descrição:",//Nao mexer
      desc:  "Marca internacional da companhia de seguros estadunidense, com mais de 40 anos de mercado.Consolidada como uma das maiores seguradoras do país, tem foco em oferecer a melhor experiência para seus clientes e segurados. Nos últimos anos, a companhia alcançou grandes conquistas rumo a este objetivo",
      subtitle2:"Requisitos:",//Não mexer 
      req:   "Formação Superior Completo -Conhecimentos em tecnologias e ferramentas de segurança como: Cloud, IDP, SIEM, WAF, Firewall, IPS/IDS, DLP, Proxy, etc - Experiência em desenvolvimento seguro de sistemas, SDLC, De SecOps, OWASP TOP 10- SDLC, SAST, DAST, IAST, RASP - Experiência em ferramentas de pentest e scan de vulnerabilidades em devices, servidores e aplicações (Acunetix, Burp Suite, Nessus, Qualys, Kali Linux, etc)- Alguma certificação relevante para a vaga (CEH, OSCE, OSWE, GPEN, OSCP, Pentest, etc)",
      subtitle3:"",//Não mexer
      tipo:   "",
      gLink: "",//Colocar Link da vaga
      lLink: "",//Colcoar Link de email
      
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
                  href="https://mail.google.com/mail/u/2/#inbox"
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