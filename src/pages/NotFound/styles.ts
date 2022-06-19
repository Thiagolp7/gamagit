import styled from "styled-components";


export const Container = styled.main`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;

    svg {
      width: 150px;
      height: 150px;
    }

    header {
      padding: 1rem 2rem;

      h1 {
        font-size: 4rem;
        color: var(--purple);
      }

      p {
        font-size: 2rem;
        margin-top: .5rem;
        color: var(--gray-700);

        a {
          &:hover{
            color: var(--pink);
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {

    div {
      svg {
        width: 100px;
        height: 100px;
      }

      header {
        h1 {
          font-size: 2.3rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
    
  }

`