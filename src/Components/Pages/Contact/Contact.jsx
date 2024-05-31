import React from 'react'
import { RiInstagramLine, RiLinkedinBoxLine, RiMailLine} from '@remixicon/react'

const Contact = () => {
    return (
        <>
            <div className='w-screen h-3/6 flex gap-4 text-gray-600 item-center flex-col px-24'>
                <div className='mb-16 mt-8 text-2xl font-semibold font-cusfon'><h2> Contact us</h2></div>
                <div><p className='text-lg font-cusfon -mt-6 hover:text-black hover:cursor-pointer'> Feel free to reach us at any of the platform:-</p></div>
                <div>
                <ul className='flex flex-col justify-center items-start gap-2 font-cusfon font-lg text-gray-500'>
                        <li className=' hover:text-black cursor-pointer hover:scale-110'><RiInstagramLine/>Instagram</li>
                        <li className=' hover:text-black cursor-pointer hover:scale-110'><RiLinkedinBoxLine/>LinkedIn</li>
                        <li className=' hover:text-black cursor-pointer hover:scale-110'><RiMailLine/>Mail</li>
                     </ul>
                </div>
            </div>
        </>
    )
}

export default Contact