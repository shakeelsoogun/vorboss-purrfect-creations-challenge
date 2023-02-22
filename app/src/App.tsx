import styled from "styled-components";
import "./App.css";
import Metrics from "./Metrics";

const Header = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: 2em;
  line-height: 1.1em;
  margin: 0;
`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.boxColor};
  padding: 1.5em;
`;

const App = () => {
  return (
    <div>
      <Nav>
        <Header>Purrfect Creations Dashboard</Header>
      </Nav>
      <main>
        <Metrics />
        <div className="details"></div>
      </main>
    </div>
  );
};

export default App;
