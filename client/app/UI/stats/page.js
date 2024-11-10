import React, { useState } from "react";

import CountUp from "react-countup";
import Model from "../../components/modal/modal";
import { MdOpenInNew } from "react-icons/md";

import "./page.css";

const page = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-three">
      <div className="home-three-in">
        <div className="home-three-one">
          <div className="home-three-one-in">
            <h1>
              K L University's Smart Village Revolution - Empowering Communities
              with Innovation and Sustainability.
            </h1>
            <p>
              In the smart village revolution, traditional wisdom and
              cutting-edge concepts coexist harmoniously. Solar-powered schools,
              quick access to medical assistance, and cellphone-enabled soil
              monitoring empower communities. Progress flows effortlessly and
              sustainably, nourishing villages like water touched by the sun.
              Tradition endures as innovation fortifies it, fostering common
              aspirations and promising tomorrows.
            </p>

            <div className="home-three-on-in-link">
              <button
                className="home-three-one-in-link"
                onClick={handleOpenModal}
              >
                <span>Learn More About What We Do</span> <MdOpenInNew />
              </button>
            </div>
          </div>
        </div>
        <div className="home-three-two">
          <div className="home-three-two-in">
            <div className="home-three-two-in-two">
              <div className="home-three-two-in-two-boxes">
                <div className="home-three-two-in-two-box">
                  <div className="home-three-two-in-two-box-in">
                    <div className="home-three-two-in-two-box-in-one">
                      <h1>
                        <CountUp end={105} />+
                      </h1>
                    </div>
                    <div className="home-three-two-in-two-box-in-two">
                      <p>
                        <span>Villages Adopted</span> by K L University Under
                        Smart Village Revolution Project
                      </p>
                    </div>
                  </div>
                </div>
                <div className="home-three-two-in-two-box">
                  <div className="home-three-two-in-two-box-in">
                    <div className="home-three-two-in-two-box-in-one">
                      <h1>
                        <CountUp end={16000} />+
                      </h1>
                    </div>
                    <div className="home-three-two-in-two-box-in-two">
                      <p>
                        <span>The Students Actively </span>involved in community
                        endeavors
                      </p>
                    </div>
                  </div>
                </div>
                <div className="home-three-two-in-two-box">
                  <div className="home-three-two-in-two-box-in">
                    <div className="home-three-two-in-two-box-in-one">
                      <h1>
                        <CountUp end={150500} />+
                      </h1>
                    </div>
                    <div className="home-three-two-in-two-box-in-two">
                      <p>
                        <span>The villagers demonstrated proactive </span> and
                        engaged involvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Model
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          pdfUrl="https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/PDFS%2FSVR.pdf?alt=media&token=39c8fe16-79c6-495d-b424-611285e88264"
        />
      </div>
    </div>
  );
};

export default page;
