"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Corrected import for swiper modules

import { fetchImages } from "./handleAsset";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import loaderGif from "../../../public/loader.gif";
import "./page.css";

const HeroSection = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageList = await fetchImages();
        setImages(imageList);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadImages();
  }, []);

  return (
    <div className="hero">
      <div className="hero-in">
        {loading ? (
          <div className="global-loader">
            <Image
              src={loaderGif}
              alt="Loading"
              width={100}
              height={100}

              style={{ objectFit: "cover", margin: "auto" }}
            />
          </div>
        ) : (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="hero-in-slider">
                  <img className="home-hero-images" src={image.url} alt={`${index}`} />
                  <div className="swiper-description">
                    <p>{image.description}</p>
                  </div>
                  <div className="swiper-logo">
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSection;