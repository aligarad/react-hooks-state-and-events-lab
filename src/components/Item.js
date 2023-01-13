import React, {useState} from "react";

function Item({ name, category }) {

     const [inCart, addCart] = useState(false)


     function addToCart(){
      addCart((inCart) =>! inCart)
     }


     const cartState = inCart ? "in-cart" : ""
     const cartStateText = inCart ? "Remove From Cart" : "Add to Cart"

  return (
      <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button onClick={addToCart} className="add">{cartStateText}</button>
      </li>
  
  );
}

export default Item;
