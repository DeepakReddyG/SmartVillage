import React from 'react'
import './Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
        <div className="NavBar">
            <div className="NavBar-in">
                <div className="NavBar-in-one">
                    <div className="NavBar-in-one-in">
                        <h1>Smart Village Revolution</h1>
                    </div>
                </div>
                <div className="NavBar-in-two">
                    <div className="NavBar-in-two-in">
                    <Link href='/'>Home</Link>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Home</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar