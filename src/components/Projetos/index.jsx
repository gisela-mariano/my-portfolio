import React, { useState } from "react";

import DivStyleProjetos from "./style";

import github from "../../assets/imgs/github2.svg";
import site from "../../assets/imgs/site.svg";
import borda from "../../assets/imgs/borda-projeto.svg";


const Projetos = () => {

  return(
    <DivStyleProjetos>
      <section>
        <header>
          <div className="cont-header">
            <h2>Principais Projetos</h2>
          </div>
        </header>

        <div className="cont-cards">

          <div className="card">
            <div className="borda">

              <div className="laterais">
                <div className="lateral-esquerda">
                  <div className="sombra sombra-esquerda"></div>
                </div>

                <div className="lateral-direita">
                  <div className="sombra sombra-direita"></div>
                </div>
              </div>

              <div className="topo-base">
                <div className="topo">
                  <div className="sombra sombra-topo"></div>
                </div>

                <div className="base">
                  <div className="sombra sombra-base"></div>
                </div>
              </div>

            </div>

            <div className="conteudo-card">
              <h3>Nu Kenzie</h3>
  
              <div className="infos-card">
                <div className="sobre-projeto">
                  <p>A Nu Kenzie foi uma das primeiras aplicações desenvolvida quando começamos aprender ReactJS na Kenzie Academy Brasil.</p>

                  <p>O intuito da aplicação é para gerenciamento de movimentações monetárias, onde o usuário poderá cadastrar seus créditos e débitos.</p>

                  <p>A aplicação foi desenvolvida utilizando ReactJS e algumas bibliotecas básicas como react-icons e react-toastify.</p>
                </div>
  
                <nav>
                  <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-gisela-mariano" target="_blank" rel="noreferrer noopener">
                    <img src={github} alt="Repositório GitHub" title="Ir Para Repositório"/>
                  </a>
  
                  <a href="https://react-entrega-s1-nu-kenzie-gisela-mariano.vercel.app/" target="_blank" rel="noreferrer noopener">
                    <img src={site} alt="Site" title="Ir Para Site"/>
                  </a>
                </nav>
              </div>

            </div>
          </div>

          <div className="card">
            <div className="borda">

              <div className="laterais">
                <div className="lateral-esquerda">
                  <div className="sombra sombra-esquerda"></div>
                </div>

                <div className="lateral-direita">
                  <div className="sombra sombra-direita"></div>
                </div>
              </div>

              <div className="topo-base">
                <div className="topo">
                  <div className="sombra sombra-topo"></div>
                </div>

                <div className="base">
                  <div className="sombra sombra-base"></div>
                </div>
              </div>

            </div>

            <div className="conteudo-card">
              <h3>Kenzie Hub</h3>
  
              <div className="infos-card">
                <div className="sobre-projeto">
                  <p>O Kenzie Hub é um portfólio de programadores da Kenzie Academy Brasil, onde o usuário pode criar uma conta e cadastrar as tecnologias que conhece e definir seu nível de conhecimento na mesma. Ele também poderá editar as tecnologias para atualizar seu nível de conhecimento.</p>

                  <p>A aplicação foi desenvolvida utilizando ReactJS e algumas bibliotecas como: axios, react-hook-form, yup, react-router-dom, styled-components e entre outras.</p>
                </div>
  
                <nav>
                  <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-gisela-mariano" target="_blank" rel="noreferrer noopener">
                    <img src={github} alt="Repositório GitHub" title="Ir Para Repositório"/>
                  </a>
  
                  <a href="https://react-entrega-s2-kenzie-hub-gisela-mariano.vercel.app/" target="_blank" rel="noreferrer noopener">
                    <img src={site} alt="Site" title="Ir Para Site"/>
                  </a>
                </nav>
              </div>

            </div>
          </div>

          <div className="card">
            <div className="borda">

              <div className="laterais">
                <div className="lateral-esquerda">
                  <div className="sombra sombra-esquerda"></div>
                </div>

                <div className="lateral-direita">
                  <div className="sombra sombra-direita"></div>
                </div>
              </div>

              <div className="topo-base">
                <div className="topo">
                  <div className="sombra sombra-topo"></div>
                </div>

                <div className="base">
                  <div className="sombra sombra-base"></div>
                </div>
              </div>

            </div>

            <div className="conteudo-card">
              <h3 className="redimensionar">Lembra Daquele Filme?</h3>
  
              <div className="infos-card">
                <div className="sobre-projeto">
                  <p>O Lembra Daquele Filme? é uma aplicação para gerenciamento de filmes, onde o usuário pode criar uma conta e ter acesso a diversos filmes e séries com suas informações: nota no IMDb, trailer e  sinopse. Ele também poderá listar os filmes e séries em lista de assistidos e lista de desejo, também poderá filtrar em buscas por categoria e por nome.</p>

                  <p>A aplicação foi desenvolvida em equipe com ReactJS e várias bibliotecas como axios, react-router-dom, react-hook-form, yup, MUI, react-jwt e entre outras.</p>
                </div>
  
                <nav>
                  <a href="https://github.com/imrochamatheus/capstone-m3" target="_blank" rel="noreferrer noopener">
                    <img src={github} alt="Repositório GitHub" title="Ir Para Repositório"/>
                  </a>
  
                  <a href="https://capstone-m3-zeta.vercel.app/" target="_blank" rel="noreferrer noopener">
                    <img src={site} alt="Site" title="Ir Para Site"/>
                  </a>
                </nav>
              </div>

            </div>
          </div>

        </div>

        <svg 
        onClick={() => window.scroll({top: 2840, left: 0, behavior: 'smooth' })}
        viewBox="0 0 48 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0155 15.9775L9.03276 1.13071C8.27227 0.376333 7.34214 2.56046e-06 6.24248 2.60853e-06C5.14293 2.65659e-06 4.21323 0.37644 3.45284 1.13071L1.14036 3.42155C0.380193 4.17475 -1.08856e-06 5.09659 -1.04095e-06 6.18589C-9.93333e-07 7.27519 0.380193 8.1966 1.14036 8.95097L21.2098 28.8694C21.9703 29.6231 22.9003 30 24.0001 30C25.0998 30 26.0291 29.6232 26.7899 28.8694L46.8593 8.95108C47.6198 8.1967 48 7.2754 48 6.18599C48 5.09659 47.6198 4.17486 46.8593 3.42166L44.5473 1.13082C43.7872 0.376439 42.8624 0.000105504 41.7725 0.000105551C40.6836 0.000105599 39.7484 0.376547 38.9674 1.13082L24.0155 15.9775Z"/>
        </svg>
      </section>
    </DivStyleProjetos>
  )
};


export default Projetos;