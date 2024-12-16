import React from 'react'
import "./topbar.css"
import Link from 'next/link'
const Topbar = () => {
  return (
    <>
    <section>
        <div className="topbar-main">
            <h2 className='top'>Our Menu</h2>
            <div className="top-menu">
            <Link href="/"><p className='text-white'>Home &gt;</p></Link>
            <Link href="#"><p className='orange'>Menu</p></Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Topbar
