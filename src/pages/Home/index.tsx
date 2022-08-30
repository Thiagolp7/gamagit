import { GamaLogo } from "../../components/Logo/GamaLogo";
import { SearchBar } from "../../components/SearchBar";
import { SearchResult } from "../../components/SearchResults";
import { Loading } from "../../components/Loading";
import { useLoading } from "../../hooks/useLoading";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";


export function Home(){
  const { isLoading } = useLoading();

  return (
    <Container>
      <a href="/">
        <GamaLogo/>
      </a>
      <SearchBar/>
      {
        isLoading 
        ? <Loading/>
        : <SearchResult />
      }
    </Container>
  )
}