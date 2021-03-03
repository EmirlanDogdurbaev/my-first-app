import React from "react";
import Color from "./components/Color";
import Countery from "./components/Country";
import Massive from "./components/Massive";
import Name from "./components/Name"
import Two from "./components/Two";
import Length1 from "./Length1";



function App() {
  return (
    <div className="App">
      <Name/>
      <Two/>
      <Massive/>
      <Countery/>
      <Length1 />
      <Color value="#abcdef" />
    </div>
  );
}

export default App;