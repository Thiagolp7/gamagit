import { UserCard } from "../../components/UserCard";
import { UserRepositories } from "../../components/UserRepositories";
import { Container } from "./styles";


export function UserPage(){
  return (
    <Container>
      <UserCard/>
      <UserRepositories/>
    </Container>
  )
}