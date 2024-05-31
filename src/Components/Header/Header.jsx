import React from 'react'
import Logo from './Logo'
import NavEle from './NavEle'
import HButton from './HButton'
function Header() {
  return (
    <header className='h-1/6 w-screen shadow-md flex justify-between item-center px-10'>  
    <Logo/>
    <NavEle/>
     <HButton/>
    </header>  
)
}
export default Header