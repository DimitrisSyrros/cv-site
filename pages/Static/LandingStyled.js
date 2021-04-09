import styled, {css} from 'styled-components';

export const LandingContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: 22%;
  align-self: center;
  margin-top: 18%;
  height: 100vh;
`;

export const Greeting = styled.h2`
  overflow: hidden;
  border-right: .15em solid #ff7979;
  white-space: nowrap;
  margin: 0;
  letter-spacing: .15em;
  animation: typing 0.9s steps(40, end), blink-caret 0.75s step-end infinite;
  
  @keyframes typing {
    from {
      width: 0
    }
    to {
      width: 35%;
    }
  }

  
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent
    }
    50% {
      border-color: #ff7979;
    }
  }
`;

export const Introduction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: xxx-large;
  font-weight: 700;
  white-space: nowrap;
  p {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 2%;
  }
`;

export const Name = styled.p`
  color: #ffb400;
`;