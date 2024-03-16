
import './App.css'
import Navber from './Navber/Navber'
import Recipe from './Recipe'

function App() {



 
  return (
    <>
      <Navber></Navber>

      <div className="main-container lg:flex justify-around">
       <div>
       <Recipe></Recipe>
       </div>
        <div className="current-cooking-container text-3xl">Current Cooking</div>
      </div>

      {/* 
      <div className='w-8/12'>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{ }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>


      </div> */}
    </>
  )
}

export default App
