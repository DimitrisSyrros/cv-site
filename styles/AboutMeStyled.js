import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const TimeLineEntry = styled.article`
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
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
  color: ${({ theme }) => theme.basicColor};
  font-size: var(--fs-xsmall);
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.backgroundColor};
  opacity: .8;
`;

export const YellowSpan = styled.span`
  color: ${({ theme }) => theme.headerColor};
`;

export const CardTitle = styled.h2`
  font-size: var(--fs-xlarge);
`;

export const EntryTitle = styled.h4`
  color: ${({ theme }) => theme.headerColor};
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: var(--fs-large);
`;

export const SectionHeader = styled.h3`
  font-size: var(--fs-xlarge);
  font-family: 'Oswald', sans-serif;
  font-weight: 500;  
  text-align: center;
`;


export const TimeLineDetails = styled.p`
  font-size: var(--fs-medium);
  font-weight: 600;
  color: ${({ theme }) => theme.secondaryColor};
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
  background: url(${(props)=>props.background}) no-repeat no-repeat center center;
  ${ (props) => props.themeName === "light" && css`
    ${({ theme }) => theme.backgroundColor};
  ` }
  background-size: cover;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
`;


export const MainHeader = styled.h2`
  text-align: center;
  font-size: var(--fs-xxlarge);
  @media only screen and (max-width: 576px) {
    font-size: 25px ;
  }
  text-transform: uppercase;
`;

export const MainHeaderShadow = styled.h1`
  text-align: center;
  font-size: var(--fs-xxxlarge);
  @media only screen and (max-width: 576px) {
    font-size: 50px ;
  }
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

export const AboutMeSection = styled.section`
  padding: 3%;
  background: #eaeaea;
  color: #212326;
  font-weight: 700;
  text-align: justify;
  box-shadow: 0 10px 10px -5px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  #profile {
    border-radius: 50%;
  }
`;

export const Summary = styled.p`
  padding-left: 4%;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: var(--fs-large);
  @media only screen and (max-width: 576px) {
    font-size: var(--fs-medium);
    margin-right: 2%;
  }
`;