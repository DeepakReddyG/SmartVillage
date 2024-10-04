"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ref, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "../../firebase";

const MultiImageDisplay = ({ imagePaths }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImagesWithMetadata = async () => {
      try {
        const imageInfo = await Promise.all(
          imagePaths.map(async (path) => {
            const imageRef = ref(storage, path);
            const url = await getDownloadURL(imageRef);
            const metadata = await getMetadata(imageRef);
            const date = new Date(metadata.timeCreated).toLocaleDateString();

            return { url, date };
          })
        );
        setImages(imageInfo);
      } catch (error) {
        console.error("Error fetching image URLs and metadata:", error);
      }
    };

    fetchImagesWithMetadata();
  }, [imagePaths]);

  return (
    <div className="gallery-three-prime">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            src={image.url}
            alt={`Firebase Image ${index}`}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  );
};

export default MultiImageDisplay;