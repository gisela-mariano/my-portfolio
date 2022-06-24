import styled from "styled-components";

import bg from "../../assets/imgs/bg-home.svg";
import { animBarra, animSeta } from "../../styles/animacoes";


const DivStyleHome = styled.div`

  height: 100vh;

  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  

  header{
    width: 100%;

    padding-top: 15px;

    display: flex;
    justify-content: center;
    
    .cont-header{
      width: 95%;

      display: flex;
      justify-content: space-between;

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

      .cont-icones{
        width: 100px;

        display: flex;
        justify-content: space-between;
      }
    }
  }

  main{
    height: 92%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    position: relative;

    .cont-frase-main{
      width: 80%;

      font-size: 6rem;

      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;

      span{
        position: relative;
        left: -45%;
      }

      h1{
        text-align: center;
      }
      

      @media screen and (max-width: 1153px){
          
        span, h1{
          font-size: 5rem;
        }
      }

      @media screen and (max-width: 964px){
        
        span, h1{
          font-size: 4rem;
        }
      }

      @media screen and (max-width: 770px){
        
        span, h1{
          font-size: 3rem;
        }
      }
    }

    nav{
      width: 80%;

      font-size: 1.3rem;

      display: flex;
      justify-content: space-between;

      .cont-link-nav{

        span{
          cursor: pointer;
        }

        .hover-barra{
          height: 3px;

          margin-top: 5px;

          border-radius: 10px;

          .sombra-barra{
            height: 4px;
          }
        }

        :hover{
          text-shadow:
            1px 2px 2px var(--pink), 
            -1px -2px 2px var(--azul-claro);
          
          transition: 1s ease;

          .hover-barra{
            width: 100%;

            background: var(--gradiente);

            animation: ${animBarra} 0.5s;

            .sombra-barra{
              width: 100%;

              background: var(--gradiente);

              filter: blur(5px);

              animation: ${animBarra} 1s;
              animation-delay: 0.1s;
            }
          }
        }

      }
    }

    svg{
      width: 30px;
      
      fill: var(--pink);

      position: relative;
      top: 20%;

      cursor: pointer;
  
      animation: ${animSeta} 4s;
      animation-iteration-count: infinite;
    }

    aside{
      width: 568px;

      position: relative;
      left: 48%;
      top: -44%;

      transform: rotate(270deg);

      span{
        font-size: 0.8rem;
        letter-spacing: 15px;
      }
    }
  }

  @media screen and (max-width: 615px){
    
    nav{
      height: 200px;
      flex-direction: column;
      align-items: center;
    }

    aside, svg{
      display: none;
    }
  }
`;


export default DivStyleHome;