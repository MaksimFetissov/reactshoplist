import React, { useState } from 'react';
import './style.scss';
import AllItems from './components/Allitems';
import Cart from './components/Cart';

function App() {
  const allItems = ['Milk', 'Bread', 'Cheese', 'Eggs', 'Butter', 'Juice', 'Coffee'];
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { name: item, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
    } else {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
  };

  return (
    <div className="shopping-app">
      <h1>Shopping List</h1>
      <AllItems items={allItems} addToCart={addToCart} />
      <Cart items={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;