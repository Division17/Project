import React from 'react'

const CopyR = () => {
    return (
        <>
           <div className='w-screen flex justify-center h-1/6 items-center'>
             <p className='font-cusfon'> Copyright &copy; { new Date().getFullYear()} </p>
           </div>
        </>
    )
}

export default CopyR