import React from 'react'
import { RiInstagramLine, RiLinkedinBoxLine, RiMailLine} from '@remixicon/react'

const FoEle = () => {
    return (
        <>
            <div className=' flex justify-between items-center w-screen h-5/6'>
                <div className='w-2/6 h-full p-8'>
                    <div className='flex cursor-pointer '>
                        <div>
                            <img className=' rounded-full h-16' src="https://th.bing.com/th/id/OIP.LS7LpaPOi2qGmos_iKQg_QAAAA?rs=1&pid=ImgDetMain" alt="Logo" />
                        </div>
                        <div className='flex items-center mt-4'>
                            <p className='font-cusfon text-xl text-nowrap'>Car{" "}Parking</p>
                        </div>
                    </div>
                </div>
                <div className='w-2/6 h-full flex  flex-col items-center justify-center'>
                     <h2 className='mb-6 -ml-6 text-xl font-cusfon font-semibold '>Links</h2>
                     <ul className='flex flex-col justify-center gap-2 items-start font-cusfon font-lg text-gray-500'>
                        <li className=' hover:text-black cursor-pointer'>Home</li>
                        <li className=' hover:text-black cursor-pointer'>Working</li>
                        <li className=' hover:text-black cursor-pointer'>Contact us</li>
                     </ul>
                </div>
                <div className='w-2/6 h-full flex justify-center items-center flex-col'>
                <h2 className='mb-6 text-xl font-cusfon font-semibold '>Contacts</h2>
                     <ul className='flex flex-col justify-center items-start gap-2 font-cusfon font-lg text-gray-500'>
                        <li className=' hover:text-black cursor-pointer'><RiInstagramLine/></li>
                        <li className=' hover:text-black cursor-pointer'><RiLinkedinBoxLine/></li>
                        <li className=' hover:text-black cursor-pointer'><RiMailLine/></li>
                     </ul>
                </div>
            </div>
        </>
    )
}

export default FoEle