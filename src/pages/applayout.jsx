import React from 'react'
import Navbar from '../components/navbar'
import Footer from "../components/footer"

const AppLayout = ({children}) => {
  return (
    <div>
        <Navbar />
      
        {children}
      
        <Footer/>
    </div>
  )
}

export default AppLayout