import { SearchBar } from "../../components/SearchBar";
import { GamaLogo } from "../../components/Logo/GamaAcademyLogo";
import { Container } from "./styles";
import { SearchResult } from "../../components/SearchResults";
import { Loading } from "../../components/Loading";


export function Home(){
  return (
    <Container>
      <GamaLogo/>
      <SearchBar/>
      <Loading/>
      <SearchResult />
    </Container>
  )
}