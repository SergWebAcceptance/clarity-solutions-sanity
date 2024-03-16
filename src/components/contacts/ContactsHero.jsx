"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import ContactsParallaxComponent from "./ContactsParallaxComponent";
import Link from "next/link";

const ContactsHero = () => {
  return (
    <>
      <section className="contacts-hero">
        <div className="_container">
          <div className="contacts-hero__body">
            <RevealWrapper delay={100} origin="bottom">
              <h1 className="wow fadeInUp">
                Seeking <br />
                an answer?
              </h1>
              <p className="wow fadeInUp">
                We recommend checking out our FAQ section for the quickest
                resolution to your queries. Before filling out the contact form,
                do take a moment to explore our FAQ page.
              </p>
              <Link href="/faq" className="black-button">
                Dive into FAQ
              </Link>
            </RevealWrapper>
            <RevealWrapper className="hero-mobile" origin="bottom">
              <img src="/images/contacts/hero-mobile.png" />
            </RevealWrapper>
          </div>
        </div>
        <ContactsParallaxComponent />
      </section>
    </>
  );
};
export default ContactsHero;
