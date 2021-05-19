import styled from 'styled-components';

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: 22%;
    margin-top: 8%;
  }
`;

export const Greeting = styled.h2`
  overflow: hidden;
  border-right: .15em solid #ff7979;
  white-space: nowrap;
  margin: 0;
  letter-spacing: .15em;
  animation: typing 0.9s steps(40, end), blink-caret 0.75s step-end infinite;
  width: fit-content;
  
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
  font-size: 36px;
  font-weight: 700;
  white-space: nowrap;
  display: flex;
  p {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 2%;
  }
`;

export const Name = styled.p`
  color: #ffb400;
`;