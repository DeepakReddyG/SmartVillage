import React from 'react'
import './Navbar.css'
import { Link as Scroll } from "react-scroll";
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
                        <div className="dropdown">
                        <Scroll
                            className="HomeNavBar-in-two-in-scroll"
                            to="home-two"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                            About
                        </Scroll>
                        <div className="dropdown-content">
                              <Link href="/mission">Mission & Vision</Link>
                              <Link href="/introduction">Introduction</Link>
                        </div>
                        </div>
                        <Scroll
                        className='navbar-options'
                            to="home-seven"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Our Work
                        </Scroll>
                        <Scroll
                        className='navbar-options'
                            to="home-eight"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Annual Report
                        </Scroll>
                        <Scroll
                            className="HomeNavBar-in-two-in-scroll navbar-options"
                            to="home-five"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Parameters
                        </Scroll>
                        <Link className="navbar-options" href="/gallery">Gallery</Link>
                        <Link className="navbar-options" href="/news">News</Link>
                        <Link className='navbar-options' href='https://sac.kluniversity.in' passHref={true} target='_blank'>KL SAC</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar