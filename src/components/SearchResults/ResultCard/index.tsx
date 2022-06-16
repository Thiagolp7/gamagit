import { Container, UserAvatar } from "./styles";
import { IoIosArrowDropright } from 'react-icons/io'
import { useGithubUser } from "../../../hooks/useGithubUser";
import { useNavigate } from "react-router";

interface IUser {
  avatar_url: string;
  login: string;
  url: string;
}

interface ResultCardProps{
  user: IUser;
}

export function ResultCard({ user }: ResultCardProps){
  const { getUserApiData } = useGithubUser()
  const navigate = useNavigate();

  function HandleGoToUSerPage(user: string){
    getUserApiData(user);
    navigate("./user-page", { replace: true });
  }

  return (
    <Container onClick={() => HandleGoToUSerPage(user.login)}>
      <div>
        <UserAvatar>
          <img src={ user.avatar_url } alt={`Foto de ${user.login}`} />
        </UserAvatar>
        <h2>{ user.login }</h2>
        <IoIosArrowDropright/>
      </div>
    </Container>
  )
}