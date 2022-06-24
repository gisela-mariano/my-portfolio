import styled from "styled-components";
import { animTag } from "../../styles/animacoes";



const DivStyleContato = styled.div`

  height: 350px;

  background: linear-gradient(180deg, #341c69 16.31%, #06083D 139.24%);

  footer{
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    .cont-cards{
      width: 100%;

      display: flex;
      justify-content: space-evenly;

      .card{

        h2{
          font-size: 2.5rem;
          font-weight: bold;

          margin-bottom: 40px;
        }

        .info{
          display: flex;
          align-items: center;

          margin-top: 20px;

          img{
            width: 40px;

            margin-right: 15px;
          }

          span{
            font-family: 'Ubuntu', sans-serif;
            font-weight: 300;
            font-size: 1.2rem;

            strong{
              font-weight: bold;
            }
          }
        }


        @media screen and (max-width: 360px){

          width: 90%;
        }
      }
      

      @media screen and (max-width: 700px){

        height: 90%;

        flex-direction: column;
        align-items: center;

        .card{

          height: 250px;

          h2{
            margin-bottom: 20px;
          }

          .info{

            img{
              width: 30px;
            }
          }

        }
      }

      @media screen and (max-width: 360px){

        .card{

          h2{
            font-size: 2rem;
          }

          .info{

            span{
              font-size: 1rem;
            }
          }
        }

      }
    }

    .copy{
      font-family: 'Ubuntu', sans-serif;
      font-weight: 300;

      margin-bottom: 20px;

      align-self: center;
    }

    .tag{
      font-size: 6rem;

      text-decoration: none;

      color: white;

      cursor: pointer;

      position: absolute;
      top: 58%;
      right: 3%;

      transition: all 0.3s ease;

      animation: ${animTag} 4s;
      animation-iteration-count: infinite;

      :hover{
        text-shadow: 
          3px 5px 8px var(--pink),
          -3px -5px 8px var(--azul-claro);
      }


      @media screen and (max-width: 750px){
        font-size: 4rem;
      }

      @media screen and (max-width: 550px){
        display: none;
      }
    }
  }

  @media screen and (max-width: 1036px){
    background: linear-gradient(180deg,#452277 16.31%,#06083D 139.24%);
  }

  @media screen and (max-width: 935px){
    padding-top: 20px;
  }

  @media screen and (max-width: 700px){
    height: 520px;
  }
`;

export default DivStyleContato;