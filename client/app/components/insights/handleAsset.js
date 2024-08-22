import { ref, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "../../../firebase";

export const fetchImages = async () => {
  const paths = [
    "gs://svrwebsite-1e892.appspot.com/insights/insights7.jpg",
    "gs://svrwebsite-1e892.appspot.com/insights/insights2.jpg",
    "gs://svrwebsite-1e892.appspot.com/insights/insights1.jpg",
    "gs://svrwebsite-1e892.appspot.com/insights/insights3.jpg",
    "gs://svrwebsite-1e892.appspot.com/insights/insights4.jpg",
  ]; 
  
  try {
    const imageList = await Promise.all(
      paths.map(async (path) => {
        const imageRef = ref(storage, path);
        const url = await getDownloadURL(imageRef);
        const metadata = await getMetadata(imageRef);
        const description = null;
        const logoUrl = "/path/to/logo.png";

        return { url, description, logoUrl };
      })
    );

    return imageList;
  } catch (error) {
    console.error("Error fetching images from Firebase:", error);
    throw error;
  }
};
