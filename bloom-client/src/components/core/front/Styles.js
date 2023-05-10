import styled from "styled-components";

const Container = styled.a`
  font-weight: 700;
  display: flex;
  align-items: flex-start;
  transition: 0.2s ease;
  transition: 0.3s;
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  .text {
    padding-top: 15px;
    height: 40px;
  }
  .icon {
    i {
      transform: rotate(-20deg);
    }
    font-size: 2rem;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    animation: far 2.8s linear 0s infinite;
  }
  @keyframes far {
    0% {
      transform: scale(1);
    }
    18% {
      transform: scale(1);
    }
    20% {
      transform: scale(0.85);
    }
    22% {
      transform: scale(0.9);
      opacity: 1;
    }
    28% {
      transform: scale(1.2);
      opacity: 0.6;
    }
    38% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
`;
export const ShoutElm = styled(Container)`
  color: tomato;
  &:hover {
    color: tomato;
  }
`;
export const EncourageElm = styled(Container)`
  color: gold;
  &:hover {
    color: gold;
  }
`;
export const GreetElm = styled(Container)`
  color: seagreen;
  &:hover {
    color: seagreen;
  }
`;
