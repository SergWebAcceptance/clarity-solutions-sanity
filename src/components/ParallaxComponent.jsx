"use client";
import { useEffect } from "react";

const ParallaxComponent = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      document.querySelectorAll(".parallax div").forEach((shift) => {
        const hasNoVertClass = shift.classList.contains("no-vert");
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        if (hasNoVertClass) {
          shift.style.transform = `translateX(${x}px) translateY(0px)`;
        } else {
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      });
    };

    // Attach the event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax">
      {/* Your parallax content here */}
      <div value="3" className="hero1">
        <img src="/images/home/hero1.png" alt="Hero 1"/>
      </div>
      <div value="5" className="hero2">
        <img src="/images/home/hero2.png" alt="Hero 2"/>
      </div>
      <div value="-5" className="hero3">
        <img src="/images/home/hero3.png" alt="Hero 3"/>
      </div>
      <div value="-3" className="circle1">
        <img src="/images/home/circle-white.svg" alt="Circle white"/>
      </div>
      <div value="-3" className="circle2">
        <img src="/images/home/circle-black.svg" alt="Circle black"/>
      </div>
      <div value="-3" className="circle3">
        <img src="/images/home/circle-black.svg" alt="Circle black"/>
      </div>
      <div value="-3" className="circle4">
        <img src="/images/home/circle-white.svg" alt="Circle white"/>
      </div>
      {/* Add more parallax layers as needed */}
    </div>
  );
};

export default ParallaxComponent;
