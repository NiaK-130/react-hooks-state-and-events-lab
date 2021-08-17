import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);


  function handleAddToCartClick(){
    setIsInCart((isInCart) => !isInCart);
  }


  const cartClass = isInCart ? "in-cart" : ""


  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleAddToCartClick} className={isInCart ? "remove":"add"}> {isInCart ? "Remove from":"Add to"} Cart </button>
    </li>
  );
}

export default Item;
