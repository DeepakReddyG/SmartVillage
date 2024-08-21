"use client"

import React, { useEffect, useState } from "react";
import HeroImage from "./hero";
import MultiImageDisplay from "./displayAsset";
import Footer from "../components/footer/Footer";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import "./page.css";

const App = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const heroImagePath = "gallery/16.jpg";

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, "gallery");
      const result = await listAll(imagesRef);

      const urls = await Promise.all(
        result.items.map((item) => getDownloadURL(item))
      );

      setImagePaths(urls);
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
        <div className="gallery-main">
            <div className="hero-image">
                <HeroImage imagePath={heroImagePath} />
            </div>
            <div className="g-one">
                <div className="g-one-in">
                    <h1>Capturing the Spirit: Moments of SVR Through the Years</h1>
                    <p>Our gallery is a tribute to the countless memories we've created together. This section displays a collection of images that document the activities, events, and milestones of our club. Each photo highlights significant moments in our ongoing efforts to promote collaboration, excellence, and community engagement. The gallery is regularly updated with our most recent events and initiatives. We invite you to explore these images to gain insight into the work and achievements that represent our club. This collection serves as a visual record of our dedication to our mission and values. <u>We hope these captured moments resonate with you</u>, reminding you of the vibrant spirit of SVR. Enjoy reliving these memories as much as we do.</p>
                </div>
            </div>
            <div className="gallery-three">
                <MultiImageDisplay imagePaths={imagePaths} />       
            </div>
        </div>


       
    </div>
  );
};

export default App;
