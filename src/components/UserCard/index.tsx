import { useGithubUser } from "../../hooks/useGithubUser";
import { Container, UserAvatar, UserInfo, UserMoreInfo } from "./styles";

import { FaGithub } from 'react-icons/fa'
import { BiEnvelope, BiLink, BiMap } from 'react-icons/bi'
import { BsArrowBarDown } from 'react-icons/bs'
import { useState } from "react";

export function UserCard(){
  const { userData } = useGithubUser();
  const [ showMoreUserInfo, setShowMoreUserInfo ] = useState(false);

  return (
    <Container>
      <UserAvatar>
        <img src={userData.avatar_url} alt={`Foto de ${userData.name} no github.`} />
      </UserAvatar>
      <UserInfo>
        <header>
          <h2>{userData.name ?? userData.login}</h2>
          <a href={userData.html_url} target="_blank"> 
            <FaGithub/>
            {userData.login}
          </a>
        </header>
        <UserMoreInfo showMore={showMoreUserInfo}>
          <li>{userData.bio}</li>
          <li>
            { userData.location && <BiMap/>}
            { userData.location ?? userData.location}
          </li>
          <li>
            { userData.email &&  <BiEnvelope/>}
            { userData.email ?? userData.email}
          </li>
          <li>
            { userData.blog &&  <BiLink/>}
            { 
              userData.blog 
              ? <a href={userData.blog} target="_blank">
                  { userData.blog }
                </a>
              : ''
            }
          </li>
          <li>
            <button onClick={(e) => {setShowMoreUserInfo(!showMoreUserInfo)}}>
              <BsArrowBarDown/>
            </button>
          </li>
        </UserMoreInfo>
      </UserInfo>
    </Container>
  )
}