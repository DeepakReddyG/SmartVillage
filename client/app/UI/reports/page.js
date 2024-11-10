import React from "react";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import Model from "../../components/modal/modal";


import './page.css'


const page = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-eight">
      <div className="home-eight-in">
        <div className="home-eight-one">
          <div className="home-eight-one-in">
            <div className="home-eight-one-in-book">
              {/* <Book/> */}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/BookFlip%2F1.png?alt=media&token=95cf0077-bf1a-4e73-b426-acce93e5e9ac"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="home-eight-two">
          <div className="home-eight-two-in">
            <h1>Overall Annual Report : Smart Village Revolution</h1>
            <p>
              Empowering Futures: A Journey of Impact and Growth – Annual
              Reports of Smart Village Revolution from past years
            </p>
            <div className="home-eight-two-in-buttons">
              <button onClick={handleOpenModal}>View Report</button>
              <Link
                className="home-eight-two-in-activitie-link"
                href="https://online.fliphtml5.com/ufgkg/qqpf/#p=1"
              >
                2018-2020
              </Link>
              <Link
                className="home-eight-two-in-activitie-link"
                href="https://online.fliphtml5.com/ufgkg/ngko/#p=1"
              >
                2020-2021
              </Link>
              <Link
                className="home-eight-two-in-activitie-link"
                href="https://online.fliphtml5.com/ufgkg/kpva/#p=1"
              >
                2021-2022
              </Link>
              <Link
                className="home-eight-two-in-activitie-link"
                href="https://online.fliphtml5.com/ufgkg/esri/#p=1"
              >
                2022-2024
              </Link>
              <Link
                className="home-eight-two-in-activitie-link"
                href="/activities"
              >
                View Activities
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Model
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        pdfUrl="/ReportPDFS/Final_Report.pdf"
      />
    </div>
  );
};

export default page;
