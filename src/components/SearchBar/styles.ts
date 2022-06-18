import styled from 'styled-components'

export const Container = styled.form`
  position: relative;
  width: 100%;
  border-radius: 10px;
  background-color: var(--green);

  input {
    width: 100%;
    color: var(--purple);
    border-radius: inherit;
    padding: 1rem 5rem 1rem 2rem;
    border: solid 2px var(--gray-400);
    font-size: 1.8rem;
    position: relative;

    &::placeholder,
    &:-moz-placeholder,
    &::-webkit-input-placeholder {
      color: var(--black);
    }

    &:focus {
      border: solid 2px var(--green);
      outline: none;

      &,
      & ~ button {
        transition: .1s ease-in;
        transform: translate(0.4rem, -0.4rem);
      }
    }
  }

  button {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    bottom: 0;
    border: none;
    background-color: transparent;
    border-radius: inherit;
    padding: 0 1rem;

    display: flex;
    justify-content: center;
    align-items: center;


    height: 100%;

    svg {
      width: 30px;
      height: 30px;
      color: var(--purple);
    }

  }

  @media screen and (max-width:480px) {
    input {
      font-size: 1.5rem;

      &:focus {

        &,
        & ~ button {
          transition: .1s ease-in;
          transform: translate(0.3rem, -0.3rem);
        }
      }
    }

    button {
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }


`