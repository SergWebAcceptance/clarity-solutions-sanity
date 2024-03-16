"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import FaqParallaxComponent from "./FaqParallaxComponent";

const FaqHero = () => {
  return (
    <>
      <section className="faq-hero">
        <div className="_container">
          <div className="faq-hero__body">
            <RevealWrapper delay={100} origin="bottom">
              <h1 className="wow fadeInUp">FAQ</h1>
            </RevealWrapper>
            <FaqParallaxComponent />
          </div>
        </div>
        <RevealWrapper delay={100} origin="bottom" className="dt-hidden">
          <img src="/images/faq/hero-mobile.png" />
        </RevealWrapper>
      </section>
    </>
  );
};
export default FaqHero;
