import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/route.png"
const Header = () => {
  return (
    <div className='bg-white py-3 px-3 shadow-xl flex items-center gap-3' >
      <Link to='/' className='font-semibold font-mono ' >
      <img height={40} width={50} src={logo} alt="" />
      </Link>
      <Link to='/' className='font-semibold font-mono ' >Home</Link>
    </div>
  )
}

export default Header