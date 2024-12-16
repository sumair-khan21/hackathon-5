'use client'

import React, { useState } from 'react'
import "./navbar.css"
import Link from 'next/link'

function Navbar() {
// const [progress, setProgress] = React.useState(13)
 
//   React.useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500)
//     return () => clearTimeout(timer)
//   }, [])
    const [isClick,SetIsClick]=useState(false)
const toggleNavbar = () =>{
    SetIsClick(!isClick)
}
  return (
<>

  <nav className="">
    <div className="logo">
    <Link href="/"><h1 className='text-white'><span className='brown'>Food</span>tuck</h1></Link>
    </div>           
    <div className="navbar  ">
<div className="navbar-main ">
    
    <div className='hidden1 '>
        <div className='nav-items '>
          
            <Link href="../" className="items" >Home</Link>
            <Link href="../pages/menu" className="items">Menu</Link>
            <Link href="../pages/blog" className="items">Blog</Link>
            <Link href="#" className="items">Pages</Link>
            <Link href="../pages/about" className="items">About</Link>
            <Link href="../pages/shop" className="items">Shop</Link>
            <Link href="#" className="items">Contact</Link>
         
        </div>
        
    </div>
    <div className="hidden1">
    <div className='nav-icons '>
    {/* <Input type="text" placeholder="Search..." className='text-white search' /> */}
        {/* <p>Search...</p> */}
        <input type="text" placeholder='Search...' />
        <img src="/search.png" alt="" />
        <img src="/buy.png" alt="" className='buy' />

        </div>
        </div>
    <div className=' btn'>
        <button className='' onClick={toggleNavbar}>
            {isClick ? (
                <svg className='' xmlns="http://www.w3.org/2000/svg"
                fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6112 12'/>
                </svg>
            ) : (
                <svg className='' xmlns="http://www.w3.org/2000/svg"
                fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'/>
                </svg>
            )}
        </button>
    </div>
</div>
    </div>
    {isClick && (
        <div className="mobile">
            <div  className='hide-div'>
           
            <Link href="../" className="items">Home</Link>
            <Link href="../pages/about" className="items">About</Link>
            <Link href="../pages/services" className="items">Services</Link>
            <Link href="..pages/contact" className="items">Contact</Link>
           
            </div>
        </div>
    )}
</nav>


</>
  )
}

export default Navbar
