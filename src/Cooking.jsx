const Cooking = ({ cart }) => {

    return (
        <div>
            <h1 className='text-black font-bold text-center'>Want To Cook: <span>{cart.length}</span></h1>
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
                        <tr key={index} className="hover">
                            <td>{index + 1}</td>
                            <td>{item.recipe_name}</td>
                            <td>{item.preparing_time}</td>
                            <td>{item.calories}</td>
                            <td><button className='bg-[#0be58a] rounded-full p-1'>Preparing</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cooking;

