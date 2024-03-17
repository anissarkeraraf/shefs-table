
import React from "react";

const Cooking = ({ cart, handleToCurrentPreparing }) => {
    return (
        <div>
            <h1 className='text-black font-bold text-center pt-4 pb-3'>Want To Cook: <span>{cart.length}</span></h1>
            <hr className="ml-20 mr-20" />
            <table className='table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Preparation Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index} className="hover bg-[#F9F9F9]">
                            <td>{index + 1}</td>
                            <td>{item.recipe_name}</td>
                            <td>{item.preparing_time}</td>
                            <td>{item.calories}</td>
                            <td><button onClick={() => handleToCurrentPreparing(item)} className='bg-[#0be58a] rounded-full p-1'>Preparing</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cooking;

