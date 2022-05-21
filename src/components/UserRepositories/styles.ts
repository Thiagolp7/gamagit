import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-height: 200px;
  

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  
  position: relative;

  header {
    padding: 2rem ;
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
`


export const RepoContainer = styled.div`
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
  }
`