import React from 'react'

const Logo = () => {
    return (
        <> 
         <div className='flex'>
            <div className='h-full flex py-4'>
                <img className=' rounded-full h-20' src="https://th.bing.com/th/id/OIP.LS7LpaPOi2qGmos_iKQg_QAAAA?rs=1&pid=ImgDetMain" alt="Logo" />
            </div>
            <div className='flex justify-center items-center '>
                <p className='font-cusfon text-3xl  hover:font-bold text-nowrap cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(20,50,80,0.8)] '>Car{" "}Parking</p>
            </div>
        </div>

        </>
    )
}

export default Logo