import React from 'react'
import logo from '../../assets/udemy.png';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='container-fluid '>
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 className="my-0 mr-md-auto font-weight-normal"><img src={logo} style={{width:"100px",height:"70px"}}/></h5>
    <Link to="./login"><button className='btn btn-outline-success'>Login</button></Link> 
  </div>
  </div>
  )
}

export default NavBar
