"use client";

import React, { useEffect, useState } from "react";
import LoaderGif from '../../public/loader.gif';
import './page.css';

// Define the image paths relative to the public directory
const imagePaths = [
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F19.jpg?alt=media&token=b955c9f0-d32d-4502-898b-1968c3706336",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F2.jpg?alt=media&token=862dbb08-d805-4168-b29e-207d1e9bdc24",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F17.jpg?alt=media&token=de322f32-4c17-47b8-9ad1-3ad6a8fc0229",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F3.jpg?alt=media&token=877bd9aa-2bba-4602-91c9-507f3178a848",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F5.jpg?alt=media&token=acd43fd8-4d6b-4475-8651-04252fce22d4",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F8.jpg?alt=media&token=47a7a473-082a-43da-b0cc-9f3877b4b909",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F7.jpg?alt=media&token=2b5a559e-209b-484b-827a-a6e50f81b2eb",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F9.jpg?alt=media&token=9c1477f9-b424-418f-8673-c79daa96e3c8",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F10.jpg?alt=media&token=f50bb604-a75a-4057-adf6-c579c30b41a3",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F13.jpg?alt=media&token=5d20106b-986e-46f5-b1cc-2e138ed65a90",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F11.jpg?alt=media&token=182c5670-c381-42a0-82a0-bb89a3ae9873",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F12.jpg?alt=media&token=e1ea216c-dac7-41d1-9c95-128b1be9c0b6",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F6.jpg?alt=media&token=08b50329-770f-4e9e-853c-40d55b2902c5",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F18.jpg?alt=media&token=2deb7d90-160a-48b4-aa2b-7866342d20ad",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F15.jpg?alt=media&token=a94ab6a1-e53c-40e8-a3e8-67bc56b90db3",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F16.jpg?alt=media&token=6d21b0f8-3ac1-4409-a8f3-8d2b4324b9cc",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F4.jpg?alt=media&token=79ddf345-f09a-4bb8-9f6d-416a4c16b023",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F14.jpg?alt=media&token=b46ad9ac-a459-4d63-941e-1472768a099f",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F1.jpg?alt=media&token=3050182d-10ab-455d-a309-21d5462e459d",
  "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2F20.jpg?alt=media&token=e512f3f8-d8a9-4540-afc2-a3a49eb95355"
];


const imageTexts = [
  "Smart Village Revolution",
  "Vriksharopam Mahotsav Phase 1",
  "Cleanliness drive Phase 1",
  "City Skyline at Night",
  "Cleanliness drive Phase 2",
  "Vriksharopam Mahotsav Phase 2",
  "Blood DOnation Camp Phase 1",
  "Village Education Phase 1",
  "Rolling Hills",
  "Awareness about deforestation",
  "Vibrant City Streets",
  "Awareness about health and hygiene",
  "Cleanliness drive Phase 3",
  "Blood Donation Camp Phase 2",
  "Blood Donation Camp Phase 3",
  "Rocky Coastline",
  "Awareness about Waste Management",
  "Enquiry on infrastructure",
  "Rustic Countryside",
  "Village Education Phase 2"
];


const MultiImageDisplay = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadImages = () => {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    };

    loadImages();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  
  return (
    <>
      <div className="gallery-three-prime">
        {loading ? (
          <img src={LoaderGif} alt="Loading" className="loader" />
        ) : (
          imagePaths.map((image, index) => (
            <div key={index} className="gallery-image-container">
              <img
                // key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="gallery-image"
              />
              <div className="hover-overlay">
                <span>{imageTexts[index]}</span>
              </div>
              </div>
              ))
              )}
            </div>
            <div className="back-button">
                <button
                  onClick={scrollToTop}
                >
                  Scroll back to Top
                </button>
              </div>
    </>
  );
};

export default MultiImageDisplay;
