"use client"

import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

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
    <div>
      {loading ? (
        <p>Something went wrong, plse wait.</p>
      ) : (
        <div class="gallery-three-prime">
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`Firebase Image ${index}`} style={{ maxWidth: '50%', height: 'auto', margin: '10px', border: '2px solid black' }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiImageDisplay;
