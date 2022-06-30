import styled from "styled-components";

import bg from "../../assets/imgs/bg-tecnologias.svg"
import { animBarraVertical, animBorda, animIcone, animSeta } from "../../styles/animacoes";


const DivStyleTecnologias = styled.div`

  height: 100vh;

  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  :hover{

    .barra{
      animation: ${animBarraVertical} 1s;

      .sombra-barra{
        animation: ${animBarraVertical} 1s;
        animation-delay: 1s;
      }
    }
  }

  section{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    header{
      width: 100%;
      height: 170px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      box-sizing: border-box;

      h2{
        font-size: 2.5rem;
        font-weight: bold;
      }

      .cont-icones-tecnologias{
        width: 100%;

        display: flex;
        justify-content: space-around;

        .cont-icone{
          width: 100%;
          max-width: 80px;

          display: flex;
          justify-content: center;
          align-items: center;

          :hover{

            .borda{
                animation: ${animBorda} 1s;
              }

            .icone{
              animation: ${animIcone} 0.7s;
            }
          }

          img{
            width: 100%;

            :last-child{
              width: 100%;
              max-width: 35px;
              position: absolute;

              @media screen and (max-width: 615px){
                width: 28px;
              } 
            }
          }

        }
      }

      @media screen and (max-width: 540px){

        h2{
          font-size: 2rem;
        }
      }

      @media screen and (max-width: 430px){

        height: 120px;

        h2{
          font-size: 1.5rem;
        }
      }
    }

    .cont-cards{
      width: 100%;

      display: flex;
      justify-content: space-evenly;

      .card{
        width: 100%;
        max-width: 300px;
        height: 350px;

        display: flex;

        .barra{
          height: 350px;
          width: 3px;

          background: var(--gradiente-vertical);

          border-radius: 10px;

          position: absolute;

          .sombra-barra{
            width: 3px;
            height: 100%;

            background: var(--gradiente);

            filter: blur(3px);
          }
        }

        .cont-tecnologias{
          width: 100%;
          height: 100%;

          .container{
            width: 90%;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            font-family: 'Ubuntu', sans-serif;

            letter-spacing: 1.5px;

            h3{
              font-size: 1.8rem;
              font-weight: bold;
            }

            .tecnologias{
              height: 250px;

              display: flex;
              flex-direction: column;
              justify-content: space-between;

              span{
                text-align: center;

                font-size: 1.2rem;
                font-weight: 300;
              }
            }
          }

        }
      }


      @media screen and (max-width: 600px){

        height: 70%;

        flex-wrap: wrap;

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
      }
    }

    svg{
      width: 30px;
      height: 30px;

      fill: var(--azul-claro);

      cursor: pointer;

      animation: ${animSeta} 4s;
      animation-iteration-count: infinite;

      @media screen and (max-width: 600px){

        display: none;
      }
    }
  }
`;


export default DivStyleTecnologias;