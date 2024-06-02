import React, { useEffect, useState } from 'react';
import { db } from '../../../Config/firebase.jsx';
import { collection, query, getDocs } from 'firebase/firestore';
import Main2 from './Main2.jsx'
import { Link } from 'react-router-dom';



const Main = () => {
  const [slots, setSlots] = useState(null);
  const [tslots, setTslots] = useState(null);

  useEffect(() => {
        const parkingRef = collection(db, 'Parking');

        const q = query(parkingRef);

        const fetchData = async()=>{
          try {
            const querySnapshot = await getDocs(q);
            if(!querySnapshot.empty){
            
              const data = querySnapshot.docs[0].data();
              console.log(data)
              setSlots(data.Slots)
              setTslots(data.Tslots)
            }
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
  }, []);

  return (
    <>
    <div className= "bg-sky-200">
     
    <Main2></Main2>
    <div className='w-screen h-screen flex flex-col items-center
     justify-center mt-20'> 
    <div className='w-3/5 h-80 decoration-inherit rounded-xl shadow-cyan-900 shadow-2xl font-mono shadow-outer text-cyan-900 bg-gradient-to-r from-sky-700 to-sky-800 flex justify-center items-center flex-col gap-12 text-xl'>
    <h2 className="text-sky-100 font-semibold text-wrap px-4">Pre-book parking spots in your desired location.</h2>
    <p className=" rounded-r-2xl p-4 w-60 bg-yellow-200 text-nowrap">Available Slots: <span className='text-red-900'>{slots}</span></p>
    <p className=" shadow-inner rounded-r-2xl p-4 w-60 bg-yellow-200">Total Slots: {tslots}</p>
    </div>  
   
    <div className='mt-10 w-3/5 flex justify-center items-center '>
    <Link to="/book" className='w-full border-2 py-2 px-y bg-gradient-to-l  from-sky-700 to-sky-800 rounded-xl text-white font-cusfon font-semibold  drop-shadow-xl border-white hover:border-black hover:ring-2 hover:ring-offset-2 hover:ring-offset-sky-800'>
    <button className='w-full'>
        Book Now
      </button>
      </Link>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Main