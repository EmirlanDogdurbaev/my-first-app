import React from 'react';
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld";
import Chunga from "./components/Chunga";
import Hochu from './components/Hochu';
import Books from './components/Books';
import Song from './components/Song';
import Length from './components/Length';
import Uppercase from './components/Uppercase';
import LowerCase from './components/LowerCase';


function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ByeWorld/>     
      <Chunga />    
      <Hochu v = "more" />  
      <Hochu v = "kosmos" />  
      <Books name = "Harry Potter" author = "J.R." />
      <Song name = "Somoeone you loved" artist = "Lewis Capaldi" />
      <Length string="Example string " />
      <Length string="Hello World " />

      <Uppercase >hello world</Uppercase>
      <LowerCase >HELLO WORLD</LowerCase>
    </div>
  );
}

export default App;
