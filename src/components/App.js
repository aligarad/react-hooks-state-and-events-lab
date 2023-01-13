import React from "react";
import React, {useState}  from "react"
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isLight, setIsDark] = useState(false)
  console.log({isLight, setIsDark})
  

  function changeBgColor (){
    setIsDark(!isLight)
    
  }

    const appClass = false ? "App dark" : "App light"
    const appClass = isLight ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
        <button onClick={changeBgColor}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
