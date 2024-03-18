import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Cooking from './Cooking';
import Navber from './Navber/Navber';
import Current from './Current';
import Banner from './Navber/Banner';

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
      <Banner></Banner>
      <div className='mb-16 text-center'>
        <h1 className='text-4xl font-bold'>Our Recipes</h1>
        <p className='text-black opacity-60 lg:w-[450px] mx-auto mt-4'>You will find calorie rich food recipes at Calories.  List of your favorite and quality dishes in our recipe section</p>
      </div>
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
