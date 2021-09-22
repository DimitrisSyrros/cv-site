import styled, {css} from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  #loader-logo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    fill: transparent;
    animation: fill-to-white 0.5s ease forwards 2s;
    #one{
      stroke-dasharray: 198px;
      stroke-dashoffset: 198px;
      animation: line-animation 2s ease forwards, fill-to-white 0.5s ease forwards 2s;
     // animation: fill-to-white 3s ease forwards;
    }
    //s-fill
    #two{
      fill: transparent;
      animation: fill-to-white 0.5s ease forwards 2s;
    }
    //s-outline
    #three{
      fill: transparent;
      animation: fill-to-white 2s ease forwards, fill-to-white 0.5s ease forwards 2s, fill-to-black 0.5s ease forwards 2s;
    }
    #four{
      stroke-dasharray: 388px;
      stroke-dashoffset: 388px;
      animation: line-animation 2s ease forwards, fill-to-white 0.5s ease forwards 2s;
    }
    #five{
      stroke-dasharray: 331px;
      stroke-dashoffset: 331px;
      animation: line-animation 2s ease forwards, fill-to-white 0.5s ease forwards 2s;
    }
    #six{
      fill: transparent;
      animation: fill-to-white 0.5s ease forwards 2s;
    }
    #seven{
      stroke-dasharray: 1395px;
      stroke-dashoffset: 1395px;
      animation: line-animation 2s ease forwards, fill-to-white 0.5s ease forwards 2s;
    }
  }
  @keyframes line-animation{
    to{
      stroke-dashoffset: 0px;
    }
  }
  @keyframes fill-to-white{
  to{
    fill: white;
  }
  }
  @keyframes fill-to-black{
    to{
      fill: black;
    }
  }
`;