import { Container } from "./styles";
import { BiSearchAlt } from 'react-icons/bi'
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGithubUser } from "../../hooks/useGithubUser";


export function SearchBar(){
  const [userInput, setUserInput] = useState('');
  const {getUserApiData} = useGithubUser();
  const navigate = useNavigate();

  function handleSearchUser(event: FormEvent){
    event.preventDefault();
    getUserApiData(userInput);
    navigate('/user-page', { replace: true });
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


