
import React, { useEffect, useState } from "react";

const Recipe = ({ addToCart }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(response => response.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {recipes.map(recipe => (
                <div key={recipe.recipe_id} className="cards-container shadow-2xl p-5">
                    <div className="card lg:w-[300px] border-2xl">
                        <img className="rounded-xl" src={recipe.recipe_image} alt={recipe.recipe_name} />
                        <h1 className="font-bold text-black mb-4 mt-3">{recipe.recipe_name}</h1>
                        <p className="text-black opacity-60 mb-4">{recipe.short_description}</p>
                        <p className="font-semibold text-black mb-2">Ingredients: {recipe.ingredients.length}</p>
                        <ul className="mb-4">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <div className='flex mr-20 gap-4 mb-5'>
                            <div className='flex gap-1'>
                                <img className="" src="../src/assets/Frame (9).png" alt="" />
                                <p>{recipe.preparing_time}</p>
                            </div>
                            <div className='flex gap-1'>
                                <img src="../src/assets/Frame (10).png" alt="" />
                                <p>{recipe.calories}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => addToCart(recipe)} className='btn bg-[#0be58a] text-black'>Want to Cook</button>
                </div>
            ))}
        </div>
    );
};

export default Recipe;
