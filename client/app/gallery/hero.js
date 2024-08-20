"use client"
import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase"; 

const HeroImage = ({ imagePath }) => {
  const [imageUrl, setImageUrl] = useState("");

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
    <div className="hero-image-prime">
      {imageUrl ? (
        <img src={imageUrl} alt="Hero" style={{ width: "100%", height: "700px", objectFit: "cover", objectPosition: "center", margin: "0px", border: "2px solid green", borderRadius: "10px" }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HeroImage;
