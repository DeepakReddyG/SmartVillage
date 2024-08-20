"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ref, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "../../firebase";
import loaderGif from "../../public/loader.gif";

const MultiImageDisplay = ({ imagePaths }) => {
  const [images, setImages] = useState([]);
  const [isAnyImageLoaded, setIsAnyImageLoaded] = useState(false);

  useEffect(() => {
    const fetchImagesWithMetadata = async () => {
      try {
        const imageInfo = await Promise.all(
          imagePaths.map(async (path) => {
            const imageRef = ref(storage, path);
            const url = await getDownloadURL(imageRef);
            const metadata = await getMetadata(imageRef);
            const date = new Date(metadata.timeCreated).toLocaleDateString();

            return { url, date, loading: true };
          })
        );
        setImages(imageInfo);
      } catch (error) {
        console.error("Error fetching image URLs and metadata:", error);
      }
    };

    fetchImagesWithMetadata();
  }, [imagePaths]);

  const handleImageLoad = (index) => {
    setImages((prevImages) =>
      prevImages.map((img, i) =>
        i === index ? { ...img, loading: false } : img
      )
    );
    setIsAnyImageLoaded(true);
  };

  return (
    <div className="gallery-three-prime">
      {!isAnyImageLoaded && (
        <div className="global-loader">
          <Image
            src={loaderGif}
            alt="Loading"
            width={100}
            height={100}
            style={{ objectFit: "cover", margin: "auto" }}
          />
        </div>
      )}
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          {image.loading ? (
            <Image
              className="gallery-image"
              src={loaderGif}
              alt="Loading"
              width={50}
              height={50}
            />
          ) : null}
          <img
            src={image.url}
            alt={`Firebase Image ${index}`}
            className="gallery-image"
            onLoad={() => handleImageLoad(index)}
            style={image.loading ? { display: "none" } : {}}
          />
          <p className="upload-date extra-small-text">
            Uploaded on: {image.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MultiImageDisplay;
