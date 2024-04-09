import styled from "styled-components";
import { Buttons, Display } from "./components";

function App() {

  const Centralize = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
  `;

  const Calculator = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;

    background-color: darkgray;
    border-style: solid;
    border-width: 5px;
    border-radius: 15%;
  `;

  return (
    <Centralize>
      <Calculator>
        <Display />
        <Buttons />
      </Calculator>
    </Centralize>
  );
}

export default App;
