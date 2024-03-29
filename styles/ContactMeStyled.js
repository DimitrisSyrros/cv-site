import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ContactMeWrapper = styled.section`
  padding: 3%;
  background: ${({ theme }) => theme.contactBackground};
`;

export const MainWrapper = styled.div`
  padding-bottom: 15%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  //#profile{
  //  border-radius: 50%;
  //  top: 50%;
  //  left: 50%;
  //  transform: translate(-50%, -50%);
  //}
`;

export const ContactInfo = styled.div`
  padding-bottom: 10%;
  h2{
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    text-align: center;
  }
`;

export const ContactLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: justify;
  align-items: center;
  font-size: var(--fs-small);
  padding-left: 21%;
`;

export const ContactLogo = styled(FontAwesomeIcon)`
  margin-right: 2%;
`;

export const MadeWithLove = styled.span`
  font-size: var(--fs-xsmall);
  text-align: center;
  display: block;
` ;

export const LoveLogo = styled(FontAwesomeIcon)`
  animation: pound .35s infinite alternate;
  @keyframes pound {
    to {
      transform: scale(1.1)
    }
  }
`;
export const StyledPar = styled.p`
  &:hover{
    transition: 0.3s ease-in;
    color: #F00001;
  }
`;

export const InfoBox = styled.div`
  background: ${({ theme }) => theme.contactObjColor};
  padding: 2%;
  border-radius: 12px;
  box-shadow: -5px -5px 30px 5px #fe5848, 5px 5px 30px 5px #006792;
  #halo{
    position: relative;
    & >* {
      position: absolute !important;
      padding: 0!important;
      margin:0!important;
    }
    text-align: center!important;
    }
  #profile{
    border-radius: 50%;
    left: 50%!important;
    top: 50%!important;
    transform: translate(-50%, -50%)!important;
  }
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.basicColor};
    &:hover{
      cursor: pointer;
      transition: 0.3s ease-in;
      color: #0072b1;
    }
`;

export const StyledForm = styled.form`
  background: ${({ theme }) => theme.contactObjColor};
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 15%;
    width: 89%;
  }
  padding: 1%;
  align-items: stretch;
  border-radius: 10px;
  box-shadow: -5px -5px 30px 5px #397b68, 5px 5px 30px 5px #006792;
  min-width: 40%;
`;
export const StyledInput = styled.input`
  padding: 1%;
  margin: 2%;
  border-radius: 10px;

`;
export const SubmitButton = styled.button`
  margin: 2%;
  color: white;
  border: 0;
  cursor: pointer;
  border-radius: 20px;
  padding: .5em 1.25em;
  background: linear-gradient(90deg, #397b68, #073a66, #006792);
  background-size: 300%;
  background-position: left;
  transition: background-position 950ms;
  ${ (props) => props.disabled === true && css`
    background: dimgray;
    cursor: wait;
  ` }
  &:hover {
    background-position: right;
  }
  
`;
export const ErrorMessage = styled.span`
  color: red;
  margin-left: 2%;
`;

export const FormTextArea = styled.textarea`
  height: 100px;
  margin: 2%;
  border-radius: 10px;
  max-height: 30%;
  max-width: 90%;
  @media only screen and (max-width: 768px) {
    max-width: 85%;
    max-height: 50%;

  }
`;