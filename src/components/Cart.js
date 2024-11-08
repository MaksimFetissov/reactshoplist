import React from 'react';
import CartItem from './CartItem';

function Cart({ items, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <CartItem 
              key={index} 
              item={item} 
              onRemove={() => removeFromCart(index)} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;