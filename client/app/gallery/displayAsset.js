"use client"

import React, { useEffect, useState } from "react";
// import { ref, getDownloadURL } from "firebase/storage";
import {ref, getDownloadURL} from "firebase/storage";
import { storage } from "../../firebase";

import LoaderGif from '../../public/loader.gif';

const MultiImageDisplay = ({ imagePaths }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const urls = await Promise.all(
          imagePaths.map(async (path) => {
            const imageRef = ref(storage, path);
            return await getDownloadURL(imageRef);
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImageUrls();
  }, [imagePaths]);

  return (
    <div className="gallery-three-prime">
      {loading ? (
        <img src={LoaderGif} alt="Loading" className="loader" />
      ) : (
        imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Firebase Image ${index}`}
            className="gallery-image"
          />
        ))
      )}
    </div>
  );
};

export default MultiImageDisplay;
