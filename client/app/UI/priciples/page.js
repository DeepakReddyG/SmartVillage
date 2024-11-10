import React, { useState } from "react";
import Image from "next/image";

import "./page.css";

import SVR_UpdateImage_1 from "../../Assets/Updated Images/Agriculture.png";
import SVR_UpdateImage_2 from "../../Assets/Updated Images/Education.png";
import SVR_UpdateImage_3 from "../../Assets/Updated Images/Health .png";
import SVR_UpdateImage_5 from "../../Assets/Updated Images/Infrastruture.png";
import SVR_UpdateImage_11 from "../../Assets/Updated Images/RenewableEnergy.png";
import SVR_UpdateImage_12 from "../../Assets/Updated Images/WomenEmpowerMent.png";

import SVR_UpdateImage_17 from "../../Assets/Updated Images/Culture.png";
import SVR_UpdateImage_19 from "../../Assets/Updated Images/LatestCultureAndCommunity.png";

const page = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState('Agriculture');

  const principles = [
    'Agriculture',
    'Quality Education',
    'Village Infrastructure',
    'Culture and Community',
    'Health and Hygiene',
    'Energy Availability and Efficiency',
    'Green Innovation',
    'Women Empowerment',
  ];

  const handlePrincipleClick = (principle) => {
    setSelectedPrinciple(principle);
  };

  return (
    <div className="home-five" id="home-five">
      <div className="home-five-in">
        <div className="home-five-one">
          <h1>Focus - 9 Way Principle</h1>
        </div>
        <div className="home-five-two">
          <div className="home-five-two-in">
            <div className="home-five-box-one">
              <div className="home-ft-box-in">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className={`se-cm ${selectedPrinciple === principle ? 'se-active' : ''}`}
                    onClick={() => handlePrincipleClick(principle)}
                  >
                    <div className="se-cm-in">
                      <p>{principle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="home-five-box-two">
              <div className="home-ft-box-two-in">
                <div
                  className="home-bt-one cm-bx-hide"
                  id={selectedPrinciple === 'Agriculture' ? "se-visible" : ""}
                >
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
                            <p>
                              Agriculture in Smart Villages thrives through the
                              adoption of precision farming techniques.
                              Leveraging technology, farmers make data-driven
                              decisions for irrigation, fertilization, and pest
                              control. Sustainable practices like organic
                              farming and renewable energy integration ensure
                              long-term environmental health.Providing access to
                              modern agricultural practices and tools for
                              continuous improvement.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="home-bt-one-in-one-in-two">
                          <div className="home-bt-one-in-one-in-two-in">
                            <Image
                              className="home-bt-one-in-one-in-two-in-image"
                              src={SVR_UpdateImage_1}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="home-bt-two cm-bx-hide"
                  id={selectedPrinciple === 'Quality Education' ? "se-visible" : ""}
                >
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
                            <p>
                              Access to quality education is pivotal. Smart
                              Villages utilize digital learning tools, offer
                              training for teachers, and establish schools with
                              modern resources. This empowers the youth,
                              fostering innovation and preparing them for
                              diverse career opportunities. Continuous training
                              programs for educators to align teaching methods
                              with modern pedagogies. Offering vocational
                              training and specialized courses to prepare
                              students for diverse careers.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="home-bt-one-in-one-in-two">
                          <div className="home-bt-one-in-one-in-two-in">
                            <Image
                              className="home-bt-one-in-one-in-two-in-image"
                              src={SVR_UpdateImage_2}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="home-bt-three cm-bx-hide"
                  id={selectedPrinciple === 'Village Infrastructure' ? "se-visible" : ""}
                >
                  <div className="home-bt-one-in">
                    <div className="home-bt-one-in-header">
                      <div className="home-bt-one-in-header-in">
                        <h1>Village Infrastructure</h1>
                      </div>
                    </div>
                    <div className="home-bt-one-in-one">
                      <div className="home-bt-one-in-one-in">
                        <div className="home-bt-one-in-one-in-one">
                          <div className="home-bt-one-in-one-in-one-in">
                            <p>
                              Developing robust infrastructure is vital for
                              enhancing accessibility and fostering economic
                              growth in rural areas. This includes reliable
                              transportation networks linking villages to
                              markets and services, sustainable energy sources
                              for consistent power, and internet connectivity to
                              bridge the digital divide. Community centers and
                              waste management systems promote social
                              interaction and environmental sustainability.
                              Resilient infrastructure withstands natural
                              disasters, while housing and urban planning ensure
                              safe and comfortable living conditions. These
                              efforts collectively empower rural communities and
                              drive sustainable development.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="home-bt-one-in-one-in-two">
                          <div className="home-bt-one-in-one-in-two-in">
                            <Image
                              className="home-bt-one-in-one-in-two-in-image"
                              src={SVR_UpdateImage_5}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="home-bt-four cm-bx-hide"
                  id={selectedPrinciple === 'Culture and Community' ? "se-visible" : ""}
                >
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
                            <p>
                              Preserving local traditions while embracing
                              progressiveness is pivotal. Community engagement
                              in cultural events strengthens social cohesion.
                              Supporting local artisans promotes heritage.
                              Celebrating diverse identities fosters belonging.
                              Cultural exchange platforms foster understanding.
                              Engaging youth ensures tradition continuity.
                              Community centers serve as hubs for education and
                              dialogue. This holistic approach nurtures
                              heritage, innovation, and inclusivity, fostering a
                              vibrant and cohesive community deeply rooted in
                              its cultural identity while embracing the dynamics
                              of modernity.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="home-bt-one-in-one-in-two">
                          <div className="home-bt-one-in-one-in-two-in">
                            <Image
                              className="home-bt-one-in-one-in-two-in-image"
                              src={SVR_UpdateImage_19}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="home-bt-five cm-bx-hide"
                  id={selectedPrinciple === 'Health and Hygiene' ? "se-visible" : ""}
                >
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
                            <p>
                              Establishing healthcare facilities with essential
                              services and trained professionals, along with
                              health education on hygiene and disease
                              prevention, ensures community wellness. Access to
                              clean water via purification systems and
                              sanitation facilities improves hygiene. Essential
                              medications and vaccines are available, promoting
                              early detection through regular screenings.
                              Fitness programs and collaborations with local
                              health workers foster healthy lifestyles. These
                              initiatives, including outreach programs, form a
                              comprehensive approach to community health in just
                              75 words.
                            </p>
                          </div>
                        </div>
                        <div className="home-bt-one-in-one-in-two">
                          <div className="home-bt-one-in-one-in-two-in">
                            <Image
                              className="home-bt-one-in-one-in-two-in-image"
                              src={SVR_UpdateImage_3}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="home-bt-six cm-bx-hide"
                  id={selectedPrinciple === 'Energy Availability and Efficiency' ? "se-visible" : ""}
                >
                  <div className="home-bt-one-in">
                    <div className="home-bt-one-in-header">
                      <div className="home-bt-one-in-header-in">
                        <h1>Energy Availability and Efficiency</h1>
                      </div>
                    </div>
                    <div className="home-bt-one-in-one">
                      <div className="home-bt-one-in-one-in">
                        <div className="home-bt-one-in-one-in-one">
                          <div className="home-bt-one-in-one-in-one-in">
                            <p>
                              Promoting sustainable agriculture ensures food
                              security while minimizing environmental impact.
                              Renewable energy adoption, like solar power and
                              biogas, fosters clean energy solutions.
                              Eco-friendly waste management reduces pollution
                              and promotes recycling. Sustainable water
                              management conserves resources and prevents
                              scarcity. Reforestation and conservation efforts
                              preserve biodiversity. Education and awareness
                              campaigns encourage sustainable living.
                              Collaborative efforts with local communities drive
                              sustainable development projects, fostering a
                              resilient and environmentally conscious society.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="home-bt-one-in-one-in-two">
                          <div className="home-bt-one-in-one-in-two-in">
                            <Image
                              className="home-bt-one-in-one-in-two-in-image"
                              src={SVR_UpdateImage_11}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="home-bt-seven cm-bx-hide"
                  id={selectedPrinciple === 'Green Innovation' ? "se-visible" : ""}
                >
                  <div className="home-bt-one-in">
                    <div className="home-bt-one-in-header">
                      <div className="home-bt-one-in-header-in">
                        <h1>Green Innovation</h1>
                      </div>
                    </div>
                    <div className="home-bt-one-in-one">
                      <div className="home-bt-one-in-one-in">
                        <div className="home-bt-one-in-one-in-one">
                          <div className="home-bt-one-in-one-in-one-in">
                            <p>
                              Tailored skill programs address community and
                              market needs, fostering entrepreneurship through
                              training, mentorship, and resource access.
                              Micro-enterprises and cooperatives strengthen
                              local industries. Financial literacy and
                              microfinance support aspiring entrepreneurs.
                              Sustainable farming and alternative livelihoods
                              diversify incomes. Market linkages boost local
                              goods. Vocational training and apprenticeships
                              refine specialized skills. Innovation initiatives
                              aid small businesses and startups. These efforts
                              drive economic growth, empower individuals, and
                              cultivate resilient communities poised for
                              sustainable development.
                            </p>
                          </div>
                        </div>
                        <div className="home-bt-one-in-one-in-two">
                          <div className="home-bt-one-in-one-in-two-in">
                            <Image
                              className="home-bt-one-in-one-in-two-in-image"
                              src={SVR_UpdateImage_17}
                              alt="Picture of the author"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="home-bt-eight cm-bx-hide"
                  id={selectedPrinciple === 'Women Empowerment' ? "se-visible" : ""}
                >
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
                            <p>
                              Tailored education, leadership training, and
                              mentorship empower women, fostering community
                              engagement and decision-making. Access to
                              healthcare, support networks, and legal services
                              address their needs comprehensively.
                              Entrepreneurship and vocational training ensure
                              financial independence. Cultural bias is
                              challenged through awareness campaigns. These
                              initiatives collectively advance gender equality,
                              enabling women to thrive and contribute
                              meaningfully. By providing holistic support, we
                              empower women to break barriers, shape their
                              futures, and become agents of positive change in
                              their communities and beyond.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="home-bt-one-in-one-in-two">
                          <div className="home-bt-one-in-one-in-two-in">
                            <Image
                              className="home-bt-one-in-one-in-two-in-image"
                              src={SVR_UpdateImage_12}
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
  );
};

export default page;
