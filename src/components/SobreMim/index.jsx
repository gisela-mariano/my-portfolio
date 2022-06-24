import React from "react";

import borda from "../../assets/imgs/borda-foto2.svg";
import foto from "../../assets/imgs/foto.svg";
import DivStyleSobreMim from "./style";


const SobreMim = () => {

  return(
    <DivStyleSobreMim>
      <section>

        <div className="cont-foto-texto">
          <div className="cont-foto">
            <img src={borda} alt="Borda Foto" />
            <img src={foto} alt="Foto Gisela Mariano" />
          </div>
  
          <div className="cont-texto">
            <p>Sou entusiasta de tecnologia. Sendo assim, escolhi a área de desenvolvimento para estreitar ainda mais o contato, além da possibilidade de criar novos projetos, solucionar problemas e ajudar outras pessoas.</p>
  
            <div className="barra">
              <div className="sombra-barra"></div>
            </div>
          </div>
        </div>

        <svg 
        onClick={() => window.scroll({top: 1420, left: 0, behavior: 'smooth' })}
        viewBox="0 0 48 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0155 15.9775L9.03276 1.13071C8.27227 0.376333 7.34214 2.56046e-06 6.24248 2.60853e-06C5.14293 2.65659e-06 4.21323 0.37644 3.45284 1.13071L1.14036 3.42155C0.380193 4.17475 -1.08856e-06 5.09659 -1.04095e-06 6.18589C-9.93333e-07 7.27519 0.380193 8.1966 1.14036 8.95097L21.2098 28.8694C21.9703 29.6231 22.9003 30 24.0001 30C25.0998 30 26.0291 29.6232 26.7899 28.8694L46.8593 8.95108C47.6198 8.1967 48 7.2754 48 6.18599C48 5.09659 47.6198 4.17486 46.8593 3.42166L44.5473 1.13082C43.7872 0.376439 42.8624 0.000105504 41.7725 0.000105551C40.6836 0.000105599 39.7484 0.376547 38.9674 1.13082L24.0155 15.9775Z"/>
        </svg>
      </section>
    </DivStyleSobreMim>
  );
};


export default SobreMim;