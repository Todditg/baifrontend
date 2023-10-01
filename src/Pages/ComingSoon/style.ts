import {styled, keyframes } from "styled-components";
import { MainTitle } from "../../components/MainContent/style";
import { ReadButton } from "../../components/MainContent/style";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    }

    100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
`

export const WelcomeTitle = styled(MainTitle)`


padding-top: 100px;
font-size: 3.5rem;
animation: 1s ${fadeInUp};
margin-bottom: 10px;
`

export const WelcomeSubTitle = styled(MainTitle)`

font-size: 1.25rem;
animation: 0.5s ${fadeInUp} ease-in;
margin-bottom: 30px;
`
export const BrokenButton = styled(ReadButton)`

font-size: 1.25rem;
animation: 1s ${fadeInUp};
max-width: 100%;
text-transform: none;
`