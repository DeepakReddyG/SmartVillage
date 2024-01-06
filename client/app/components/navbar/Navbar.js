import React from 'react'
import './Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
        <div className="NavBar">
            <div className="NavBar-in">
                <div className="NavBar-in-one">
                    <div className="NavBar-in-one-in">
                        <h1>Smart Village <span>Revolution</span> </h1>
                    </div>
                </div>
                <div className="NavBar-in-two">
                    <div className="NavBar-in-two-in">
                        <Link href='/'>Home</Link>
                        <Link href="https://sac.kluniversity.in" passHref={true} target='_blank'>KL SAC</Link>
                        <Link href='/gallery'>Gallery</Link>
                        <Link href='/'>Home</Link>
                        <Link href='/'>Home</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar