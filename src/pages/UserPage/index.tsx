import { useGithubUser } from "../../hooks/useGithubUser";
import { Container, UserAvatar, UserCard, UserInfo } from "./styles";

import { FaGithub } from 'react-icons/fa'
import { BiEnvelope, BiLink, BiMap } from 'react-icons/bi'

export function UserPage(){
  const { userData } = useGithubUser();
  
  return (
    <Container>
      <UserCard>
        <UserAvatar>
          <img src={userData.avatar_url} alt={`Foto de ${userData.name} no github.`} />
        </UserAvatar>
        <UserInfo>
          <header>
            <h2>{userData.name}</h2>
            <a href={userData.repos_url}> 
              <FaGithub/>
              {userData.login}
            </a>
          </header>
          <ul>
            <li>{userData.bio}</li>
            <li>
              <BiMap/>
              Rio de Janeiro - RJ, Brasil.
            </li>
            <li>
              <BiEnvelope/>
              thiagolp.dev@gmail.com
              </li>
            <li>
              <BiLink/>
              <a href="https://www.linkedin.com/in/thiagoluizps/" target="_blank">
                https://www.linkedin.com/in/thiagoluizps/
              </a>
            </li>
            
          </ul>
        </UserInfo>
      </UserCard>
    </Container>
  )
}