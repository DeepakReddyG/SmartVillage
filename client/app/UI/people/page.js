import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./page.css";
import '../../globals.css'

import VijaySirUpdated from "../../Assets/Updated Images/SAC_Director_Updated.png";
import President from "../../Assets/President.jpeg";
import Modi from "../../Assets/Modi.jpeg";


const page = () => {
  return (
    <div className="PeopleComponent">
      <div className="home-ten">
        <div className="home-ten-in">
          <div className="home-ten-header">
            <div className="home-ten-header-in">
              <h1>
                K L's Smart Village Revolution: In the Line of Sansad Adarsh
                Gram Yojana
              </h1>
            </div>
          </div>
          <div className="home-ten-one">
            <div className="home-ten-one-in">
              <div className="home-ten-one-in-one">
                <div className="home-ten-one-in-one-in">
                  <h2>
                    K L's Smart Village Revolution: In the Line of Sansad Adarsh
                    Gram Yojana
                  </h2>
                  <p>
                    On Independence Day, I had made commitment to you on behalf
                    of my colleagues in the Parliament. I laid out my dream of
                    Adarsh Grams as the nucleus of health, cleanliness, greenery
                    and cordiality within the community. The Guidelines that
                    follow are based on these principles and present the
                    complete blueprint of the Saansad Adarsh Gram Yojana for
                    each Member of Parliament to make one village of his or her
                    constituency a Model Village by 2016 and two more model
                    villages by 2019.
                  </p>

                  <Link
                    className="home-ten-one-in-one-in-link"
                    href="https://saanjhi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sansad Adarsh Gram Yojana
                  </Link>
                </div>
              </div>
              <div className="home-ten-one-in-two">
                <div className="home-ten-one-in-two-in">
                  <Image
                    className="home-ten-one-in-two-in-image"
                    src={Modi}
                    width={0}
                    height={0}
                    alt="Picture of the author"
                    // style={{ width: "100%" }}
                  />
                  <p>
                    Narendra modi <br />
                    <span>Prime minister of India</span>
                  </p>
                </div>
              </div>
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
                    className="home-four-one-in-one-in-image"
                    src={President}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Picture of the author"
                    style={{ width: "100%", height: "auto" }} // optional
                  />

                  <p>
                    Er.Koneru Satyanarayana <br />
                    <span>Chancellor - KLEF</span>
                  </p>
                </div>
                <div className="home-four-one-in-two"></div>
              </div>
            </div>
            <div className="home-four-two">
              <div className="home-four-two-in">
                <p>
                  The Smart Village Revolution (SVR) is a KLEF initiative
                  dedicated to leveraging technology acquired in classrooms for
                  the benefit of rural communities. This community-driven effort
                  mobilizes the collective strengths of faculty, students, and
                  various professionals, integrating them with technology to
                  serve rural areas. Inspired by Gandhian principles, SVR
                  focuses on providing technical solutions to local needs.
                  Encouraging the construction of green buildings, the
                  initiative enhances economic and environmental performance.
                  KLEF envisions a mass movement, empowering communities with
                  knowledge and skills to face technological challenges. This
                  project aligns with the university's commitment to sustainable
                  rural development, extending its impact beyond academia,
                  fostering social development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sai vijay's Message */}

      <div className="home-six message">
        <div className="home-six-in">
          <div className="home-six-header">
            <h1>Message from the Hon'ble SAC Director: KLEF</h1>
          </div>
          <div className="home-six-in-in">
            <div className="home-six-one">
              <div className="home-six-one-in">
                <div className="home-six-one-in-one">
                  <Image
                    className="home-six-one-in-one-in-image"
                    src={VijaySirUpdated}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Picture of the author"
                    style={{ width: "100%", height: "auto" }} // optional
                  />

                  <p>
                    P. Sai Vijay <br />
                    <span>Director SAC</span>
                  </p>
                </div>
                <div className="home-six-one-in-two"></div>
              </div>
            </div>
            <div className="home-six-two">
              <div className="home-six-two-in">
                <p>
                  Welcome to the Smart Village Revolution (SVR) project, where
                  students spearhead research, innovate solutions, and drive
                  rural development. With a focus on sustainable change, our
                  student-led initiatives tackle pressing issues through
                  innovative projects. From water conservation to healthcare
                  accessibility, we empower rural communities with tailored
                  solutions. Through hands-on research and project
                  implementation, students contribute to transformative change,
                  making a lasting impact on society. Join us as we
                  revolutionize rural development, one project at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
