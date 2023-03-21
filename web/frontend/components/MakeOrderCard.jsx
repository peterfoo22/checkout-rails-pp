import React from "react";


export const MakeOrderCard = () => {
  return (
    <div className="test-container">
      <form>
        <label> Product Name</label>
        <input type="text" />
        <label> Product Price</label>
        <input type="text" />
        <label> Product Quantity</label>
        <input type="number" />
      </form>
    </div>
  );
}

//     // Simulate network call, etc.