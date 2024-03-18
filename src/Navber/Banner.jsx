const Banner = () => {
    return (
        <div>
         

            <div className="hero lg:w-11/12 lg:mx-auto lg:h-[600px] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/9hnST8s/Banner.png)' }}>
                <div className="hero-overlay rounded-xl bg-opacity-20"></div>
                <div className=' text-center mb-4'>
                    <h1 className='lg:text-4xl font-bold text-white lg:mb-5 mb-2'>Discover an exceptional cooking <br />class tailored for you!</h1>
                    <p className="text-white">Welcome to our Recipe Calories.  We are getting calories and quality food here. thank you</p>
                    <div className="lg:mt-5 mt-2">
                        <button className="btn bg-[#0be58a] border-none text-black rounded-full mr-3">Explore Now</button>
                        <button className="btn btn-outline rounded-full text-white">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;