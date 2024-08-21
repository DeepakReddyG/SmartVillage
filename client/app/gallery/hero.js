"use client"

import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase"; 
import LoaderGif from '../../public/loader.gif';
import Image from 'next/image';
import './page.css';
import { useNavigate } from "react-router-dom";
import hero1 from "../Assets/GalleyHero.jpg"

const HeroImage = ({ imagePath }) => {
  const [imageUrl, setImageUrl] = useState("");

  const navigateToHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const fetchImageUrl = async () => {
      const imageRef = ref(storage, imagePath);
      try {
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };


    fetchImageUrl();
  }, [imagePath]);

  return (
    <><div className="home-button pb-5">
      <button
        onClick={navigateToHome}
      >
        Back to Home
      </button>
    </div><div>
        <Image src={hero1} alt="Hero Image" layout="responsive" />
      </div></>
     

  );
};

export default HeroImage;
