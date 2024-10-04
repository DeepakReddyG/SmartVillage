import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip'; // Ensure this library is correctly imported
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'; // Firebase imports

const FlipBookComponent = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state for debugging

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storage = getStorage();
        const listRef = ref(storage, 'BookFlip'); // Update the path as needed
  
        // Fetch all image references from Firebase
        const response = await listAll(listRef);
  
        // Sort by filenames before getting URLs
        const sortedItems = response.items.sort((a, b) => {
          const aPageNumber = parseInt(a.name.match(/(\d+)\.png$/)?.[1], 10);
          const bPageNumber = parseInt(b.name.match(/(\d+)\.png$/)?.[1], 10);
  
          return aPageNumber - bPageNumber;
        });
  
        // Fetch URLs for each sorted image
        const imagePromises = sortedItems.map((item) => getDownloadURL(item));
  
        // Resolve all image URLs
        const sortedImageUrls = await Promise.all(imagePromises);
  
        // Set the sorted images into state
        setImages(sortedImageUrls);
        setLoading(false); // Stop loading once images are fetched
      } catch (error) {
        console.error("Error fetching images from Firebase:", error);
        setLoading(false);
      }
    };
  
    fetchImages();
  }, []);
  
  
  
  return (
    <div>
      {images.length > 0 ? (
        <HTMLFlipBook className='flipbook-main' width={500} height={700} size="stretch">
          {images.map((image, index) => (
            <div key={index} className="flipbook-page">
              <img src={image} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </HTMLFlipBook>
      ) : (
        <div>No images found</div> // Show if no images are loaded
      )}
    </div>
  );
};

export default FlipBookComponent;
