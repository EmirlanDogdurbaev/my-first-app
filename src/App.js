import React from "react";
import List from "./components/List"
import Ol from "./components/Ol"

function App() {
  let richPeople = ["Elon Musk ", "Jef Besos", "Bill Gates"];


  return (
    <div className="App">
     <List items={richPeople} />
     <Ol items={richPeople} />
    </div>
  )
}

export default App;
