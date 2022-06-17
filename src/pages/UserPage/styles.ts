import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 100%;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`

export const BackPageBtn = styled.button`
  padding: 1rem;
  border: none;
  background-color: transparent;
  border-radius: 5px;
  transition: all .3s ease-in;
  align-self: flex-start;

  &:hover {
    background-color: var(--gray-100);
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--gray-700);
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
`