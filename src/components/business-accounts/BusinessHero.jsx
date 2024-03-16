"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import BusinessParallaxComponent from "./BusinessParallaxComponent";

const BusinessHero = () => {
  return (
    <>
      <section className="business-hero">
        <div className="_container">
          <div className="business-hero__body">
            <RevealWrapper delay={100} origin="bottom">
              <h1 className="wow fadeInUp">
                Clarity Solutions <br />
                use cases
              </h1>
              <p className="wow fadeInUp">
                Unlock the potential of our payment solutions! Discover the
                versatility of Clarity Solutions&apos; debit cards. Effortlessly
                manage expenses with dedicated IBAN accounts, monitor real-time
                transactions, and streamline budget management with integrated
                services. Take control of your finances today!
              </p>
            </RevealWrapper>
          </div>
        </div>
        <BusinessParallaxComponent />
        <RevealWrapper className="hero-mobile" origin="bottom">
          <img src="/images/business/hero-mobile.png" />
        </RevealWrapper>
      </section>
    </>
  );
};
export default BusinessHero;
