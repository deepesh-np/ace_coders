import React from 'react'
import download from '../assets/logo-png.png'
// import { Link } from 'react-router'
import { NavLink, useNavigate } from 'react-router'


const Navbar = () => {


  const navigate = useNavigate()

  return (


    <div className='navbar'>

       <img src={download} alt="skill hub" width={300} height={150} />
       <ul>

        <NavLink to='/'><li>Home</li></NavLink> 
        <NavLink to='/Login'><li>Login</li></NavLink>  
        <NavLink to='/contact'><li>Contact us</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink> 
        {/* <NavLink to='/mentorship'><li>Mentorship</li></NavLink> */}
        <NavLink to='/createproject'><li>Createproject</li></NavLink>
       <NavLink to='/register'><li>Register</li></NavLink> 
        
       </ul> 

       {/* <button
       onClick={()=> navigate('/contact',{replace:true})}   //this true use to remove the immediate history route from back history stack of browser and replace it with the second last history route 
       >Get Started
       </button> */}
       
    </div>
  )
}

export default Navbar
