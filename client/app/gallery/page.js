import React from 'react'
import './page.css'
import Link from 'next/link'


// import images here 

import SVR_Image from '../Assets/SVR_Image.jpeg'
import G20_Image from '../Assets/G20_Logo.png'
import ElectionImage from '../Assets/Election.png'

const page = () => {
  return (
        <div className="GalleryComponent">
            <div className="GalleryComponent-in">
                <div className="Gallery-one">
                    <div className="Gallery-one-in">
                        <h1>Smart Village <span>Revolution</span> </h1>
                        <Link href='/'>Back to Home</Link>
                    </div>
                </div>
                <div className="Gallery-two">
                    <div className="Gallery-two-in">

                        <div className="Gallery-img-one gm-cm-one">
                            <div className="Gallery-img-one-in gm-cm-one-in">
                                <div className="Gi-one-one-in gm-cm-in-one g-img">
                                    <img src={SVR_Image.src} alt="" />
                                </div>
                                <div className="Gi-one-two-in gm-cm-in-two g-txt">
                                    <h1>Smart Village Revolution</h1>
                                    <p>India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the finest destinations for a holistic vacation.</p>
                                </div>
                            </div>
                        </div>


                        <div className="Gallery-img-two gm-cm-one">
                            <div className="Gallery-img-two-in gm-cm-one-in">
                                <div className="Gi-two-one-in gm-cm-in-one g-txt">
                                    <h1>Smart Village Revolution</h1>
                                    <p>India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the finest destinations for a holistic vacation.</p>
                                </div>
                                <div className="Gi-two-two-in gm-cm-in-two g-img">
                                    <img src={ElectionImage.src} alt="" />
                                </div>
                            </div>
                        </div>
                         
                        <div className="Gallery-img-three gm-cm-one">
                            <div className="Gallery-img-three-in gm-cm-one-in">
                                <div className="Gi-three-one-in gm-cm-in-one g-img">
                                    <img src={SVR_Image.src} alt="" />
                                </div>
                                <div className="Gi-three-two-in gm-cm-in-two g-txt">
                                    <h1>Smart Village Revolution</h1>
                                    <p>India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the finest destinations for a holistic vacation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Gallery-img-four gm-cm-one">
                            <div className="Gallery-img-four-in gm-cm-one-in">
                                <div className="Gi-four-one-in gm-cm-in-one g-txt">
                                    <h1>Smart Village Revolution</h1>
                                    <p>India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the finest destinations for a holistic vacation.</p>
                                </div>
                                <div className="Gi-four-two-in gm-cm-in-two g-img">
                                    <img src={ElectionImage.src} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="Gallery-img-five gm-cm-one">
                            <div className="Gallery-img-five-in gm-cm-one-in">
                                <div className="Gi-five-one-in gm-cm-in-one g-img">
                                    <img src={SVR_Image.src} alt="" />  
                                </div>
                                <div className="Gi-five-two-in gm-cm-in-two g-txt">
                                    <h1>Smart Village Revolution</h1>
                                    <p>India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the finest destinations for a holistic vacation.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default page