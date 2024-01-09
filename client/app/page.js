"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';


import './globals.css';
import heroImg from '../public/SVR_Image.jpeg';
import SVR_Image_1 from './Assets/IMG_8078.JPG';
import SVR_Image_2 from './Assets/Adarsh_Gram.JPG';
import Education from './Assets/Education.JPG';
import SkillDevelop from './Assets/SkillDevelop.JPG';
import HealthandHygeine from './Assets/HealthandHygeine.JPG';
import President from './Assets/President.jpeg';
import FlipBook1 from './Assets/FlipBook1.png';
import FlipBook2 from './Assets/FlipBook2.png';
import FlipBook3 from './Assets/FlipBook3.png';
import FlipBook4 from './Assets/FlipBook4.png';
import Modi from './Assets/Modi.jpeg';
import Deepak from './Assets/Deepak.png';
import vijaysir from './Assets/vijaysir.png';


import SVR_Image from '../public/SVR_Image.jpeg';
import Navbar from './components/navbar/Navbar';
import Link from 'next/link';
import HTMLFlipBook from 'react-pageflip';


// areas of work images
import AreasOfWork_Image_1 from './Assets/AreasOfWork_Image_1.png';
import AreasOfWork_Image_2 from './Assets/AreasOfWork_Image_2.png';
import AreasOfWork_Image_3 from './Assets/AreasOfWork_Image_3.png';
import AreasOfWork_Image_4 from './Assets/AreasOfWork_Image_4.png';
import AreasOfWork_Image_5 from './Assets/AreasOfWork_Image_5.png';
import AreasOfWork_Image_6 from './Assets/AreasOfWork_Image_6.png';
import AreasOfWork_Image_7 from './Assets/AreasOfWork_Image_7.png';
import AreasOfWork_Image_8 from './Assets/AreasOfWork_Image_8.png';
import AreasOfWork_Image_9 from './Assets/AreasOfWork_Image_9.png';
import AreasOfWork_Image_10 from './Assets/AreasOfWork_Image_10.png';

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

    
// ---------- Boot Animation END ------------

  return (
    showAnimation ? (
     
        <Plant />
      
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
                    {/* <h1>We provide independent, impartial medical humanitarian assistance to the people who need it most.</h1> */}
                    {/* <h1>The Smart Village Revolution blends innovation, connectivity, tradition for sustainable communities.</h1> */}
                    <h1>K L University's Smart Village Revolution - Empowering Communities with Innovation and Sustainability.</h1>
                    {/* <p>Doctors Without Borders/Médecins Sans Frontières (MSF) cares for people affected by conflict, disease outbreaks, natural and human-made disasters, and exclusion from health care in more than 70 countries.Doctors Without Borders/Médecins Sans Frontières (MSF) cares for people affected by conflict, disease outbreaks, natural and human-made disasters, and exclusion from health care in more than 70 countries.</p> */}
                    <p>In the smart village revolution, traditional wisdom and cutting-edge concepts coexist harmoniously. Solar-powered schools, quick access to medical assistance, and cellphone-enabled soil monitoring empower communities. Progress flows effortlessly and sustainably, nourishing villages like water touched by the sun. Tradition endures as innovation fortifies it, fostering common aspirations and promising tomorrows.</p>
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
                              {/* <h1><CountUp end={100} />+</h1> */}
                              <h1><CountUp end={95} />+</h1>
                            </div>
                            <div className="home-three-two-in-two-box-in-two">
                              {/* <p><span>Countries and territories </span>are home to our medical humanitarian projects</p> */}
                              <p><span>Villages Adopted</span> by K L University Under Smart Village Revolution Project</p>
                            </div>
                          </div>
                        </div>
                        <div className="home-three-two-in-two-box">
                          <div className="home-three-two-in-two-box-in">
                            <div className="home-three-two-in-two-box-in-one">
                              {/* <h1><CountUp end={1351} />+</h1> */}
                              <h1><CountUp end ={13510} />+</h1>
                            </div>
                            <div className="home-three-two-in-two-box-in-two">
                              {/* <p><span>Countries and territories</span> are home to our medical humanitarian projects</p> */}
                              <p><span>The Students Actively </span>involved in community endeavors</p>
                            </div>
                          </div>
                        </div>
                        <div className="home-three-two-in-two-box">
                          <div className="home-three-two-in-two-box-in">
                            <div className="home-three-two-in-two-box-in-one">
                              {/* <h1><CountUp end={500} />+</h1> */}
                              <h1><CountUp end = {30000} />+</h1>
                            </div>
                            <div className="home-three-two-in-two-box-in-two">
                              {/* <p><span>Countries and territories</span> are home to our medical humanitarian projects</p> */}
                              <p><span>The villages demonstrated proactive </span> and engaged involvement.</p>
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
                  {/* <h1>Smart Village Revolution at K L Deemed to be University: Steps towards Adarsh Gram </h1> */}
                  <h1>Smart Village Revolution at K L Deemed to be University: Steps towards Sansad Adarsh Gram</h1>
                </div>
                <div className="home-two-in-one">
                  <div className="home-two-in-one-in">
                    <div className="home-two-in-one-in-one">
                      <div className="home-two-in-one-in-one-in">
                        {/* <p>Smart Village Revolution at K L Deemed to be University is a rural development programme broadly focusing upon the development in the villages which includes social development, cultural development and spread motivation among the people on social mobilization of the village community. The programme was launched by the President of KLEF, Hon'ble Shri Koneru Lakshmaiah on the birth anniversary of Jayaprakash Narayan, on 11 October 2014.</p> */}
                        <p>At K L Deemed to be University, the Smart Village Revolution unfolds through deliberate steps towards Sansad Adarsh Gram . Education, community engagement, and sustainable practices form the foundation. Together, we're crafting a future where technology meets tradition, and our village becomes a model of progress, prosperity, and excellence. The programme was launched by the President of KLEF, Hon'ble Shri Koneru Satyanarayana Garu on the birth anniversary of Jayaprakash Narayan, on 11 October 2014.</p>
                        <div className="home-two-in-one-in-boxes">
                          <div className="home-two-in-one-in-boxes-in">
                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                {/* <p>Smart Villare</p> */}
                                <p>Education</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                {/* <p>Sustainable Village</p> */}
                                <p>Health and Hygiene</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                {/* <p>Women Empowerment</p> */}
                                <p>Women Empowerment</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                {/* <p>Social Impact</p> */}
                                <p>Agriculture</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                {/* <p>Community</p> */}
                                <p>Sustainability</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                {/* <p>Social Mobilization</p> */}
                                <p>Infrastructure</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                {/* <p>Cultural Development</p> */}
                                <p>CulturalDevelopment</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                {/* <p>Women Empowerment</p> */}
                                <p>Social Impact</p>
                              </div>
                            </div>

                            {/* <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Social Impact</p>
                              </div>
                            </div> */}

                            {/* <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Community</p>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-two-in-one-in-two">
                      <div className="home-two-in-one-in-two-in">
                       <Image
                       className='home-two-in-one-in-two-in-image'
                      src={SVR_Image_2}
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
                            src={AreasOfWork_Image_1}
                            alt="Picture of the author"
                          ></Image>
                          <p>Education</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={AreasOfWork_Image_2}
                            alt="Picture of the author"
                          ></Image>
                          <p>Health & Hygiene</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={AreasOfWork_Image_3}
                            alt="Picture of the author"
                          ></Image>
                          <p>Skill Development</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={AreasOfWork_Image_4}
                            alt="Picture of the author"
                          ></Image>
                          <p>Enviromental Development</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={AreasOfWork_Image_5}
                            alt="Picture of the author"
                          ></Image>
                          <p>Social Security</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={AreasOfWork_Image_6}
                            alt="Picture of the author"
                          ></Image>
                          <p>Good Governance</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={AreasOfWork_Image_7}
                            alt="Picture of the author"
                          ></Image>
                          <p>Rural Industrialization</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={AreasOfWork_Image_8}
                            alt="Picture of the author"
                          ></Image>
                          <p>Personal Development</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                            src={AreasOfWork_Image_9}
                            alt="Picture of the author"
                          ></Image>
                          <p>Economic Development</p>
                        </div>
                      </div><div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <Image
                             src={AreasOfWork_Image_10}
                            alt="Picture of the author"
                          ></Image>
                          <p>Women Empowerment</p>
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
                    <p>Empowering Futures: A Journey of Impact and Growth – Annual Report 2022-23 for Social Internship by the Y22 Students</p>
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
                                                <p>Agriculture in Smart Villages thrives through the adoption of precision farming techniques. Leveraging technology, farmers make data-driven decisions for irrigation, fertilization, and pest control. Sustainable practices like organic farming and renewable energy integration ensure long-term environmental health.Providing access to modern agricultural practices and tools for continuous improvement. </p>
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
                                                <p>Access to quality education is pivotal. Smart Villages utilize digital learning tools, offer training for teachers, and establish schools with modern resources. This empowers the youth, fostering innovation and preparing them for diverse career opportunities. Continuous training programs for educators to align teaching methods with modern pedagogies. Offering vocational training and specialized courses to prepare students for diverse careers. </p>
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
                                                <p>Developing robust infrastructure like roads, electricity, and internet connectivity for enhanced accessibility and economic opportunities. Building and maintaining reliable transportation networks to connect villages with markets and essential services. Investing in sustainable energy sources to ensure consistent and clean power supply for villages. Installing internet connectivity and digital infrastructure to bridge the digital divide and facilitate access to information and services. Constructing community centers and public spaces for social interaction, events, and communal activities. Implementing waste management systems to ensure a clean and sustainable environment. Creating resilient infrastructure that can withstand natural disasters and adverse weather conditions. Providing housing facilities and urban planning to ensure safe and comfortable living conditions for villagers. </p>
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
                                                <p>Preserving local traditions, customs, and cultural heritage while embracing progressive values and innovations. Encouraging community participation in cultural events, festivals, and celebrations to strengthen social bonds. Supporting local artisans and craftsmen to promote cultural craftsmanship and heritage. Fostering a sense of belonging and pride by celebrating diverse cultural identities within the community. Creating platforms for cultural exchange and dialogue to promote understanding and tolerance. Engaging youth in cultural activities and events to ensure the continuity of traditions. Establishing community centers as hubs for cultural education and exchange of ideas.  </p>
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
                                                <p>Establishing healthcare facilities and clinics equipped with essential medical services and trained healthcare professionals. Conducting health awareness campaigns and educational programs on hygiene, nutrition, and disease prevention. Providing access to clean and safe drinking water through water purification systems and community wells. Implementing sanitation facilities such as community toilets and waste management systems for improved hygiene. Ensuring availability of essential medications and vaccines for common diseases and emergencies. Encouraging regular health check-ups and screenings to detect health issues at early stages. Promoting healthy lifestyle practices through fitness programs and recreational activities. Collaborating with local health workers and volunteers for community health initiatives and outreach programs</p>
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
                                                <p>Promoting sustainable agricultural practices to minimize environmental impact and ensure long-term food security. Encouraging the use of renewable energy sources like solar power and biogas for clean and sustainable energy. Implementing eco-friendly waste management systems to reduce pollution and promote recycling. Adopting sustainable water management practices to conserve water resources and prevent scarcity. Supporting reforestation and conservation efforts to preserve biodiversity and natural habitats. Encouraging eco-tourism and responsible tourism practices to promote sustainable economic growth. Educating and raising awareness about the importance of environmental conservation and sustainable living. Collaborating with local communities and stakeholders for sustainable development projects and initiatives. </p>
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
                                                <p>Improving transportation networks with well-constructed roads and bridges for easier access to markets and services. Introducing affordable and efficient public transportation options for villagers. Establishing reliable and safe transportation systems for commuting and trade. Embracing technological advancements for smart transportation solutions like ride-sharing platforms. Encouraging the use of eco-friendly modes of transportation to reduce environmental impact. Ensuring regular maintenance and upkeep of transportation infrastructure for safety and reliability. Connecting remote areas with transportation hubs to facilitate movement and trade. Creating transport systems that cater to the unique needs of the community.  </p>
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
                                                <p>Creating skill development programs tailored to the needs of the community and market demands. Encouraging entrepreneurship through training, mentorship, and access to resources. Establishing micro-enterprises and cooperatives to support local industries and economic growth. Offering financial literacy programs and access to microfinance for aspiring entrepreneurs. Developing sustainable farming practices and alternative livelihood opportunities to diversify income sources. Providing market linkages and access to markets for locally produced goods. Encouraging vocational training and apprenticeships for acquiring specialized skills. Fostering innovation and creativity through initiatives that support small businesses and startups. </p>
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
                                                <p>Providing education and skill development programs specifically tailored for women's needs and aspirations. Creating opportunities for women to engage in decision-making processes within the community. Offering mentorship and leadership training programs to empower women leaders. Ensuring access to healthcare and reproductive rights for women in rural areas. Establishing support networks and forums for women to share experiences and knowledge. Encouraging financial independence through entrepreneurship and vocational training for women. Addressing cultural barriers and biases through awareness campaigns and advocacy programs. Providing access to legal support and counseling services for women facing challenges.  </p>
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
                                            src={vijaysir}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Er.P.Sai Vijay</h1>
                                            <p>Director-SAC</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={vijaysir}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Mr. B.V Satyanarayana</h1>
                                            <p>Incharge SVR</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={vijaysir}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Mr. B Rambabu</h1>
                                            <p>Incharge SVR</p>
                                       </div>
                                       <div className="home-team-about-two">
                                          <SiMicrosoftoutlook className='outlook-icon' />
                                          <FaLinkedin className='linked-icon' />
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-team-card">
                                <div className="home-team-card-in">
                                    <div className="home-team-img">
                                        <Image 
                                            src={vijaysir}
                                            alt="Picture of the author"
                                            // border-radius: 50%, border: 1px solid green
                                            style={{ width: '100%', height: 'auto', border: '2px solid green', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
                                        />
                                    </div>
                                    <div className="home-team-about">
                                       <div className="home-team-about-one">
                                            <h1>Mr Shiva</h1>
                                            <p>Incharge SVR</p>
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