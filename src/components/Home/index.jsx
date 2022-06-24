import React from "react";

import DivStyleHome from "./style";

import email from "../../assets/imgs/email.svg";
import github from "../../assets/imgs/github.svg";
import instagram from "../../assets/imgs/instagram.svg";
import linkedin from "../../assets/imgs/linkedin.svg";
import whatsapp from "../../assets/imgs/whatsapp.svg";


const Home = () => {

  return (
    <DivStyleHome>
      <header>
        <div className="cont-header">
          <div className="cont-icones">

            <a href="https://www.linkedin.com/in/gisela-mariano/" target="blank">
              <img src={linkedin} alt="LinkedIn" title="LinkedIn"/>
            </a>

            <a href="https://www.instagram.com/gisela.mariano/" target="blank">
              <img src={instagram} alt="Instagram" title="Instagram"/>
            </a>
          </div>
  
          <a href="https://github.com/gisela-mariano" target="blank">
            <img src={github} alt="GitHub" title="GitHub"/>
          </a>

  
          <div className="cont-icones">
            <a href="mailto:gisela-mariano@hotmail.com" target="blank">
              <img src={email} alt="Email" title="Email"/>
            </a>
            
            <a href="http://wa.me/+5588997324146" target="blank">
              <img src={whatsapp} alt="WhatsApp" title="WhatsApp"/>
            </a>
          </div>
        </div>
      </header>

      <main>
        <div className="cont-frase-main">
          <span> &lt; </span>

          <h1>Olá, sou Gisela!</h1>
        </div>
        

        <nav>
          <div className="cont-link-nav">
            <span
            onClick={() => window.scroll({top: 710, left: 0, behavior: 'smooth' })}>Sobre Mim</span>

            <div className="hover-barra">
              <div className="sombra-barra"></div>
            </div>
          </div>

          <div className="cont-link-nav">
            <span
            onClick={() => window.scroll({top: 1420, left: 0, behavior: 'smooth' })}>Tecnologias</span>

            <div className="hover-barra">
              <div className="sombra-barra"></div>
            </div>
          </div>

          <div className="cont-link-nav">
            <span
            onClick={() => window.scroll({top: 2130, left: 0, behavior: 'smooth' })}>Projetos</span>

            <div className="hover-barra">
              <div className="sombra-barra"></div>
            </div>
          </div>

          <div className="cont-link-nav">
            <span
            onClick={() => window.scroll({top: 2840, left: 0, behavior: 'smooth' })}>Contato</span>

            <div className="hover-barra">
              <div className="sombra-barra"></div>
            </div>
          </div>
        </nav>

        <svg
        onClick={() => window.scroll({top: 710, left: 0, behavior: 'smooth' })}
        viewBox="0 0 48 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0155 15.9775L9.03276 1.13071C8.27227 0.376333 7.34214 2.56046e-06 6.24248 2.60853e-06C5.14293 2.65659e-06 4.21323 0.37644 3.45284 1.13071L1.14036 3.42155C0.380193 4.17475 -1.08856e-06 5.09659 -1.04095e-06 6.18589C-9.93333e-07 7.27519 0.380193 8.1966 1.14036 8.95097L21.2098 28.8694C21.9703 29.6231 22.9003 30 24.0001 30C25.0998 30 26.0291 29.6232 26.7899 28.8694L46.8593 8.95108C47.6198 8.1967 48 7.2754 48 6.18599C48 5.09659 47.6198 4.17486 46.8593 3.42166L44.5473 1.13082C43.7872 0.376439 42.8624 0.000105504 41.7725 0.000105551C40.6836 0.000105599 39.7484 0.376547 38.9674 1.13082L24.0155 15.9775Z"/>
        </svg>

        <aside>
          <span className="created-by">
            CREATED BY GISELA MARIANO
          </span>
        </aside>
      </main>


    </DivStyleHome>
  )
};


export default Home;