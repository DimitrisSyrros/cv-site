import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Title from 'react-vanilla-tilt';


export const TimeLineEntry = styled.article`
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  height: 100%;
  padding-left: 1%;
  border-left: 1.5px solid #333;
  margin-top: 2%;

  &:hover {
    border-left: 1.5px solid #ffb400;
  }
`;

export const LangLogo = styled(FontAwesomeIcon)`
  align-self: center;
`;

export const Timestamp = styled.span`
  color: #ffffff;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: 600;
  background-color: #252525;
  opacity: .8;
`;

export const YellowSpan = styled.span`
  color: #f9c959;
`;

export const EntryTitle = styled.h4`
  color: #f9c959;
  font-weight: 300;
  font-size: 19px;
`;

export const SectionHeader = styled.h3`
  font-size: 24px;
  font-style: italic;
  text-align: center;
`;


export const TimeLineDetails = styled.p`
  font-size: 16px;
  color: #d3dbe8;
`;


export const TimeLineGrid = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
  justify-items: start;
  align-items: center;
  justify-content: center;
  align-content: space-evenly;
`;


export const AboutMeContainer = styled.section`
  padding: 3%;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
`;


export const MainHeader = styled.h2`
  text-align: center;
  font-size: 40px;
  text-transform: uppercase;
`;

export const MainHeaderShadow = styled.h1`
  text-align: center;
  font-size: 80px;
  left: 0;
  letter-spacing: 10px;
  line-height: 0.7;
  text-transform: uppercase;
  font-weight: 800;
  -webkit-transform: translateY(${ (props) => props.transformation });
  -moz-transform: translateY(${ (props) => props.transformation });
  -ms-transform: translateY(${ (props) => props.transformation });
  -o-transform: translateY(${ (props) => props.transformation });
  transform: translateY(${ (props) => props.transformation });
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
  box-shadow: 9px 8px 20px 4px ${(props) => props.color};

  &:hover {
    .name {
      top: 12%;
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

export const AboutMeSection = styled.section`
  padding: 3%;
  background: #eaeaea;
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

  p {
    padding-left: 4%;
    font-style: italic;
  }
`;

export const Skill = styled(Title)`
  background: #373A3E !important;
  border-radius: 20px;
  padding: 0 !important;
  width: inherit !important;
`;