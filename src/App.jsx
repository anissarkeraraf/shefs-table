import React, { useState } from 'react';
import Recipe from './Recipe';
import Cooking from './Cooking';
import Navber from './Navber/Navber';

const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add a recipe to the cart
  const addToCart = (recipe) => {
    setCart(prevCart => [...prevCart, recipe]);
  };

  return (

    <div>
      <Navber></Navber>
      <div className='lg:flex justify-around'>
        <div className='mb-20 lg:mb-0'>
          <Recipe addToCart={addToCart}></Recipe>
        </div>
        <div className='shadow-2xl'>
          <Cooking cart={cart}></Cooking>
        </div>
      </div>
    </div>

  );
};

export default App;
