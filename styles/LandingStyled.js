import styled from 'styled-components';

export const LandingContainer = styled.div`
  height: 100vh;
  background: url("../../Landing_page.jpg") no-repeat no-repeat center center;
  background-size: cover;
  @media only screen and (max-width: 425px) {
    background: url("../../Landing_page.jpg") no-repeat no-repeat center right;
  }
`;

export const BackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
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
  color: #f9c959;
`;