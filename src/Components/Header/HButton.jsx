import React from 'react'
import { Link } from 'react-router-dom'
const HButton = () => {
  return (
   <> 
   <div className= 'flex justify-center items-center'>
    <Link to="/book">
    <button className='border-2 border-gray-700 px-2 py-1 rounded-xl shadow-lg hover:focus hover:ring-2 hover:ring-gray-700 hover:bg-gray-700 hover:text-white hover:ring-offset-2 hover:font-semibold'>
          Book Now
     </button>
    </Link>
  
   </div>
     
   </>
  )
}

export default HButton