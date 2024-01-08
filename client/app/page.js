"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';


import './globals.css';

import heroImg from '../public/SVR_Image.jpeg'
import SVR_Image_1 from './Assets/SVR_Image_1.png';
import President from './Assets/President.jpeg';
import FlipBook1 from './Assets/FlipBook1.png';
import FlipBook2 from './Assets/FlipBook2.png';
import FlipBook3 from './Assets/FlipBook3.png';
import FlipBook4 from './Assets/FlipBook4.png';
import Modi from './Assets/Modi.jpeg';
import Deepak from './Assets/Deepak.png';


import SVR_Image from '../public/SVR_Image.jpeg';
import Navbar from './components/navbar/Navbar';
import Link from 'next/link';
import HTMLFlipBook from 'react-pageflip';

import { FaLinkedin } from "react-icons/fa6";
import { SiMicrosoftoutlook } from "react-icons/si";
import HomeNavbar from './components/navbar/HomeNavbar';
import ResNavbar from './components/navbar/ResNav';
import Footer from './components/footer/Footer';
import Plant from './components/animation/Plant';

export default function Home() {

    const [showNavbar, setShowNavbar] = useState(false);
    const [num, setNum] = useState(1);
    let scroll = 0;


    useEffect(() => {

        window.addEventListener("scroll", () => {

            scroll = window.scrollY;
            console.log(scroll);

            if(window.scrollY > 300) {
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

// ---------- Boot Animation ------------

  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setShowAnimation(false), 6800);
    return () => clearTimeout(timer);
  }, []);

  console.log(showAnimation);
    
// ---------- Boot Animation END ------------

  return (
    showAnimation ? (
      <div className="plant">
        <Plant />
      </div>
    ) :
      <div className="home-component">
        <div className="home-container">
            <div className="Navbar">
                { showNavbar ? <Navbar/> : <HomeNavbar/>}
            </div>
            <div className="Navbar-Res">
              <ResNavbar/>
            </div>
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
                    {/* <div className="home-three-two-in-one">
                      <p>Some Numbers that Matter</p>
                    </div> */}
                    <div className="home-three-two-in-two">
                      <div className="home-three-two-in-two-boxes">
                        <div className="home-three-two-in-two-box">
                          <div className="home-three-two-in-two-box-in">
                            <div className="home-three-two-in-two-box-in-one">
                              <h1><CountUp end={72} />+</h1>
                            </div>
                            <div className="home-three-two-in-two-box-in-two">
                              <p><span>Countries and territories</span> are home to our medical humanitarian projects</p>
                            </div>
                          </div>
                        </div>
                        <div className="home-three-two-in-two-box">
                          <div className="home-three-two-in-two-box-in">
                            <div className="home-three-two-in-two-box-in-one">
                              <h1><CountUp end={1351} />+</h1>
                            </div>
                            <div className="home-three-two-in-two-box-in-two">
                              <p><span>Countries and territories</span> are home to our medical humanitarian projects</p>
                            </div>
                          </div>
                        </div>
                        <div className="home-three-two-in-two-box">
                          <div className="home-three-two-in-two-box-in">
                            <div className="home-three-two-in-two-box-in-one">
                              <h1><CountUp end={500} />+</h1>
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
                      <HTMLFlipBook className='home-eight-one-in-book-comp' getCurrentPageIndex={true} getPageCount size='stretch' width={500} height={700}>
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

            <div className="home-ten">
              <div className="home-ten-in">
                <div className="home-ten-header">
                  <div className="home-ten-header-in">
                    <h1>K L's Smart Village Revolution: In the Line of Sansad Adarsh Gram Yojana</h1>
                  </div>
                </div>
                <div className="home-ten-one">
                  <div className="home-ten-one-in">
                    <div className="home-ten-one-in-one">
                      <div className="home-ten-one-in-one-in">
                        <h2>K L's Smart Village Revolution: In the Line of Sansad Adarsh Gram Yojana</h2>
                        <p>On Independence Day, I had made commitment to you on behalf of my colleagues in the Parliament. I laid out my dream of Adarsh Grams as the nucleus of health, cleanliness, greenery and cordiality within the community. The Guidelines that follow are based on these principles and present the complete blueprint of the Saansad Adarsh Gram Yojana for each Member of Parliament to make one village of his or her constituency a Model Village by 2016 and two more model villages by 2019.</p>

                        <Link className='home-ten-one-in-one-in-link' href='/'>Sansad Adarsh Gram Yojana</Link>
                      </div>
                    </div>
                    <div className="home-ten-one-in-two">
                      <div className="home-ten-one-in-two-in">
                        <Image
                          className='home-ten-one-in-two-in-image'
                          src={Modi}
                          width={0}
                          height={0}
                          alt='Picture of the author'
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-five">
                <div className="home-five-in">
                    <div className="home-five-one">
                        <h1>Focus - 9 Way Principle</h1>
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
                                            <p>Quality Education</p>
                                        </div>
                                    </div>
                                    <div className="home-se-three se-cm" onClick={()=>handleClick(3)} id={num === 3 ? 'se-active' : ''}>
                                        <div className="home-se-three-in se-cm-in">
                                            <p>Rural Infrastructure</p>
                                        </div>
                                    </div>
                                    <div className="home-se-four se-cm" onClick={()=>handleClick(4)} id={num === 4 ? 'se-active' : ''}>
                                        <div className="home-se-four-in se-cm-in">
                                            <p>Culture and Community</p>
                                        </div>
                                    </div>
                                    <div className="home-se-five se-cm" onClick={()=>handleClick(5)} id={num === 5 ? 'se-active' : ''}>
                                        <div className="home-se-five-in se-cm-in">
                                            <p>Health and Hygiene</p>
                                        </div>
                                    </div>
                                    <div className="home-se-six se-cm" onClick={()=>handleClick(6)} id={num === 6 ? 'se-active' : ''}>
                                        <div className="home-se-six-in se-cm-in">
                                            <p>Sustainable Development</p>
                                        </div>
                                    </div>
                                    <div className="home-se-seven se-cm" onClick={()=>handleClick(7)} id={num === 7 ? 'se-active' : ''}>
                                        <div className="home-se-seven-in se-cm-in">
                                            <p>Transportation</p>
                                        </div>
                                    </div>
                                    <div className="home-se-eight se-cm" onClick={()=>handleClick(8)} id={num === 8 ? 'se-active' : ''}>
                                        <div className="home-se-eight-in se-cm-in">
                                            <p>Livelyhood</p>
                                        </div>
                                    </div>
                                    <div className="home-se-nine se-cm" onClick={()=>handleClick(9)} id={num === 9 ? 'se-active' : ''}>
                                        <div className="home-se-nine-in se-cm-in">
                                            <p>Women Empowerment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-five-box-two">
                                <div className="home-ft-box-two-in">
                                    <div className="home-bt-one cm-bx-hide" id={num === 1 ? 'se-visible' : ''}>
                                      <div className="home-bt-one-in">
                                        <div className="home-bt-one-in-header">
                                          <div className="home-bt-one-in-header-in">
                                            <h1>Agriculture</h1>
                                          </div>
                                        </div>
                                        <div className="home-bt-one-in-one">
                                          <div className="home-bt-one-in-one-in">
                                            <div className="home-bt-one-in-one-in-one">
                                              <div className="home-bt-one-in-one-in-one-in">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat! Voluptatibus reprehenderit at mollitia iure ipsam culpa, soluta dicta! Commodi sed aliquam, cum sit magni velit non dolore minus, dignissimos, similique quidem temporibus mollitia ea possimus? Obcaecati dicta, laborum eaque, enim, qui deleniti consequuntur quo eveniet atque minima eius recusandae ducimus assumenda debitis corporis ipsa magnam mollitia itaque asperiores velit quisquam iure. Ipsam aliquid velit atque nam molestiae totam alias sequi minus consequatur, obcaecati libero nobis id quos vitae unde magni adipisci soluta cupiditate impedit fuga, optio est harum magnam fugiat. </p>
                                              </div>
                                            </div>
                                            <div className="home-bt-one-in-one-in-two">
                                              <div className="home-bt-one-in-one-in-two-in">
                                                <Image
                                                  className='home-bt-one-in-one-in-two-in-image'
                                                  src={SVR_Image_1}
                                                  alt="Picture of the author"
                                                ></Image>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="home-bt-two cm-bx-hide" id={num === 2 ? 'se-visible' : ''}>
                                    <div className="home-bt-one-in">
                                        <div className="home-bt-one-in-header">
                                          <div className="home-bt-one-in-header-in">
                                            <h1>Quality Education</h1>
                                          </div>
                                        </div>
                                        <div className="home-bt-one-in-one">
                                          <div className="home-bt-one-in-one-in">
                                            <div className="home-bt-one-in-one-in-one">
                                              <div className="home-bt-one-in-one-in-one-in">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat! Voluptatibus reprehenderit at mollitia iure ipsam culpa, soluta dicta! Commodi sed aliquam, cum sit magni velit non dolore minus, dignissimos, similique quidem temporibus mollitia ea possimus? Obcaecati dicta, laborum eaque, enim, qui deleniti consequuntur quo eveniet atque minima eius recusandae ducimus assumenda debitis corporis ipsa magnam mollitia itaque asperiores velit quisquam iure. Ipsam aliquid velit atque nam molestiae totam alias sequi minus consequatur, obcaecati libero nobis id quos vitae unde magni adipisci soluta cupiditate impedit fuga, optio est harum magnam fugiat. </p>
                                              </div>
                                            </div>
                                            <div className="home-bt-one-in-one-in-two">
                                              <div className="home-bt-one-in-one-in-two-in">
                                                <Image
                                                  className='home-bt-one-in-one-in-two-in-image'
                                                  src={SVR_Image_1}
                                                  alt="Picture of the author"
                                                ></Image>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="home-bt-three cm-bx-hide" id={num === 3 ? 'se-visible' : ''}>
                                    <div className="home-bt-one-in">
                                        <div className="home-bt-one-in-header">
                                          <div className="home-bt-one-in-header-in">
                                            <h1>Rural Infrastructure</h1>
                                          </div>
                                        </div>
                                        <div className="home-bt-one-in-one">
                                          <div className="home-bt-one-in-one-in">
                                            <div className="home-bt-one-in-one-in-one">
                                              <div className="home-bt-one-in-one-in-one-in">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat! Voluptatibus reprehenderit at mollitia iure ipsam culpa, soluta dicta! Commodi sed aliquam, cum sit magni velit non dolore minus, dignissimos, similique quidem temporibus mollitia ea possimus? Obcaecati dicta, laborum eaque, enim, qui deleniti consequuntur quo eveniet atque minima eius recusandae ducimus assumenda debitis corporis ipsa magnam mollitia itaque asperiores velit quisquam iure. Ipsam aliquid velit atque nam molestiae totam alias sequi minus consequatur, obcaecati libero nobis id quos vitae unde magni adipisci soluta cupiditate impedit fuga, optio est harum magnam fugiat. </p>
                                              </div>
                                            </div>
                                            <div className="home-bt-one-in-one-in-two">
                                              <div className="home-bt-one-in-one-in-two-in">
                                                <Image
                                                  className='home-bt-one-in-one-in-two-in-image'
                                                  src={SVR_Image_1}
                                                  alt="Picture of the author"
                                                ></Image>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="home-bt-four cm-bx-hide" id={num === 4 ? 'se-visible' : ''}>
                                    <div className="home-bt-one-in">
                                        <div className="home-bt-one-in-header">
                                          <div className="home-bt-one-in-header-in">
                                            <h1>Culture and Community</h1>
                                          </div>
                                        </div>
                                        <div className="home-bt-one-in-one">
                                          <div className="home-bt-one-in-one-in">
                                            <div className="home-bt-one-in-one-in-one">
                                              <div className="home-bt-one-in-one-in-one-in">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat! Voluptatibus reprehenderit at mollitia iure ipsam culpa, soluta dicta! Commodi sed aliquam, cum sit magni velit non dolore minus, dignissimos, similique quidem temporibus mollitia ea possimus? Obcaecati dicta, laborum eaque, enim, qui deleniti consequuntur quo eveniet atque minima eius recusandae ducimus assumenda debitis corporis ipsa magnam mollitia itaque asperiores velit quisquam iure. Ipsam aliquid velit atque nam molestiae totam alias sequi minus consequatur, obcaecati libero nobis id quos vitae unde magni adipisci soluta cupiditate impedit fuga, optio est harum magnam fugiat. </p>
                                              </div>
                                            </div>
                                            <div className="home-bt-one-in-one-in-two">
                                              <div className="home-bt-one-in-one-in-two-in">
                                                <Image
                                                  className='home-bt-one-in-one-in-two-in-image'
                                                  src={SVR_Image_1}
                                                  alt="Picture of the author"
                                                ></Image>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="home-bt-five cm-bx-hide" id={num === 5 ? 'se-visible' : ''}>
                                    <div className="home-bt-one-in">
                                        <div className="home-bt-one-in-header">
                                          <div className="home-bt-one-in-header-in">
                                            <h1>Health and Hygiene</h1>
                                          </div>
                                        </div>
                                        <div className="home-bt-one-in-one">
                                          <div className="home-bt-one-in-one-in">
                                            <div className="home-bt-one-in-one-in-one">
                                              <div className="home-bt-one-in-one-in-one-in">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat! Voluptatibus reprehenderit at mollitia iure ipsam culpa, soluta dicta! Commodi sed aliquam, cum sit magni velit non dolore minus, dignissimos, similique quidem temporibus mollitia ea possimus? Obcaecati dicta, laborum eaque, enim, qui deleniti consequuntur quo eveniet atque minima eius recusandae ducimus assumenda debitis corporis ipsa magnam mollitia itaque asperiores velit quisquam iure. Ipsam aliquid velit atque nam molestiae totam alias sequi minus consequatur, obcaecati libero nobis id quos vitae unde magni adipisci soluta cupiditate impedit fuga, optio est harum magnam fugiat. </p>
                                              </div>
                                            </div>
                                            <div className="home-bt-one-in-one-in-two">
                                              <div className="home-bt-one-in-one-in-two-in">
                                                <Image
                                                  className='home-bt-one-in-one-in-two-in-image'
                                                  src={SVR_Image_1}
                                                  alt="Picture of the author"
                                                ></Image>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="home-bt-six cm-bx-hide" id={num === 6 ? 'se-visible' : ''}>
                                    <div className="home-bt-one-in">
                                        <div className="home-bt-one-in-header">
                                          <div className="home-bt-one-in-header-in">
                                            <h1>Sustainable Development</h1>
                                          </div>
                                        </div>
                                        <div className="home-bt-one-in-one">
                                          <div className="home-bt-one-in-one-in">
                                            <div className="home-bt-one-in-one-in-one">
                                              <div className="home-bt-one-in-one-in-one-in">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat! Voluptatibus reprehenderit at mollitia iure ipsam culpa, soluta dicta! Commodi sed aliquam, cum sit magni velit non dolore minus, dignissimos, similique quidem temporibus mollitia ea possimus? Obcaecati dicta, laborum eaque, enim, qui deleniti consequuntur quo eveniet atque minima eius recusandae ducimus assumenda debitis corporis ipsa magnam mollitia itaque asperiores velit quisquam iure. Ipsam aliquid velit atque nam molestiae totam alias sequi minus consequatur, obcaecati libero nobis id quos vitae unde magni adipisci soluta cupiditate impedit fuga, optio est harum magnam fugiat. </p>
                                              </div>
                                            </div>
                                            <div className="home-bt-one-in-one-in-two">
                                              <div className="home-bt-one-in-one-in-two-in">
                                                <Image
                                                  className='home-bt-one-in-one-in-two-in-image'
                                                  src={SVR_Image_1}
                                                  alt="Picture of the author"
                                                ></Image>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="home-bt-seven cm-bx-hide" id={num === 7 ? 'se-visible' : ''}>
                                    <div className="home-bt-one-in">
                                        <div className="home-bt-one-in-header">
                                          <div className="home-bt-one-in-header-in">
                                            <h1>Transportation</h1>
                                          </div>
                                        </div>
                                        <div className="home-bt-one-in-one">
                                          <div className="home-bt-one-in-one-in">
                                            <div className="home-bt-one-in-one-in-one">
                                              <div className="home-bt-one-in-one-in-one-in">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat! Voluptatibus reprehenderit at mollitia iure ipsam culpa, soluta dicta! Commodi sed aliquam, cum sit magni velit non dolore minus, dignissimos, similique quidem temporibus mollitia ea possimus? Obcaecati dicta, laborum eaque, enim, qui deleniti consequuntur quo eveniet atque minima eius recusandae ducimus assumenda debitis corporis ipsa magnam mollitia itaque asperiores velit quisquam iure. Ipsam aliquid velit atque nam molestiae totam alias sequi minus consequatur, obcaecati libero nobis id quos vitae unde magni adipisci soluta cupiditate impedit fuga, optio est harum magnam fugiat. </p>
                                              </div>
                                            </div>
                                            <div className="home-bt-one-in-one-in-two">
                                              <div className="home-bt-one-in-one-in-two-in">
                                                <Image
                                                  className='home-bt-one-in-one-in-two-in-image'
                                                  src={SVR_Image_1}
                                                  alt="Picture of the author"
                                                ></Image>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="home-bt-eight cm-bx-hide" id={num === 8 ? 'se-visible' : ''}>
                                    <div className="home-bt-one-in">
                                        <div className="home-bt-one-in-header">
                                          <div className="home-bt-one-in-header-in">
                                            <h1>Livelyhood</h1>
                                          </div>
                                        </div>
                                        <div className="home-bt-one-in-one">
                                          <div className="home-bt-one-in-one-in">
                                            <div className="home-bt-one-in-one-in-one">
                                              <div className="home-bt-one-in-one-in-one-in">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat! Voluptatibus reprehenderit at mollitia iure ipsam culpa, soluta dicta! Commodi sed aliquam, cum sit magni velit non dolore minus, dignissimos, similique quidem temporibus mollitia ea possimus? Obcaecati dicta, laborum eaque, enim, qui deleniti consequuntur quo eveniet atque minima eius recusandae ducimus assumenda debitis corporis ipsa magnam mollitia itaque asperiores velit quisquam iure. Ipsam aliquid velit atque nam molestiae totam alias sequi minus consequatur, obcaecati libero nobis id quos vitae unde magni adipisci soluta cupiditate impedit fuga, optio est harum magnam fugiat. </p>
                                              </div>
                                            </div>
                                            <div className="home-bt-one-in-one-in-two">
                                              <div className="home-bt-one-in-one-in-two-in">
                                                <Image
                                                  className='home-bt-one-in-one-in-two-in-image'
                                                  src={SVR_Image_1}
                                                  alt="Picture of the author"
                                                ></Image>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="home-bt-nine cm-bx-hide" id={num === 9 ? 'se-visible' : ''}>
                                    <div className="home-bt-one-in">
                                        <div className="home-bt-one-in-header">
                                          <div className="home-bt-one-in-header-in">
                                            <h1>Women Empowerment</h1>
                                          </div>
                                        </div>
                                        <div className="home-bt-one-in-one">
                                          <div className="home-bt-one-in-one-in">
                                            <div className="home-bt-one-in-one-in-one">
                                              <div className="home-bt-one-in-one-in-one-in">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat! Voluptatibus reprehenderit at mollitia iure ipsam culpa, soluta dicta! Commodi sed aliquam, cum sit magni velit non dolore minus, dignissimos, similique quidem temporibus mollitia ea possimus? Obcaecati dicta, laborum eaque, enim, qui deleniti consequuntur quo eveniet atque minima eius recusandae ducimus assumenda debitis corporis ipsa magnam mollitia itaque asperiores velit quisquam iure. Ipsam aliquid velit atque nam molestiae totam alias sequi minus consequatur, obcaecati libero nobis id quos vitae unde magni adipisci soluta cupiditate impedit fuga, optio est harum magnam fugiat. </p>
                                              </div>
                                            </div>
                                            <div className="home-bt-one-in-one-in-two">
                                              <div className="home-bt-one-in-one-in-two-in">
                                                <Image
                                                  className='home-bt-one-in-one-in-two-in-image'
                                                  src={SVR_Image_1}
                                                  alt="Picture of the author"
                                                ></Image>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-nine">
                <div className="home-nine-in">
                    <div className="home-nine-one">
                        <div className="home-nine-one-in">
                            <h1>Our Team</h1>
                        </div>
                    </div>
                    <div className="home-nine-two">
                        <div className="home-nine-two-in">
                        <div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={Deepak}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Deepak</h1>
                                            <p>CEO ZeroOne</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div><div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={Deepak}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Deepak</h1>
                                            <p>CEO ZeroOne</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div><div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={Deepak}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Deepak</h1>
                                            <p>CEO ZeroOne</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div><div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={Deepak}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Deepak</h1>
                                            <p>CEO ZeroOne</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div><div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={Deepak}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Deepak</h1>
                                            <p>CEO ZeroOne</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div><div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={Deepak}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Deepak</h1>
                                            <p>CEO ZeroOne</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div><div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={Deepak}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Deepak</h1>
                                            <p>CEO ZeroOne</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div><div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={Deepak}
                                            alt="Picture of the author"
                                            // border-top-left-radius='1rem'
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Deepak</h1>
                                            <p>CEO ZeroOne</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer">
              <Footer/>
            </div>
        </div>
      </div>
    )
}