import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const TimeLineEntry = styled.article`
  width: 100%;
  height: 100%;
  padding: 4%;
  margin: 4%;
  border-left: 1.5px solid #333;
  &:hover {
    border-left: 1.5px solid #ffb400;
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

export const SubHeader = styled.p`

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
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 50% 50%;
  justify-items: start;
  align-items: center;
  justify-content: center;
  align-content: space-evenly;
  margin: 1% 1% 1% 1%;
  padding: 1%;
`;



export const AboutMeContainer = styled.div`

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
  grid-template-rows: 50% 50%;
  row-gap: 4%;
  justify-items: start;
  align-items: center;
  justify-content: center;
  align-content: start;
  margin: 2%;
  padding: 1%;
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
  box-shadow: 9px 8px 20px 4px #ad8e26;
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