"use client"
import React, { useEffect, useState } from "react";
import HeroImage from "./hero";
import MultiImageDisplay from "./displayAsset";
import Footer from "../components/SmallFooter/footer";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import "./page.css";
import { FaArrowLeft } from "react-icons/fa";

const backToHome = () => {
  window.location.href = "/";
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const App = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [visiblecount, setVisibleCount] = useState(12); 
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 850) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const currentImages = imagePaths.slice(0, visiblecount);

  const loadMore = () => {
    setVisibleCount(visiblecount + 12);
  }
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
              Our gallery is a tribute to the countless memories we've created together. Each image reflects the joy, achievements, and shared experiences that make our community special.{" "}
              <u>We hope these captured moments resonate with you</u>, reminding you of the vibrant spirit of SVR. Enjoy reliving these memories as much as we do.
            </p>
          </div>
        </div>
        <div className="gallery-three">
          <MultiImageDisplay imagePaths={currentImages} />
        </div>
        <div className="back-to-home">
          <a href="/" className="BackToHome" onClick={backToHome}><FaArrowLeft /></a>
          {showScrollToTop && (
            <button onClick={scrollToTop} className="back-to-top-button">
              Scroll to Top
            </button>
          )}
        </div>
        <div className="load-more">
          <button onClick={loadMore} className="load-more-button">Load More</button>
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
