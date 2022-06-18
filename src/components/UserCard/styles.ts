import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: var(--white);
  padding: 2.5rem;

  border-radius: 10px;
  border: solid 2px var(--gray-500);
  
  display: flex;
  gap: 3rem;
  align-items: center;

  position: relative;
  --transform: -8px;
  top: var(--transform);
  right: var(--transform);
  
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--pink);
    border-radius: inherit;
    position: absolute;
    bottom: var(--transform);
    left: var(--transform);
    z-index: -1;
  }

  @media screen and (max-width: 820px) {
    padding-top: 4.5rem;
  }

  @media screen and (max-width: 480px) {
    position: relative;
  }
  
`
export const UserAvatar = styled.div`
  width: 100%;
  height: 100%;
  max-width: 15rem;
  max-height: 15rem;
  background-color: gray;
  border-radius: 10px;
  overflow: hidden;
    
  img {
    width: inherit;
    height: inherit;
    border-radius: inherit;
  }

  @media screen and (max-width: 820px) {
    position: absolute;
    top: -4rem;
    right: 1.5rem;

    max-width: 8rem;
    max-height: 8rem;
    border-radius: 50%;
    border: solid 2px var(--gray-500);
  }

`

export const UserInfo = styled.div`
  align-self: flex-start;
  flex: 1;
  overflow: hidden;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: .5rem;

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

  @media screen and (max-width: 480px){
    header {
      flex-direction: column;
      align-items: flex-start;

      h2 {
        font-size: 1.8rem;
      }
    }
  }
`

interface UserMoreInfoProps {
  showMore: boolean;
}

export const UserMoreInfo = styled.ul<UserMoreInfoProps>`
  margin-top: 1rem;
  
  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    font-size: 1.6rem;
    color: var(--gray-700);
    transition: .2s ease-in;

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

  li:nth-child(1) {
    margin-bottom: 1rem;
  }

  li:last-child{
    display: none;
    justify-content: center;
    margin-top: 2rem;
    
    button {
      width: 100%;
      background: transparent;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      transition: .2s ease-in;

      &:hover{
        background-color: var(--gray-100);
      }

      svg {
        width: 25px;
        height: 25px;
        transition: .3s ease-in;
      }
    }

  }

  @media screen and (max-width: 630px){
    

    li:last-child{
      display: flex;
      height: initial;
    }

    ${({showMore}) => {
      return (showMore
      ? 
      `
        li {
          display: flex;
        }

        li:last-child{
          button {
            svg {
              transform: rotate(180deg);
            }
          }
        }
      `
      : 
      `
        li {
          display: none;
        }
      `)

    }}
  }
`