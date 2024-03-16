"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import InsightsParallaxComponent from "./InsightsParallaxComponent";


const InsightsHero = () => {
  return (
    <>
      <section className="insights-hero">
        <div className="_container">
          <div className="insights-hero__body">
            <RevealWrapper delay={100} origin="bottom">
              <h1 className="wow fadeInUp">Insights</h1>
            </RevealWrapper>
            <InsightsParallaxComponent/>
            <RevealWrapper delay={100} origin="bottom" className="dt-hidden">
                
                <img  src="/images/insights/hero-mobile.png"/>
            </RevealWrapper>
          </div>
        </div>


      </section>
    </>
  );
};
export default InsightsHero;
