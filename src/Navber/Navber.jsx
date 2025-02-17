
const Navber = () => {
    return (
        <div className="lg:m-16 ">
            <div className="navbar bg-base-100 mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mr-10 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl mr-5">PotLuck</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-5">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-2 lg:gap-5 mr-10'>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <img src="https://i.ibb.co/GPm3bt3/Search.png" alt="" />
                                <input type="text" className="grow" placeholder="Search" />

                            </label>
                        </div>
                        <img className='lg:w-1/6' src="https://i.ibb.co/NNFHgQX/Profile-icon.png" alt="" />
                    </div>

                </div>
            </div>
        

           

        </div>
    );
};

export default Navber;