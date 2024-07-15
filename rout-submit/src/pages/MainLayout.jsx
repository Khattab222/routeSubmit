import React from 'react'
import Header from '../component/Header'

import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen text-black'>
    <div className=" "><Header/></div>
    <div className="flex-grow p-4 font-mono">
   
      <Outlet/>
    
    </div>
 
 
</div>
  )
}

export default MainLayout