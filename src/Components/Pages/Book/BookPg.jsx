// VehicleForm.js
import React from 'react';
import {  collection, doc, updateDoc, arrayUnion } from "firebase/firestore";
import {db} from "../../../Config/firebase"
import { useFormik } from 'formik';
import * as Yup from 'yup';



const BookPg = () => {
  const validationSchema = Yup.object({
    numberPlate: Yup.string()
      .required('Vehicle number plate is required')
      .matches(/^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/, 'Invalid number plate format'),
  });

  const formik = useFormik({
    initialValues: {
      numberPlate: '',
    },
    validationSchema
  });


  const handleSubmit = (e) => {
 
    const newString = e // Get the string from your form or input field
   console.log(e)
    addStringToBookingArray(newString);
  };

  const addStringToBookingArray = async (newString) => {
    try {
      const bookingRef = doc(collection(db, "Booking"), "FminIKd4Bfi3WijuD8C1");
  
      await updateDoc(bookingRef, "stringArray", arrayUnion(newString));
  
      console.log("String added successfully!");
      alert(`Slot booked for ${newString}`)
    } catch (error) {
      console.error("Error adding string:", error);
    }
  };
  
  
  return (
    <>
    <div className='w-screen h-3/6 flex justify-center items-center border-2 border-red-800 drop-shadow-xl'>
    <form onSubmit={formik.handleSubmit} className='border-2 border-gray-600 rounded-2xl drop-shadow-xl flex flex-col p-10 gap-4 '>
      <label htmlFor="numberPlate">Vehicle Plate Number :</label>
      <input
        type="text"
        id="numberPlate"
        name="numberPlate"
        onChange={formik.handleChange}
        value={formik.values.numberPlate}
        className='border-2 border-gray-500 rounded-lg py-1'
      />
      {formik.touched.numberPlate && formik.errors.numberPlate ? (
        <div className="error">{formik.errors.numberPlate}</div>
      ) : null}
      <button type="submit" className='border-2
      mt-4 rounded-lg border-gray-300 hover:text-white hover:bg-black py-1 font-cusfon font-semibold'
      onClick={()=>handleSubmit(formik.values.numberPlate)}
      >Submit</button>
    </form>
    </div>
       
    </>

  );
};

export default BookPg
