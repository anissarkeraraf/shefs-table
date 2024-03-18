import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ addToCart, getRecipeIdsFromCart }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(response => response.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const recipeIdsInCart = getRecipeIdsFromCart();

    const handleAddToCart = (recipe) => {
        const recipeId = recipe.recipe_id;

        if (recipeIdsInCart.includes(recipeId)) {
            toast.error("This recipe is already in your cart!");
        } else {
            addToCart(recipe);
        }
    };

    return (

        <div>
          
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {recipes.map(recipe => (
                    <div key={recipe.recipe_id} className="cards-container shadow-2xl p-5">
                        <div className="card lg:w-[300px] border-2xl">
                            <img className="rounded-xl" src={recipe.recipe_image} alt={recipe.recipe_name} />
                            <h1 className="font-bold text-black mb-4 mt-3">{recipe.recipe_name}</h1>
                            <p className="text-black opacity-60 mb-4">{recipe.short_description}</p>
                            <p className="font-semibold text-black mb-2">Ingredients: {recipe.ingredients.length}</p>
                            <ul className="mb-4 list-disc pl-4">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>

                            <div className='flex mr-20 gap-4 mb-5'>
                                <div className='flex gap-1'>
                                    <img className="" src="../public/images/Time.png" alt="" />
                                    <p>{recipe.preparing_time}</p>
                                </div>
                                <div className='flex gap-1'>
                                    <img src="../public/images/Fire.png" alt="" />
                                    <p>{recipe.calories}</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => handleAddToCart(recipe)} className='btn bg-[#0be58a] text-black'>Want to Cook</button>
                    </div>
                ))}
                <ToastContainer />
            </div>
        </div>
    );
};

export default Recipe;
