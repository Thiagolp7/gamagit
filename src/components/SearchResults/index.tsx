import { useGithubSearchUser } from "../../hooks/useGithubSearchUser";
import { ResultCard } from "./ResultCard";
import { Container } from "./styles";

export function SearchResult(){
  const { searchResults } = useGithubSearchUser();

  return (
    <Container>
      {
        searchResults.map((userData) => {
          return(
            <ResultCard key={userData.login} user={userData}/>
          )
        })
      }

    </Container>
  )
}