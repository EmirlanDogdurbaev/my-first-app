import React from "react";
import Reverse from "./components/Reverse";
// import Color from "./components/Color";
// import ColorSliders from "./components/ColorSliders";
// import Countery from "./components/Country";
// import Dollar from "./components/Dollar";
// import Fahranheit from "./components/Fahrenheit";
// import FontSize from "./components/FontSize";
// import Massive from "./components/Massive";
// import Name from "./components/Name"
// import Range from "./components/Range";
import Rotate from "./components/Rotate";
// import Two from "./components/Two";
// import Length1 from "./Length1";

function App() {
  return (
    <div className="App">
      {/* <Name/>
      <Two/>
      <Massive/>
      <Countery/>
      <Length1 />
      <Color  />
      <Range min={0}  max={10} value={5} />
      <Dollar />
      <Fahranheit />
      <FontSize />
      <ColorSliders /> */}
      <Rotate />
      <Reverse />
    </div>
  );
}

export default App;