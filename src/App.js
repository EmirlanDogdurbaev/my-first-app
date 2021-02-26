import React from "react";
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld";
import Chunga from "./components/Chunga";
import Hochu from "./components/Hochu";
import Books from "./components/Books";
import Song from "./components/Song";
import Length from "./components/Length";
import Uppercase from "./components/Uppercase";
import LowerCase from "./components/LowerCase";
import Age from "./components/Age";
import Year from "./components/Year";
import Water from "./components/Water"
import Sum from "./components/Sum";
import Bigger from "./components/Bigger";


function App() {
  return (
    <div className="App">
        <HelloWorld />
        <ByeWorld />
        <Chunga />
        <Hochu v="more" />
        <Hochu v="kosmos" />
        <Books name="Harry Potter" author="J.R." />
        <Song name="Somoeone you loved" artist="Lewis Capaldi" />
        <Length string="Example string " />
        <Length string="Hello World " />

        <Uppercase>hello world</Uppercase>
        <LowerCase>HELLO WORLD</LowerCase>

        <Age year={1989} />
        <Age year={1900} />
        <Year age={17} />


        <Water frozen={false} />
        <Water frozen={true} />

        <Sum sum={5} sum1={15}/>
       

        <Bigger a={5} b={10} />
    </div>
  );
}

export default App;
