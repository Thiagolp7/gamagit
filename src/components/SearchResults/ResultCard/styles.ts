import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: var(--pink);
  border-radius: 10px;
  cursor: pointer;
  
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    padding: 1rem ;
    border: solid 2px var(--gray-500);
    border-radius: 10px;
    transition: .1s ease-in;
  }

  h2 {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--purple);
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.8rem;

  }
  
  svg {
    width: 25px;
    height: 25px;
    color: var(--purple);
  }
  
  &:hover{
    & > div {
      transform: translate(5px, -5px);
    }
  }
  
  
`
export const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
  }
`