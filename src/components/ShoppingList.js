import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory]= useState("All")


  function handleClick(e){
    setSelectedCategory((selectedCategory)=>selectedCategory = e.target.value)
  
  }
  {/*This worked replacing items.map in the ul, but didn't pass test
  const filteredItems = items.filter((item)=>{
    return selectedCategory === "All" || item.category === selectedCategory;
  })
*/}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onClick = {handleClick}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)
          .map((item)=> (<Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
