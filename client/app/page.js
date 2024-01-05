"use client"
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { useEffect, useState } from 'react';


import './globals.css';

import heroImg from '../public/SVR_Image.jpeg'
import SVR_Image_1 from './Assets/SVR_Image_1.png';
import President from './Assets/President.jpeg';
import FlipBook1 from './Assets/FlipBook1.png';
import FlipBook2 from './Assets/FlipBook2.png';
import FlipBook3 from './Assets/FlipBook3.png';
import FlipBook4 from './Assets/FlipBook4.png';

import SVR_Image from '../public/SVR_Image.jpeg';
import nutrition from '../public/SVR_Image.jpeg';
import Navbar from './components/navbar/Navbar';
import Link from 'next/link';
import HTMLFlipBook from 'react-pageflip';

export default function Home() {

    const [showNavbar, setShowNavbar] = useState(false);
    const [num, setNum] = useState(1);
    let scroll = 0;

    // if the scroll is greater than 100px make showNavbar true

    useEffect(() => {

        window.addEventListener("scroll", () => {

            scroll = window.scrollY;
            console.log(scroll);

            if(window.scrollY > 100) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        }
        );
    }, []);


    const handleClick = (Num) => {
        setNum(Num);
    }
    
  return (
      <div className="home-component">
        <div className="home-container">
          { showNavbar ? <Navbar/> : null}
            <div className="hero"
              style={{
                backgroundImage: `url(${SVR_Image.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="hero-in">
              <h1>Smart Village Revolution</h1>
              <h3>An Initiative of K L Deemed to be University</h3>
                <div className="hero-img">
                  <img src={heroImg.src} alt="" />
                </div>
              </div>
            </div>


            <div className="home-three">
              <div className="home-three-in">
                <div className="home-three-one">
                  <div className="home-three-one-in">
                    <h1>We provide independent, impartial medical humanitarian assistance to the people who need it most.</h1>
                    <p>Doctors Without Borders/Médecins Sans Frontières (MSF) cares for people affected by conflict, disease outbreaks, natural and human-made disasters, and exclusion from health care in more than 70 countries.Doctors Without Borders/Médecins Sans Frontières (MSF) cares for people affected by conflict, disease outbreaks, natural and human-made disasters, and exclusion from health care in more than 70 countries.</p>

                    <Link className='home-three-one-in-link' href='/'>Learn More About What We Do</Link>
                  </div>
                </div>
                <div className="home-three-two">
                  <div className="home-three-two-in">
                    <div className="home-three-two-in-one">
                      <p>Some Numbers that Matter</p>
                    </div>
                    <div className="home-three-two-in-two">
                      <div className="home-three-two-in-two-boxes">
                        <div className="home-three-two-in-two-box">
                          <div className="home-three-two-in-two-box-in">
                            <div className="home-three-two-in-two-box-in-one">
                              <h1>72+</h1>
                            </div>
                            <div className="home-three-two-in-two-box-in-two">
                              <p><span>Countries and territories</span> are home to our medical humanitarian projects</p>
                            </div>
                          </div>
                        </div>
                        <div className="home-three-two-in-two-box">
                          <div className="home-three-two-in-two-box-in">
                            <div className="home-three-two-in-two-box-in-one">
                              <h1>1,351+</h1>
                            </div>
                            <div className="home-three-two-in-two-box-in-two">
                              <p><span>Countries and territories</span> are home to our medical humanitarian projects</p>
                            </div>
                          </div>
                        </div>
                        <div className="home-three-two-in-two-box">
                          <div className="home-three-two-in-two-box-in">
                            <div className="home-three-two-in-two-box-in-one">
                              <h1>500+</h1>
                            </div>
                            <div className="home-three-two-in-two-box-in-two">
                              <p><span>Countries and territories</span> are home to our medical humanitarian projects</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="home-two">
              <div className="home-two-in">
                <div className="home-two-in-header">
                  <h1>Smart Village Revolution at K L Deemed to be University: Steps towards Adarsh Gram</h1>
                </div>
                <div className="home-two-in-one">
                  <div className="home-two-in-one-in">
                    <div className="home-two-in-one-in-one">
                      <div className="home-two-in-one-in-one-in">
                        <p>Smart Village Revolution at K L Deemed to be University is a rural development programme broadly focusing upon the development in the villages which includes social development, cultural development and spread motivation among the people on social mobilization of the village community. The programme was launched by the President of KLEF, Hon'ble Shri Koneru Lakshmaiah on the birth anniversary of Jayaprakash Narayan, on 11 October 2014.</p>

                        <div className="home-two-in-one-in-boxes">
                          <div className="home-two-in-one-in-boxes-in">
                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Smart Villare</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Sustainable Village</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Women Empowerment</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Social Impact</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Community</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Social Mobilization</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Cultural Development</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Women Empowerment</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Social Impact</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Community</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-two-in-one-in-two">
                      <div className="home-two-in-one-in-two-in">
                       <Image
                       className='home-two-in-one-in-two-in-image'
                       src={SVR_Image_1}
                        alt="Picture of the author"
                        width={400}
                        height={300}
                       />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          <div className="home-seven">
            <div className="home-seven-in">
              <div className="home-seven-in-header">
                <div className="home-seven-in-header-in">
                  <h1>Areas of Work</h1>
                </div>
              </div>
              <div className="home-seven-in-one">
                <div className="home-seven-in-one-in">
                  <div className="home-seven-in-one-in-boxes">
                    <div className="home-seven-in-one-in-boxes-in">
                    <div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={SVR_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div>
                      

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


            <div className="home-eight">
              <div className="home-eight-in">
                <div className="home-eight-one">
                  <div className="home-eight-one-in">
                    <div className="home-eight-one-in-book">
                      <HTMLFlipBook className='home-eight-one-in-book-comp' size='stretch' width={500} height={700}>
                          <div className="flipbook-page">
                            <Image
                              src={FlipBook1}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                          <div className="flipbook-page">
                            <Image
                              src={FlipBook2}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                          <div className="flipbook-page">
                            <Image
                              src={FlipBook3}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                          <div className="flipbook-page">
                            <Image
                              src={FlipBook4}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                      </HTMLFlipBook>
                    </div>
                  </div>
                </div>
                <div className="home-eight-two">
                  <div className="home-eight-two-in">
                    <h1>Annual Report 2022-23 Social Internship: Class of Y22 Students</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus sapiente labore aliquam perspiciatis adipisci harum veniam quibusdam amet dolorum!</p>
                    <Link className='home-eight-two-in-link' href='/'>Download E-Book</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-four message">
              <div className="home-four-in">
                <div className="home-four-header">
                  <h1>Message from the Hon'ble President: KLEF</h1>
                </div>
                <div className="home-four-in-in">
                <div className="home-four-one">
                  <div className="home-four-one-in">
                    <div className="home-four-one-in-one">
                    
                        <Image
                          className='home-four-one-in-one-in-image'
                          src={President}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt='Picture of the author'
                          style={{ width: '100%', height: 'auto' }} // optional
                        />

                      <p>Shri Koneru Satyanarayana</p>
                    </div>
                    <div className="home-four-one-in-two">

                    </div>
                  </div>
                </div>
                <div className="home-four-two">
                  <div className="home-four-two-in">
                    <p>On Independence Day, I had made commitment to you on behalf of my colleagues in the Parliament. I laid out my dream of Adarsh Grams as the nucleus of health, cleanliness, greenery and cordiality within the community. The Guidelines that follow are based on these principles and present the complete blueprint of the Saansad Adarsh Gram Yojana for each Member of Parliament to make one village of his or her constituency a Model Village by 2016 and two more model villages by 2019.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div className="home-five">
                <div className="home-five-in">
                    <div className="home-five-one">
                        <h1>Working Groups</h1>
                    </div>
                    <div className="home-five-two">
                        <div className="home-five-two-in">
                            <div className="home-five-box-one">
                                <div className="home-ft-box-in">
                                    <div className="home-se-one se-cm" onClick={()=>handleClick(1)} id={num === 1 ? 'se-active' : ''}>
                                        <div className="home-se-one-in se-cm-in">
                                            <p>Agriculture</p>
                                        </div>
                                    </div>
                                    <div className="home-se-two se-cm" onClick={()=>handleClick(2)} id={num === 2 ? 'se-active' : ''}>
                                        <div className="home-se-two-in se-cm-in">
                                            <p>Smart Village Revolution</p>
                                        </div>
                                    </div>
                                    <div className="home-se-three se-cm" onClick={()=>handleClick(3)} id={num === 3 ? 'se-active' : ''}>
                                        <div className="home-se-three-in se-cm-in">
                                            <p>Read More 3</p>
                                        </div>
                                    </div>
                                    <div className="home-se-four se-cm" onClick={()=>handleClick(4)} id={num === 4 ? 'se-active' : ''}>
                                        <div className="home-se-four-in se-cm-in">
                                            <p>Read More 4</p>
                                        </div>
                                    </div>
                                    <div className="home-se-five se-cm" onClick={()=>handleClick(5)} id={num === 5 ? 'se-active' : ''}>
                                        <div className="home-se-five-in se-cm-in">
                                            <p>Read More </p>
                                        </div>
                                    </div>
                                    <div className="home-se-six se-cm" onClick={()=>handleClick(6)} id={num === 6 ? 'se-active' : ''}>
                                        <div className="home-se-six-in se-cm-in">
                                            <p>Read More 6</p>
                                        </div>
                                    </div>
                                    <div className="home-se-seven se-cm" onClick={()=>handleClick(7)} id={num === 7 ? 'se-active' : ''}>
                                        <div className="home-se-seven-in se-cm-in">
                                            <p>Read More 7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-five-box-two">
                                <div className="home-ft-box-two-in">
                                    <div className="home-bt-one cm-bx-hide" id={num === 1 ? 'se-visible' : ''}>
                                        <h1>Agriculture</h1>
                                    </div>
                                    <div className="home-bt-two cm-bx-hide" id={num === 2 ? 'se-visible' : ''}>
                                        <h1>Smart Village Revolution</h1>
                                    </div>
                                    <div className="home-bt-three cm-bx-hide" id={num === 3 ? 'se-visible' : ''}>
                                        <h1>Read More 3</h1>
                                    </div>
                                    <div className="home-bt-four cm-bx-hide" id={num === 4 ? 'se-visible' : ''}>
                                        <h1>Read More 4</h1>
                                    </div>
                                    <div className="home-bt-five cm-bx-hide" id={num === 5 ? 'se-visible' : ''}>
                                        <h1>Read More 5</h1>
                                    </div>
                                    <div className="home-bt-six cm-bx-hide" id={num === 6 ? 'se-visible' : ''}>
                                        <h1>Read More 6</h1>
                                    </div>
                                    <div className="home-bt-seven cm-bx-hide" id={num === 7 ? 'se-visible' : ''}>
                                        <h1>Read More 7</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
      </div>
    )
}