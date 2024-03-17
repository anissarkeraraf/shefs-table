import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Cooking from './Cooking';
import Navber from './Navber/Navber';
import Current from './Current';

const App = () => {
  const [cart, setCart] = useState([]);
  const [prepering, setPrepering] = useState([]);


  const addToCart = (recipe) => {
    setCart(prevCart => [...prevCart, recipe]);
  };


  const handleToCurrentPreparing = (item) => {
    setCart((prevCart) => prevCart.filter((recipe) => recipe !== item));
    setPrepering((prevCart) => [...prevCart, item]);
  };

  const getRecipeIdsFromCart = () => {
    const recipe_ids = cart.map(item => item.recipe_id);
    return recipe_ids;
  };


  useEffect(() => {
    getRecipeIdsFromCart();
  }, [cart]);

  return (

    <div>
      <Navber></Navber>
      <div className='lg:flex justify-around'>
        <div className='mb-20 lg:mb-0'>
          <Recipe getRecipeIdsFromCart={getRecipeIdsFromCart} addToCart={addToCart}></Recipe>
        </div>
        <div className='shadow-2xl h-1/6 lg:w-1/3'>
          <Cooking handleToCurrentPreparing={handleToCurrentPreparing} cart={cart}></Cooking>
          <div>
            <Current prepering={prepering}></Current>
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
