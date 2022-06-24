import styled from "styled-components";

import bg from "../../assets/imgs/bg-sobre-mim.svg";
import { animBarra, animBorda, animSeta } from "../../styles/animacoes";


const DivStyleSobreMim = styled.div`

  height: 100vh;

  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  :hover{

    .barra{
      width: 100%;
      height: 3px;

      background: var(--gradiente);

      border-radius: 10px;

      animation: ${animBarra} 1s;

      .sombra-barra{
        width: 100%;
        height: 2px;

        background: var(--gradiente);

        filter: blur(3px);

        animation: ${animBarra} 1s;
        animation-delay: 1s;
      }
    }

    .cont-foto{

      img{
        
        :first-child{
          animation: ${animBorda} 1s;
        }
      }
    }

  }

  section{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .cont-foto-texto{
      display: flex;
      flex-direction: column;
      align-items: center;

      .cont-foto{
        width: 100%;
        max-width: 400px;
        min-width: 300px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        img{

          :first-child{
            width: 90%;
          }

          :last-child{
            width: 100%;
            max-width: 180px;

            position: absolute;


            @media screen and (max-width: 370px){

              max-width: 150px;
            }
          }

        }
      }

      .cont-texto{
        width: 100%;
        height: 150px;
        max-width: 550px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        p{
          width: 95%;

          font-family: 'Ubuntu', sans-serif;;
          font-size: 1.2rem;
          font-weight: 300;

          line-height: 28px;

          text-align: justify;
        }
        
        @media screen and (max-width: 570px){

          width: 90%;
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


      @media screen and (max-width: 615px){

        display: none;
      }
    }
  }
`;


export default DivStyleSobreMim;