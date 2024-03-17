const Current = ({ prepering }) => {
    console.log(prepering);
    return (
        <div>
            <h1 className="text-black font-bold text-center pt-5 pb-3">Currently cooking: <span>{prepering.length}</span></h1> <hr className="ml-20 mr-20" />
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {prepering.map((prepar, index) => (
                        <tr key={index} className="hover bg-[#F9F9F9] p-3">
                            <td>{index + 1}</td>
                            <td>{prepar.recipe_name}</td>
                            <td>{prepar.preparing_time}</td>
                            <td>{prepar.calories}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Current;