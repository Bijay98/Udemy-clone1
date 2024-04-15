import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Main from '../../components/Main/Main'
import Category from '../../components/Category/Category'
import Courses from '../../components/Courses/Courses'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
   <div className="container-fluid">
     <NavBar/>
     <Main/>
     <Category/>
     <Courses/>
     <Footer/>
   </div>
  )
}

export default HomePage
