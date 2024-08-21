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
  const heroImagePath = "gallery/15.jpg";

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
            <p>
              Our gallery is a tribute to the countless memories we've created together. Each image reflects the joy, achievements, and shared experiences that make our community special.{" "} <u>We hope these captured moments resonate with you</u>, reminding you of the vibrant spirit of SVR. Enjoy relivin these memories as much as we do.
            </p>
          </div>
        </div>
        <div className="gallery-three">
          <MultiImageDisplay imagePaths={imagePaths} />
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
