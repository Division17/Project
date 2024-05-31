import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Pages/Contact/Contact'
import Main from './Components/Pages/Main/Main'
import BookPg from './Components/Pages/Book/BookPg'
import Working from './Components/Pages/Working/Working'
const App = () => {


  return (
     <> 
     <BrowserRouter>
     <div className='h-screen w-screen'> 
     <Header/>
        <Routes>
           <Route path="/" element={< Main />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/book" element={<BookPg/>} />
           <Route path="/working" element={<Working/>} />
        </Routes>
      <Footer/>
     </div>
    
     </BrowserRouter>
    </>
  )
}

export default App