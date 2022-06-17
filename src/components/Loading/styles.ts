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
      margin-left: 8px;
    }
  }

  div:nth-child(1){
    animation: loading .5s alternate infinite;
  }

  div:nth-child(2){
    animation: loading .5s alternate infinite;
    animation-delay: .16s;
  }

  div:nth-child(3){
    animation: loading .5s alternate infinite;
    animation-delay: .32s;
  }

  @keyframes loading {
    from {
      transform: scaleX(1.25);
    }
    to {
      transform: translateY(-25px) scale(1);
    }
  }

  @media screen and (max-width:480px) {
    div {
      width: 10px;
      height: 10px;

      & + div {
        margin-left: 5px;
      }
    }
  }
`