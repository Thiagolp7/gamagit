import { Container, RepoContainer, RepoList } from "./styles";

import { BiGitBranch } from 'react-icons/bi'

export function UserRepositories(){
  return (
    <Container>
      <header>
        <h2>Repositories</h2>
        <span>
          <BiGitBranch/>
          30
        </span>
      </header>
      <RepoList>
        <RepoContainer>
          <a href="" target='_blank'>
            <div>
              <h3>Nome do Repo</h3>
              <p>Descrição</p>
            </div>
          </a>
        </RepoContainer>
        <RepoContainer>
          <a href="" target='_blank'>
            <div>
              <h3>Nome do Repo</h3>
              <p>Descrição</p>
            </div>
          </a>
        </RepoContainer>
      </RepoList>
    </Container>
  )
}