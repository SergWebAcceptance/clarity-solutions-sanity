"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import TariffsParallaxComponent from "./TariffsParallaxComponent";


const TariffsHero = () => {
  return (
    <>
      <section className="tariffs-hero">
        <div className="_container">
          <div className="tariffs-hero__body">
            <RevealWrapper delay={100} origin="bottom">
              <h1 className="wow fadeInUp">Clarity Solutions tariffs</h1>
            </RevealWrapper>
            <TariffsParallaxComponent/>
          </div>
        </div>
        <RevealWrapper delay={100} origin="bottom" className="dt-hidden">
                <img src="/images/tariffs/hero-mobile.png"/>
        </RevealWrapper>

      </section>
    </>
  );
};
export default TariffsHero;
