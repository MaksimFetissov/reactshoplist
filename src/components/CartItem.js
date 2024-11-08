import React from 'react';

function CartItem({ item, onRemove }) {
  return (
    <li>
      {item.name} ({item.quantity}x) <button onClick={onRemove}>Remove</button>
    </li>
  );
}

export default CartItem;