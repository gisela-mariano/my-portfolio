import { keyframes } from "styled-components";


export const animBarra = keyframes`

  from{
    width: 0;
  }

  to{
    width: 100%;
  }
`;

export const animBarraVertical = keyframes`

  from{
    height: 0;
  }

  to{
    height: 350px;
  }
`;

export const animSeta = keyframes`

  0% {
		transform: translateY(0);
    opacity: 0;
	}

  25%{
    opacity: 20%;
  }

  50%{
    opacity: 40%;
  }

  75%{
    opacity: 60%;
  }

	100% {
		transform: translateY(10px);
    opacity: 1;
	}
`;

export const animBorda = keyframes`

  0% {
    opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

export const animIcone = keyframes`

  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(0.75, 1.25, 1);
  }

  40% {
    transform: scale3d(1.25, 0.75, 1);
  }

  50% {
    transform: scale3d(0.85, 1.15, 1);
  }

  65% {
    transform: scale3d(1.05, 0.95, 1);
  }

  75% {
    transform: scale3d(0.95, 1.05, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

export const animCard = keyframes`

  0% {
    height: 100px;
  }

  100% {
    height: 460px;
  }
`;

export const animCardBordaEsq = keyframes`

  from{
    height: 0;
  }

  to{
    height: 460px;
  }
`;

export const animCardBordaDir = keyframes`

  from{
    height: 430px;
  }

  to{
    height: 0;
  }
`;

export const animCardBordaTopo = keyframes`

  from{
    width: 100%;
  }

  to{
    width: 0;
  }
`;

export const animInfosCard = keyframes`

  0% {
    transform: scaleY(0);
  }

  50%{
    opacity: 50%;
  }

  100% {
    transform: scaleY(1);
    opacity: 1;
  }
`;

export const animTag = keyframes`

  50% {
    top: 50%;
  }
`;
