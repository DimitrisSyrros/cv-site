import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const TimeLineEntry = styled.article`
  width: 100%;
  height: 100%;
  padding-left: 1%;
  border-left: 1.5px solid #333;
  margin-top: 2%;
  &:hover {
    border-left: 1.5px solid #ffb400;
    // background: url(${props => props.background}) no-repeat center center;
    // opacity: 0.3;
  }
`;

export const LangLogo = styled(FontAwesomeIcon)`
  align-self: center;
`;

export const Timestamp = styled.span`
  color: #fff;
  font-size: small;
  padding: 5px 10px;
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 20px;
  font-weight: 600;
  background-color: #252525;
  opacity: .8;
`;

export const EntryTitle = styled.h4`

`;

export const SectionHeader = styled.h3`
  font-size: x-large;
  font-style: italic;
  text-align: center;
`;


export const TimeLineDetails = styled.p`
  font-size: medium;
`;

export const ReadMoreBtn = styled.button`
  color: white;
  border: 0;
  cursor: pointer;
  border-radius: 20px;
  padding: .5em 1.25em;
  background: linear-gradient(90deg, #ad8e26, #665d07, #e6990b);
  background-size: 300%;
  background-position: left;
  transition: background-position 650ms;
  &:hover {
    background-position: right;
  }
`;

export const TimeLineGrid = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  justify-items: start;
  align-items: stretch;
  justify-content: center;
  align-content: space-evenly;
`;



export const AboutMeContainer = styled.div`
    padding: 2%;
`;

export const MainHeader = styled.h2`
  text-align: center;
  font-size: 5vh;
  text-transform: uppercase;
`;

export const MainHeaderShadow = styled.h1`
  text-align: center;
  font-size: 10vh;
  left: 0;
  letter-spacing: 10px;
  line-height: 0.7;
  text-transform: uppercase;
  font-weight: 800;
  -webkit-transform: translateY(-183%);
  -moz-transform: translateY(-183%);
  -ms-transform: translateY(-183%);
  -o-transform: translateY(-183%);
  transform: translateY(-183%);
  color: rgba(255, 255, 255, 0.068);
`;

export const Languages = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-row-gap: 14%;
  justify-items: start;
  align-items: center;
  justify-content: center;
  align-content: start;
  transform-style: preserve-3d;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  transform-style: preserve-3d;
  background: #373A3E;
  width: 20vw;
  height: 18vh;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 9px 8px 20px 4px ${ (props) => props.color };
  &:hover {
    .name {
      top: 12vh;
      opacity: 1;
    }
  }
`;

export const LangName = styled.h5`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  color: #fff;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 75px);
  transition: 0.5s;
  opacity: 0;
  z-index: 10;
`;

export const AboutMeDiv = styled.div`
  padding: 3%;
  background: white;
  color: #292C30;
  font-weight: 700;
  text-align: justify;
  box-shadow: 0 10px 10px -5px;
  margin-bottom: 15%;
  font-size: 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  #profile {
    border-radius: 50%;
  }
  p{
    padding-left: 4%;
    font-style: italic;
  }
`;