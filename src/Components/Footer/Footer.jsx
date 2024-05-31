import React from 'react'
import CopyR from './CopyR'
import FoEle from './FoEle'

const Footer = () => {
  return (
 <>
   <footer className='flex flex-col w-screen h-2/6 justify-between border-t-2 border-gray-400 text-gray-600 shadow-md'>
       <FoEle/>
      <CopyR/>
   </footer>
 </>
  )
}

export default Footer