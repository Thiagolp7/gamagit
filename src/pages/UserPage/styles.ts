import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 100%;
  padding: 3rem;
`

export const UserCard = styled.div`
  width: 100%;
  max-height: 200px;
  background-color: var(--white);

  padding: 2.5rem;

  border-radius: 10px;
  border: solid 2px var(--gray-500);
  
  display: flex;
  gap: 3rem;
  align-items: center;

  position: relative;
  
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--pink);
    border-radius: inherit;
    position: absolute;
    bottom: -8px;
    left: -8px;
    z-index: -1;
  }

  
`
export const UserAvatar = styled.div`
  width: 15rem;
    height: 15rem;
    background-color: gray;
    border-radius: 10px;
    overflow: hidden;
    
    img {
      width: inherit;
      height: inherit;
      border-radius: inherit;
    }

`

export const UserInfo = styled.div`
  align-self: flex-start;

  flex: 1;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 2.5rem;
      color: var(--purple);
    }

    a {
      font-size: 1.5rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: var(--purple);

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  

  ul {
    margin-top: 2rem;
    
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      list-style: none;
      font-size: 1.6rem;
      color: var(--gray-700);

      svg {
        color: var(--purple);
        width: 15px;
        height: 15px;
      }

      a {
        text-decoration: none;
        color: inherit;
        
        &:hover{
          text-decoration: underline;
          color: var(--pink);
        }
      }

      & + li {
        margin-top: .5rem;
      }
    }
  }

`