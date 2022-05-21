import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 1000px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 auto;
  
  div:nth-child(2){
    width: 100%;
  }

  @media screen and (max-width:480px) {
    gap: 2.5rem;
  }
`