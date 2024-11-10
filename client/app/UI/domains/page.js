import React, { useState } from "react";
import Model from "../../components/modal/modal";
import { MdOpenInNew } from "react-icons/md";
import Image from "next/image";

import SVR_Image_1 from "../../Assets/IMG_8078.JPG";


import "./page.css";

const page = () => {

  return (
    <div className="home-two">
      <div className="home-two-in">
        <div className="home-two-in-header">
          {/* <h1>Smart Village Revolution at K L Deemed to be University: Steps towards Adarsh Gram </h1> */}
          <h1>
            Smart Village Revolution at K L Deemed to be University: Steps
            towards Sansad Adarsh Gram
          </h1>
        </div>
        <div className="home-two-in-one">
          <div className="home-two-in-one-in">
            <div className="home-two-in-one-in-one">
              <div className="home-two-in-one-in-one-in">
                {/* <p>Smart Village Revolution at K L Deemed to be University is a rural development programme broadly focusing upon the development in the villages which includes social development, cultural development and spread motivation among the people on social mobilization of the village community. The programme was launched by the President of KLEF, Hon'ble Shri Koneru Lakshmaiah on the birth anniversary of Jayaprakash Narayan, on 11 October 2014.</p> */}
                <p>
                  At K L Deemed to be University, the Smart Village Revolution
                  unfolds through deliberate steps towards Sansad Adarsh Gram .
                  Education, community engagement, and sustainable practices
                  form the foundation. Together, we're crafting a future where
                  technology meets tradition, and our village becomes a model of
                  progress, prosperity, and excellence. The programme was
                  launched by the President of KLEF, Hon'ble Shri Koneru
                  Satyanarayana Garu on the birth anniversary of Jayaprakash
                  Narayan, on 11 October 2014.
                </p>
                <div className="home-two-in-one-in-boxes">
                  <div className="home-two-in-one-in-boxes-in">
                    <div className="home-two-in-one-in-boxes-in-box">
                      <div className="home-two-in-one-in-boxes-in">
                        {[
                          "Agriculture",
                          "Quality Education",
                          "Village Infrastructure",
                          "Water conservation",
                          "Energy Availablity and Efficieny",
                          "Material and Resources",
                          "Social Community Actions",
                          "Green Innovation",
                          "Women Empowerment",
                        ].map((item, index) => (
                          <div
                            className="home-two-in-one-in-boxes-in-box"
                            key={index}
                          >
                            <div className="home-two-in-one-in-boxes-in-box-in">
                              <p>{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-two-in-one-in-two">
              <div className="home-two-in-one-in-two-in">
                <Image
                  className="home-two-in-one-in-two-in-image"
                  src={SVR_Image_1}
                  alt="Picture of the author"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
