import React from "react";

import DivStyleContato from "./style";

import email from "../../assets/imgs/email.svg";
import whatsapp from "../../assets/imgs/whatsapp.svg";
import linkedin from "../../assets/imgs/linkedin.svg";
import instagram from "../../assets/imgs/instagram.svg";


const Contato = () => {

  return(
    <DivStyleContato>
      <footer>
        <div className="cont-cards">
          <div className="card">
            <h2>Contato</h2>

            <div className="info">
              <img src={email} alt="Icone Email" />

              <span>gisela-mariano@hotmail.com</span>
            </div>

            <div className="info">
              <img src={whatsapp} alt="Icone WhatsApp" />

              <span>(88) 99732-4146</span>
            </div>
          </div>

          <div className="card">
            <h2>Redes Sociais</h2>

            <div className="info">
              <img src={linkedin} alt="Icone LinkedIn" />

              <span>linkedin.com/in/<strong>gisela-mariano</strong></span>
            </div>

            <div className="info">
              <img src={instagram} alt="Icone Instagram" />

              <span>instagram.com/<strong>gisela.mariano</strong></span>
            </div>
          </div>

        </div>

        <span className="copy">Copyright &#169; 2022 Gisela Mariano</span>

        <span
        onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}
        title="Voltar ao Topo"
        className="tag"> /&#62; </span>
      </footer>
    </DivStyleContato>
  )
};


export default Contato;