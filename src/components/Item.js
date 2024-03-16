import React, { useState } from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)
  const liClass = inCart ? "in-cart": "";
  const buttonText = inCart ? "Remove From Cart":"Add to Cart";

  function clickHandler() {
    setInCart((inCart)=>!inCart)

  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {clickHandler} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
