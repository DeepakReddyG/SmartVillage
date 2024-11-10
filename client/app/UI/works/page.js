import React from "react";
import Image from "next/image";

import SVR_UpdateImage_13 from "../../Assets/Women2.png";
import SVR_UpdateImage_14 from "../../Assets/Digital.png";
import SVR_UpdateImage_16 from "../../Assets/Updated Images/Health_new.png";

import communityInfrastructure from "../../Assets/communityInfrastructure.png";
import culturalExchange from "../../Assets/culturalExchange.png";

import AreasOfWork_Image_1 from "../../Assets/AreasOfWork_Image_1.png";
import AreasOfWork_Image_4 from "../../Assets/AreasOfWork_Image_4.png";
import AreasOfWork_Image_6 from "../../Assets/greenInnovation.png";
import AreasOfWork_Image_8 from "../../Assets/AreasOfWork_Image_8.png";
import AreasOfWork_Image_9 from "../../Assets/AreasOfWork_Image_9.png";


import "./page.css";

const page = () => {
  return (
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
                      src={SVR_UpdateImage_16}
                      alt="Picture of the author"
                    ></Image>
                    <p>Health & Hygiene</p>
                  </div>
                </div>

                <div className="home-seven-in-one-in-box">
                  <div className="home-seven-in-one-in-box-in">
                    <Image
                      src={AreasOfWork_Image_1}
                      alt="Picture of the author"
                    ></Image>
                    <p>Quality Education</p>
                  </div>
                </div>

                <div className="home-seven-in-one-in-box">
                  <div className="home-seven-in-one-in-box-in">
                    <Image
                      src={AreasOfWork_Image_9}
                      alt="Picture of the author"
                    ></Image>
                    <p>Agriculture</p>
                  </div>
                </div>

                <div className="home-seven-in-one-in-box">
                  <div className="home-seven-in-one-in-box-in">
                    <Image
                      src={communityInfrastructure}
                      alt="Picture of the author"
                    ></Image>
                    <p>Village Infrastructure</p>
                  </div>
                </div>

                <div className="home-seven-in-one-in-box">
                  <div className="home-seven-in-one-in-box-in">
                    <Image
                      src={AreasOfWork_Image_4}
                      alt="Picture of the author"
                    ></Image>
                    <p>Social Community Actions</p>
                  </div>
                </div>

                <div className="home-seven-in-one-in-box">
                  <div className="home-seven-in-one-in-box-in">
                    <Image
                      src={SVR_UpdateImage_13}
                      alt="Picture of the author"
                    ></Image>
                    <p>Women Empowerment</p>
                  </div>
                </div>

                <div className="home-seven-in-one-in-box">
                  <div className="home-seven-in-one-in-box-in">
                    <Image
                      src={AreasOfWork_Image_8}
                      alt="Picture of the author"
                    ></Image>
                    <p>Livilihood Enhancement</p>
                  </div>
                </div>

                <div className="home-seven-in-one-in-box">
                  <div className="home-seven-in-one-in-box-in">
                    <Image
                      src={SVR_UpdateImage_14}
                      alt="Picture of the author"
                    ></Image>
                    <p>Digital Literacy</p>
                  </div>
                </div>

                <div className="home-seven-in-one-in-box">
                  <div className="home-seven-in-one-in-box-in">
                    <Image
                      src={AreasOfWork_Image_6}
                      alt="Picture of the author"
                    ></Image>
                    <p>Green Innovation</p>
                  </div>
                </div>

                <div className="home-seven-in-one-in-box">
                  <div className="home-seven-in-one-in-box-in">
                    <Image
                      src={culturalExchange}
                      alt="Picture of the author"
                    ></Image>
                    <p>Cultural Exchange</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
