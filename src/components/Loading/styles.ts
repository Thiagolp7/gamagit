import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--purple);
    transition: background-color .3s ease-in;

    & + div {
      margin-left: 5px;
    }
  }

  div:nth-child(1){
    animation: loading .6s infinite;
  }

  div:nth-child(2){
    animation: loading .6s infinite;
    animation-delay: .2s;
  }

  div:nth-child(3){
    animation: loading .6s infinite;
    animation-delay: .4s;
  }

  @keyframes loading {
    50% {
      transform: translateY(-13px);
    }
    100% {
      transform: none;
    }
  }
`