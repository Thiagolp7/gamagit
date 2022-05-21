import { SearchBar } from "../../components/SearchBar";
import { GamaLogo } from "../../components/Logo/GamaAcademyLogo";
import { Container } from "./styles";
import { useGithubUser } from "../../hooks/useGithubUser";
import { FormEvent } from "react";


export function Home(){
  return (
    <Container>
      <GamaLogo/>
      <SearchBar/>
    </Container>
  )
}