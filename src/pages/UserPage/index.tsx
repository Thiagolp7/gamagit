import { UserCard } from "../../components/UserCard";
import { UserRepositories } from "../../components/UserRepositories";
import { BackPageBtn, Container, LoadingContainer } from "./styles";

import { BiArrowToLeft } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useLoading } from "../../hooks/useLoading";
import { GamaLogo } from "../../components/Logo/GamaLogo";

export function UserPage(){
  const navigate = useNavigate();
  const { isLoading } = useLoading();

  function HandleBackToHome(){
    navigate('/', { replace: true })
  }

  return (
    <Container>
      {
        isLoading
        ? <LoadingContainer>
            <GamaLogo />
            <Loading/>
          </LoadingContainer> 
        : <>
            <BackPageBtn onClick={HandleBackToHome}>
              <BiArrowToLeft/>
            </BackPageBtn>
            <UserCard/>
            <UserRepositories/>
         </>
      }
    </Container>
  )
}