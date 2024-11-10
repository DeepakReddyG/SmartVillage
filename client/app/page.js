"use client";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HeroSection from "./UI/hero/page";

// UI
import Stats from "./UI/stats/page";
import Domains from "./UI/domains/page";
import Works from "./UI/works/page";
import Reports from "./UI/reports/page";
import People from "./UI/people/page";
import Principles from "./UI/priciples/page";

import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import HomeNavbar from "./components/navbar/HomeNavbar";
import ResNavbar from "./components/navbar/ResNav";
import Footer from "./components/footer/Footer";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scroll = window.scrollY;
      if (window.scrollY > 300) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });
  }, []);

  // ---------- Boot Animation ------------

  const [showAnimation, setShowAnimation] = useState(true);

  // make this animation only once

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 1);
    return () => clearTimeout(timer);
  }, []);

  return showAnimation ? (
    <div className="init">
      <h1>Smart Village Revolution</h1>
    </div>
  ) : (
    <div className="home-component">
      <div className="home-container">
        <div className="Navbar">{showNavbar ? <Navbar /> : <HomeNavbar />}</div>
        <div className="Navbar-Res">
          <ResNavbar />
        </div>

        <HeroSection />
        <Stats />
        <Domains />
        <Works />
        <Reports />
        <People />
        <Principles />

        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
