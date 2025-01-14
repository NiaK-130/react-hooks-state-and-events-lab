import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLight, setIsLight] = useState(false);
  const [items, setItems] = useState(itemData);
  

  function handleClick(){
    setIsLight((isLight) => !isLight);
  }

  


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isLight ? "App light" : "App dark"
 

  return (
    <div className={appClass} >
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}> {isLight ? "Light Mode":"Dark Mode"} </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
