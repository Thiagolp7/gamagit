import { Container, RepoCard, RepoList } from "./styles";

import { BiGitBranch } from 'react-icons/bi'
import { useGithubUser } from "../../hooks/useGithubUser";


export function UserRepositories(){
  const  { userRepositories } = useGithubUser();
  
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
        { userRepositories.map((repo) =>{
          return (
            <RepoCard key={repo.name}>
              <a 
                href={repo.html_url} 
                target='_blank'
                title={`Veja ${repo.name} no Github.`}
              >
                <div>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                </div>
              </a>
           </RepoCard>
          )
        })}
      </RepoList>
    </Container>
  )
}