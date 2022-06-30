import styled from "styled-components";

import bg from "../../assets/imgs/bg-projetos.svg";
import { animBarra, animCard, animCardBordaDir, animCardBordaEsq, animCardBordaTopo,  animInfosCard, animSeta } from "../../styles/animacoes";


const DivStyleProjetos = styled.div`

  height: 100vh;

  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;

  section{

    header{
      width: 100%;
      height: 90px;

      margin-bottom: 50px;

      .cont-header{
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        h2{
          font-size: 2.5rem;
          font-weight: bold;
        }
      }


      @media screen and (max-width: 935px){
        
        margin-bottom: 30px;
      }

      @media screen and (max-width: 490px){

        margin-bottom: 20px;

        .cont-header{

          h2{
            font-size: 2rem;
          }
        }
      }

      @media screen and (max-width: 375px){

        margin-bottom: 10px;

        .cont-header{

          h2{
            font-size: 1.5rem;
          }
        }
        
      }
    }

    .cont-cards{
      width: 100%;
  
      display: flex;
      justify-content: space-evenly;
  
      .card{
        width: 300px;
        height: 100px;
  
        .borda{
          width: 100%;
          height: 100%;
  
          .laterais{
            width: 100%;
            height: 100%;
  
            display: flex;
            justify-content: space-between;
  
            div{
              width: 3px;
              height: 100%;
  
              background: var(--gradiente-vertical);
            }
  
            .sombra-direita, .sombra-esquerda{
              background: var(--gradiente-vertical);
            }
          }
  
          .topo-base{
            width: 100%;
            height: 100%;
  
            display: flex;
            flex-direction: column;
            justify-content: space-between;
  
            position: relative;
            top: -100%;
  
            div{
              width: 100%;
              height: 3px;
            }
  
            .topo, .sombra-topo{
              background-color: var(--pink);
            }
  
            .base, .sombra-base{
              background-color: var(--azul-claro);
            }
          }
  
          .sombra{
            width: 100%;
            height: 100%;
  
            filter: blur(3px);
          }
        }
  
        .conteudo-card{
          font-family: 'Ubuntu', sans-serif;

          height: 97%;
  
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
  
          position: relative;
          top: -100%;
  
          h3{
            margin: 30px 0;
  
            font-size: 2.3rem;
          }
  
          .redimensionar{
            margin-top: 35px;
  
            font-size: 1.6rem;
          }
  
          .infos-card{
            width: 85%;
            height: 80%;
  
            display: flex;
            flex-direction: column;
            justify-content: space-between;
  
            opacity: 0;
            
            .sobre-projeto{
              height: 85%;

              display: flex;
              flex-direction: column;
              justify-content: space-around;

              p{
                text-align: justify;
                
                font-weight: 300;
                
                line-height: 18px;
              }
            }
  
            nav{
              width: 100%;
  
              display: flex;
              justify-content: space-evenly;
  
              img{
                width: 35px;

                transition: all 0.3s ease;

                :hover{
                  box-shadow: 
                    5px 7px 15px 0px var(--pink), 
                    1px 2px 2px 0px var(--pink), 
                    -4px 0px 15px 2px var(--azul-claro),
                    -4px 1px 4px 2px var(--azul-claro),
                    -2px 0px 1px 2px var(--azul-claro);

                  border-radius: 100%;
                }
              }
            }

          }
        }
  
        @media screen and (min-width: 935px){

          :hover{
  
            animation: ${animCard} 3s forwards;

            .infos-card{
              animation: ${animInfosCard} 2s forwards;
              animation-delay: 1s;
            }

            .sombra-topo{
              animation: ${animCardBordaTopo} 1s;
              animation-delay: 1s;
            }

            .sombra-esquerda{
              animation: ${animCardBordaEsq} 1s;
              animation-delay: 1.7s;
            }

            .sombra-base{
              animation: ${animBarra} 1s;
              animation-delay: 3s;
            }

            .sombra-direita{
              animation: ${animCardBordaDir} 1s;
              animation-delay: 3.7s;
            }
          }

        }
      }


      @media screen and (max-width: 935px){
        height: 450px;

        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        overflow-y: auto;

        ::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }

        ::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
          background: var(--azul-escuro);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--pink);
          border-radius: 3px;
        }

        .card{
          height: 420px;

          margin-bottom: 20px;

          .conteudo-card{
            
            .infos-card{
              opacity: 1;
            }
          }
        }

      }
    }

    svg{
      width: 30px;
      height: 30px;

      fill: var(--azul-claro);

      cursor: pointer;

      position: absolute;
      top: 90%;
      left: 50%;

      animation: ${animSeta} 4s;
      animation-iteration-count: infinite;

      @media screen and (max-width: 935px){
        display: none;
      }
    }
  }
`;

export default DivStyleProjetos;