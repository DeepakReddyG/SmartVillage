import React from "react";
import HeroImage from "./hero";
import MultiImageDisplay from "./displayAsset";

import Footer from '../components/footer/Footer';

import './page.css';

const App = () => {
    const heroImagePath = "gallery/plantation2.jpg"; 

  const imagePaths = [
    "gs://svrwebsite-1e892.appspot.com/gallery/plantation.jpeg",
    "gs://svrwebsite-1e892.appspot.com/gallery/Screenshot 2024-08-17 at 8.52.04 AM.png",
    "gs://svrwebsite-1e892.appspot.com/gallery/svr_modifications.jpeg",
    "gs://svrwebsite-1e892.appspot.com/gallery/plantation2.jpg",
    "gs://svrwebsite-1e892.appspot.com/gallery/coding_contest_updated.png"
  ];

  return (
    <div className="gallery">
        <div className="gallery-main">
            <div className="hero-image">
                <HeroImage imagePath={heroImagePath} />
            </div>
            <div className="g-one">
                <div className="g-one-in">
                    <h1>Capturing the Spirit: Moments of SVR Through the Years</h1>
                    <p>Our gallery is a tribute to the countless memories we've created together. Each image reflects the joy, achievements, and shared experiences that make our community special. <u>We hope these captured moments resonate with youb</u>, reminding you of the vibrant spirit of SVR. Enjoy reliving these memories as much as we do.</p>
                </div>
            </div>
            <div className="gallery-three">
                <MultiImageDisplay imagePaths={imagePaths} />       
            </div>
        </div>


        <div className="Footer">
              <Footer/>
        </div>
    </div>
  );
};

export default App;
