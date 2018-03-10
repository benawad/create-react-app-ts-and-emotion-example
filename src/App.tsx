import * as React from "react";
import styled from "react-emotion";
import "./App.css";

const PinkDiv = styled.div`
  color: pink;
  flex: 1;
`;

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={require("./logo.svg")} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload.
    </p>
    <PinkDiv>hello</PinkDiv>
  </div>
);

export default App;
