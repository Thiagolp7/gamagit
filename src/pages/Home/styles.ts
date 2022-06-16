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
  padding: 3rem 1.5rem;
 
  margin: 0 auto;

  @media screen and (max-width:480px) {
    gap: 2.5rem;
  }
`