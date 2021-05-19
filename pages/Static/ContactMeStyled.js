import styled from 'styled-components';

export const ContactMeWrapper = styled.section`
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  #profile{
    border-radius: 50%;
  }
`;

export const ContactInfo = styled.div`
  text-align: center;
  padding-bottom: 10%;
`;

export const StyledPar = styled.p`
  &:hover{
    transition: 0.3s ease-in;
    color: #F00001;
  }
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: white;
  font-style: italic;
    &:hover{
      cursor: pointer;
      transition: 0.3s ease-in;
      color: #0072b1;
    }
`;