import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ContactMeWrapper = styled.section`
  padding: 3%;
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
  #profile{
    border-radius: 50%;
  }
`;

export const ContactInfo = styled.div`
  padding-bottom: 10%;
`;

export const ContactLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: justify;
  align-items: center;
  font-size: 0.8rem;
  padding-left: 21%;
`;

export const ContactLogo = styled(FontAwesomeIcon)`
  margin-right: 2%;
`;

export const StyledPar = styled.p`
  &:hover{
    transition: 0.3s ease-in;
    color: #F00001;
  }
`;

export const InfoBox = styled.div`
  padding: 2%;
  border-radius: 12px;
  box-shadow: -5px -5px 30px 5px #fe5848, 5px 5px 30px 5px #006792;
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: white;
    &:hover{
      cursor: pointer;
      transition: 0.3s ease-in;
      color: #0072b1;
    }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 15%;
    width: 89%;
    height: 90%;
  }
  padding: 1%;
  align-items: stretch;
  border-radius: 10px;
  box-shadow: -5px -5px 30px 5px #397b68, 5px 5px 30px 5px #006792;
  width: 40%;
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
  max-width: 34%;
  @media only screen and (max-width: 768px) {
    max-width: 85%;
    max-height: 50%;

  }
`;