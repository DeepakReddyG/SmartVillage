"use client"

import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase"; 
import LoaderGif from '../../public/loader.gif';
import Image from 'next/image';
import './page.css';
import { useNavigate } from "react-router-dom";
import image from "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/gallery%2FAdarsh_Gram.JPG?alt=media&token=8fe9e0ef-a6cf-4630-bfb9-ac6e7f87492e"

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
        <img src={image}></img>
      </div></>
     

  );
};

export default HeroImage;
