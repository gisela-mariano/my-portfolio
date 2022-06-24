import React from "react";

import DivStyleTecnologias from "./style";

import hexagono from "../../assets/imgs/hexagono.svg"
import html from "../../assets/imgs/html.svg"
import css from "../../assets/imgs/css.svg"
import js from "../../assets/imgs/js.svg"
import react from "../../assets/imgs/react.svg"
import node from "../../assets/imgs/nodejs.svg"


const Tecnologias = () => {

  return(
    <DivStyleTecnologias>
      <section>
        <header>
          <h2>Principais Tecnologias</h2>

          <div className="cont-icones-tecnologias">

            <div className="cont-icone">
              <img src={hexagono} alt="Borda Imagem" className="borda"/>
              <img src={html} alt="Logo HTML" title="HTML" className="icone"/>
            </div>

            <div className="cont-icone">
              <img src={hexagono} alt="Borda Imagem" className="borda"/>
              <img src={css} alt="Logo CSS" title="CSS" className="icone"/>
            </div>

            <div className="cont-icone">
              <img src={hexagono} alt="Borda Imagem" className="borda"/>
              <img src={js} alt="Logo JavaScript" title="JavaScript" className="icone"/>
            </div>

            <div className="cont-icone">
              <img src={hexagono} alt="Borda Imagem" className="borda"/>
              <img src={react} alt="Logo ReactJS" title="ReactJS" className="icone"/>
            </div>

            <div className="cont-icone">
              <img src={hexagono} alt="Borda Imagem" className="borda"/>
              <img src={node} alt="Logo NodeJS" title="NodeJS" className="icone"/>
            </div>

          </div>
        </header>

        <div className="cont-cards">

          <div className="card">
            <div className="barra">
              <div className="sombra-barra"></div>
            </div>
  
            <div className="cont-tecnologias">

              <div className="container">
                <h3>Front End</h3>
    
                <div className="tecnologias">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>ReactJS</span>
                  {/* <span>TypeScript</span> */}
                </div>
              </div>

            </div>
          </div>
  
          <div className="card">
            <div className="barra">
              <div className="sombra-barra"></div>
            </div>
  
            <div className="cont-tecnologias">
              <div className="container">
                <h3>Back End</h3>
    
                <div className="tecnologias">
                  {/* <span>Python</span> */}
                  <span>NodeJS</span>
                  <span>ExpressJS</span>
                  <span>Postgre</span>
                  <span>SQL</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <svg 
        onClick={() => window.scroll({top: 2130, left: 0, behavior: 'smooth' })}
        viewBox="0 0 48 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0155 15.9775L9.03276 1.13071C8.27227 0.376333 7.34214 2.56046e-06 6.24248 2.60853e-06C5.14293 2.65659e-06 4.21323 0.37644 3.45284 1.13071L1.14036 3.42155C0.380193 4.17475 -1.08856e-06 5.09659 -1.04095e-06 6.18589C-9.93333e-07 7.27519 0.380193 8.1966 1.14036 8.95097L21.2098 28.8694C21.9703 29.6231 22.9003 30 24.0001 30C25.0998 30 26.0291 29.6232 26.7899 28.8694L46.8593 8.95108C47.6198 8.1967 48 7.2754 48 6.18599C48 5.09659 47.6198 4.17486 46.8593 3.42166L44.5473 1.13082C43.7872 0.376439 42.8624 0.000105504 41.7725 0.000105551C40.6836 0.000105599 39.7484 0.376547 38.9674 1.13082L24.0155 15.9775Z"/>
        </svg>
      </section>
    </DivStyleTecnologias>
  )
};


export default Tecnologias;