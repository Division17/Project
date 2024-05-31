import React from 'react'
import { Link } from 'react-router-dom'

const NavEle = () => {
  return (
    <>
    <div className='flex justify-center items-center'>
        <ul className='flex justify-between gap-8 font-cusfon items-center'>
          <Link to="/"><li className='hover:text-gray-500 hover:scale-110 cursor-pointer'>Home</li></Link>  
          <Link to="/Working"><li className='hover:text-gray-500 hover:scale-110 cursor-pointer'>Working</li></Link>
           <Link to="/contact"> <li className='text-nowrap hover:text-gray-500 hover:scale-110 cursor-pointer'>Contact Us</li></Link>
        </ul>
    </div>
    </>
  )
}

export default NavEle