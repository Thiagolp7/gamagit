import { UserCard } from "../../components/UserCard";
import { UserRepositories } from "../../components/UserRepositories";
import { BackPageBtn, Container } from "./styles";

import { BiArrowToLeft } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

export function UserPage(){
  const navigate = useNavigate();

  function HandleBackToHome(){
    navigate('/', { replace: true })
  }

  return (
    <Container>
      <BackPageBtn onClick={HandleBackToHome}>
        <BiArrowToLeft/>
      </BackPageBtn>
      <UserCard/>
      <UserRepositories/>
    </Container>
  )
}