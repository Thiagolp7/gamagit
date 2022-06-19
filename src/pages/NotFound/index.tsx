import { GamaLogo } from "../../components/Logo/GamaLogo";
import { Container } from "./styles";

export function NotFound(){
  return (
    <Container>
      <div>
        <GamaLogo onlyImg/>
        <header>
          <h1>Esta página não existe.</h1>
          <p>Verifique sua URL ou volte para a <a href="/">home</a>.</p>
        </header>
      </div>
    </Container>
  )
}