import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    width: 8rem;
    height: 8rem;
    fill: var(--green);
  }

  p {
    font-size: 5rem;
    font-weight: bold;
    color: var(--green);
    text-transform: uppercase;
    
    span {
      color: var(--purple);
      text-transform: none;
    }
  }

  @media screen and (max-width:480px) {
    svg {
      width: 5rem;
      height: 5rem;
    }

    p {
      font-size: 3.5rem;
    }
  }
`