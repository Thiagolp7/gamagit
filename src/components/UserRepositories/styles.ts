import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;

  header {
    margin: 1rem 2rem 0 ;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 2rem;
      color: var(--purple);
    }

    span {
      font-size: 2rem;
      display: flex;
      align-items: center;
      gap: .5rem;
      color: var(--gray-700);

      svg {
        width: 2rem;
        height: 2rem;
        color: var(--purple);
      }
    }
  }

`

export const RepoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem ;
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow: auto;
`

export const RepoCard = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  background-color: var(--pink);
  position: relative;
  
  a {
    width: 100%;
    height: 100%;
    padding: 2.5rem;
    border: solid 2px var(--gray-500);
    border-radius: inherit;
    background-color: var(--white);
    text-decoration: none;
    transition: .1s ease-in;

    &:hover {
      transform: translate(6px, -6px);
    }

    div {
      height: 100%;

      h3 {
        font-size: 18px;
        color: var(--green);
      }
      
      p {
        font-size: 14px;
        margin-top: 1rem;
        color: var(--gray-700);
      }
    }
  }
`