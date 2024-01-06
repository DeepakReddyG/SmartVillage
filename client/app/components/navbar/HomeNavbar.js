import React from 'react'
import './HomeNavbar.css'
import Link from 'next/link'

const HomeNavbar = () => {
  return (
        <div className="HomeNavBar">
            <div className="HomeNavBar-in">
                <div className="HomeNavBar-in-one">
                    <div className="HomeNavBar-in-one-in">
                        <h1>Smart Village <span>Revolution</span> </h1>
                    </div>
                </div>
                <div className="HomeNavBar-in-two">
                    <div className="HomeNavBar-in-two-in">
                        <Link href='/'>Home</Link>
                        <Link href='/gallery'>Gallery</Link>
                        <Link href='/'>Home</Link>
                        <Link href='/'>Home</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeNavbar