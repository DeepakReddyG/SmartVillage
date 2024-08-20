import React from "react";
import HeroImage from "./hero";
import MultiImageDisplay from "./displayAsset";
import './page.css';

const App = () => {
    const heroImagePath = "gallery/plantation2.jpg"; 

  const imagePaths = [
    "gs://svrwebsite-1e892.appspot.com/gallery/plantation.jpeg",
    "gs://svrwebsite-1e892.appspot.com/gallery/Screenshot 2024-08-17 at 8.52.04 AM.png",
    "gs://svrwebsite-1e892.appspot.com/gallery/svr_modifications.jpeg",
    "gs://svrwebsite-1e892.appspot.com/gallery/plantation2.jpg"
  ];

  return (
    <div className="gallery">

        <div className="hero-image">
            <HeroImage imagePath={heroImagePath} />
        </div>
        <div className="gallery-two">
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores enim illo possimus, beatae obcaecati in!</h1>
        </div>

        <div className="gallery-three">
            <MultiImageDisplay imagePaths={imagePaths} />       
        </div>
    </div>
  );
};

export default App;
