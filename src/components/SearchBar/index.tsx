import { Container } from "./styles";
import { BiSearchAlt } from 'react-icons/bi'
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGithubUser } from "../../hooks/useGithubUser";
import { apiSearchUser } from "../../services/githubApi";
import { useGithubSearchUser } from "../../hooks/useGithubSearchUser";


export function SearchBar(){
  const [userInput, setUserInput] = useState('');
  const { searchResults, searchUsers } = useGithubSearchUser();
  const {getUserApiData} = useGithubUser();
  const navigate = useNavigate();

  async function handleSearchUser(event:FormEvent){
    event.preventDefault();
    searchUsers(userInput);
  }

  return (
    <Container onSubmit={e => handleSearchUser(e)}>
      <input 
        type="text" 
        placeholder="Digite um usuário do Github..." 
        value={userInput}
        onChange={(e => setUserInput(e.target.value))}
        />
      <button type="submit">
        <BiSearchAlt/>
      </button>
    </Container>
  )
}


