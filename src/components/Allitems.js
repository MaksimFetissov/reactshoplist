import React from 'react';

function AllItems({ items, addToCart }) {
  return (
    <div className="all-items">
      <h2>All Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllItems;