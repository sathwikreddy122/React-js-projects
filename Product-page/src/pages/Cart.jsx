import React from "react";

export const Cart = ({ data, filterCartProducts, removeFromCart, sortByPriceCart }) => {
  return (
    <div>
      <h1>Cart page</h1>
      <div className="category">
        <label>Select Category : </label>
        <select
          name="category"
          id="category"
          onChange={(e) => filterCartProducts(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Kitchen Appliances">Kitchen Appliances</option>
          <option value="Home Decor">Home Decor</option>
          <option value="Electronics">Electronics</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Fitness Equipment">Fitness Equipment</option>
        </select>

        <label>Sort by Price : </label>
        <select
          name="sort"
          id="sort"
          onChange={(e) => sortByPriceCart(e.target.value)}
        >
          <option value="low-to-high">low-to-high</option>
          <option value="high-to-low">high-to-low</option>
        </select>
      </div>

      <div className="container">
        {data.map((element, index) => {
          return (
            <div className="productCard" key={index}>
              <img src={element.image} alt="" />
              <p>{element.title}</p>
              <p>{element.price}</p>
              <p>{element.category}</p>
              <p>{element.description}</p>
              <button onClick={() => removeFromCart(index)}>Remove to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
