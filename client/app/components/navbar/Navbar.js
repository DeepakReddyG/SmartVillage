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
                        <Scroll
                            to="home-two"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        About
                        </Scroll>
                        <Scroll
                            to="home-seven"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Our Work
                        </Scroll>
                        <Scroll
                            to="home-eight"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Annual Report
                        </Scroll>
                        <Scroll
                            className="HomeNavBar-in-two-in-scroll"
                            to="home-five"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Parameters
                        </Scroll>
                        <Scroll
                            to="home-nine"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Team
                        </Scroll>
                        <Link href='https://sac.kluniversity.in' passHref={true} target='_blank'>KL SAC</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar