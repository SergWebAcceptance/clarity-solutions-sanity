"use client";
import { useEffect } from "react";

const BusinessParallaxComponent = () => {
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
        <img src="/images/business/hero1.svg" />
      </div>
      <div value="5" className="hero2">
        <img src="/images/business/hero2.svg" />
      </div>
      <div value="-5" className="hero3">
        <img src="/images/business/hero3.svg" />
      </div>
      <div value="-3" className="circle1">
        <img src="/images/home/circle-white.svg" />
      </div>
      <div value="-3" className="circle2">
        <img src="/images/home/circle-black.svg" />
      </div>
      <div value="-3" className="circle3">
        <img src="/images/home/circle-black.svg" />
      </div>
      <div value="-3" className="circle4">
        <img src="/images/home/circle-white.svg" />
      </div>
      {/* Add more parallax layers as needed */}
    </div>
  );
};

export default BusinessParallaxComponent;
