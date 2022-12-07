import styled from "styled-components";
import Cineflex from "./components/Cineflex";
import GlobalSyle from "./styles/GlobalStyle";

function App() {
  return (
    <Body>
      <GlobalSyle />
      <Cineflex />
    </Body>
  );
}

export default App;

const Body = styled.body`
  width: 375px;
  margin: auto;
`;
