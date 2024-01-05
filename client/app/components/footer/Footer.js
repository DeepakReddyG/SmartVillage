import React from 'react'
import Image from 'next/image'
import Tree from '../../Assets/Tree.png';
import './Footer.css'


const Footer = () => {
  return (
        <div className="Footer">
            <div className="Footer-in">
            <div className="Footer-one">
                <div className="Footer-one-in">
                    <h1>The goal of Smart Village Revolution (SVR) is to translate this comprehensive and organic vision of Mahatma Gandhi into reality, keeping in view the present context</h1>
                </div>
            </div>
            <div className="Footer-two">
                <div className="Footer-two-in">
                <div className="Footer-two-in-one">
                    <div className="Footer-two-in-one-in">
                    <div className="Footer-two-in-one-in-one">
                        <Image src={Tree}
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        />
                    </div>
                    <div className="Footer-two-in-one-in-two">
                        <div className="Footer-two-in-one-in-two">
                        <p>Grassroots Research and Advocacy Movement (GRAAM) is a public policy research and advocacy initiative in India. GRAAM’s extensive expertise spans over policy research, program evaluation, community consultation, policy engagement, strategic consultation and academic programs.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="Footer-two-in-two">
                    <div className="Footer-two-in-two-in">
                    <div className="Footer-two-in-two-in-boxes">
                        <div className="Footer-two-in-two-in-boxes-in">
                        <h3>About Us</h3>
                        <ul>
                            <li>Who we are</li>
                            <li>Why GRAAM</li>
                            <li>What We Offer</li>
                            <li>Annual Reports</li>
                        </ul>
                        </div>
                    </div>

                    <div className="Footer-two-in-two-in-boxes">
                        <div className="Footer-two-in-two-in-boxes-in">
                            <h3>Thematic Focus</h3>
                            <ul>
                            <li>Governance and Democratization</li>
                            <li>Learning and Skill Development</li>
                            <li>Public Health</li>
                            <li>Indigenous Community Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer-two-in-two-in-boxes">
                        <div className="Footer-two-in-two-in-boxes-in">
                        <h3>About Us</h3>
                        <ul>
                            <li>Who we are</li>
                            <li>Why GRAAM</li>
                            <li>What We Offer</li>
                            <li>Annual Reports</li>
                        </ul>
                        </div>
                    </div>

                    <div className="Footer-two-in-two-in-boxes">
                        <div className="Footer-two-in-two-in-boxes-in">
                            <h3>Thematic Focus</h3>
                            <ul>
                            <li>Governance and Democratization</li>
                            <li>Learning and Skill Development</li>
                            <li>Public Health</li>
                            <li>Indigenous Community Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer-two-in-two-in-boxes">
                        <div className="Footer-two-in-two-in-boxes-in">
                        <h3>About Us</h3>
                        <ul>
                            <li>Who we are</li>
                            <li>Why GRAAM</li>
                            <li>What We Offer</li>
                            <li>Annual Reports</li>
                        </ul>
                        </div>
                    </div>

                    <div className="Footer-two-in-two-in-boxes">
                        <div className="Footer-two-in-two-in-boxes-in">
                            <h3>Thematic Focus</h3>
                            <ul>
                            <li>Governance and Democratization</li>
                            <li>Learning and Skill Development</li>
                            <li>Public Health</li>
                            <li>Indigenous Community Development</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="Footer-last">
                <div className="Footer-last-in">
                <p>This site is designed, developed and maintained by <a href="www.amazon.com">Deepak Reddy Gathpa</a> & <a href="www.amazon.com">Sai Manikanta </a> of ZeroOne Code Club, Department of Student Activity Center, K L Deemed to be University | Content owned by Smart Village Revolution Club</p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Footer