import React from 'react'
import Image from 'next/image'
import Tree from '../../Assets/Tree.png';
// import './Footer.css';
import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


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
                        width={200}
                        height={200}
                        />
                    </div>
                    <div className="Footer-two-in-one-in-two">
                        <div className="Footer-two-in-one-in-two">
                        <p>Grassroots Research and Advocacy Movement (GRAAM) is an Indian public policy initiative specializing in research, evaluation, community consultation, policy engagement, strategic consultation, and academic programs.</p>
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
                            <li><a href="https://sac.kluniversity.in/">KL SAC</a></li>
                            <li><a href="https://panchatantra.vercel.app/">Panchatantra</a></li>
                        </ul>
                        </div>
                    </div>

                    <div className="Footer-two-in-two-in-boxes">
                        <div className="Footer-two-in-two-in-boxes-in">
                            <h3>Contact Us</h3>
                            <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} />Facebook</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} />Instagram</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} />Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer-two-in-two-in-boxes">
                        <div className="Footer-two-in-two-in-boxes-in">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>About</li>
                            <li>Our Work</li>
                            <li>Annual Reports</li>
                            <li><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.kluniversity.in/AQAR1819/SV.pdf&ved=2ahUKEwiazc3rrIGIAxUXklYBHfDTB-cQFnoECBUQAQ&usg=AOvVaw2FAQC3fzLhntiGTqlCW4vx">Past Year Reports</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="Footer-last">
                <div className="Footer-last-in">
                <p>This site is designed, developed and maintained by <a href="">ZeroOne Code Club </a> Department of Student Activity Center, K L Deemed to be University | Content owned by Smart Village Revolution Club</p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Footer