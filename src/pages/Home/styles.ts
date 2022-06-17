import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  width: 100%;
  height: 100%;
  max-width: 1000px;
  padding: 3rem 2rem;
 
  margin: 0 auto;

  & > a {
    text-decoration: none;
  }

  @media screen and (max-width:480px) {
    gap: 2.5rem;

    .loading{
      margin-top: 2.5rem;
    }
  }

`