import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Box, Container } from "./styles";

export function Summery() {
  return (
    <Container>
      <Box>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </Box>
      <Box>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>- R$ 500,00</strong>
      </Box>
      <Box className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$ 500,00</strong>
      </Box>
    </Container>
  );
}
