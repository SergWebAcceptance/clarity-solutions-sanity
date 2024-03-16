"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";

const BusinessSecond = () => {
  return (
    <>
      <section className="business-second">
        <div className="_container">
          <div className="business-second__body">
            <RevealWrapper delay={100} origin="bottom">
              <h2 className="section-title">Apply our payment solutions now</h2>
            </RevealWrapper>
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="business-second-row"
            >
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10.9546"
                      r="7.5"
                      stroke="#F85C3A"
                      stroke-width="5"
                    />
                  </svg>
                  Cost-effective
                </h4>
                <p>
                  Avoid exorbitant fees that eat into your bottom line—benefit
                  from our No-Cost model, ensuring payments without financial
                  burdens.
                </p>
              </div>

              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10.9546"
                      r="7.5"
                      stroke="#F85C3A"
                      stroke-width="5"
                    />
                  </svg>
                  Versatile options
                </h4>
                <p>
                  Pay, track, and manage your budget efficiently with a single
                  solution! We offer flexibility and simplicity of payments.
                </p>
              </div>

              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10.9546"
                      r="7.5"
                      stroke="#F85C3A"
                      stroke-width="5"
                    />
                  </svg>
                  Efficient & Straightforward
                </h4>
                <p>
                  Experience hassle-free account setup. Simply fill out the form
                  below, and we will reach out within 24 hours to prepare your
                  account for seamless payment transactions within a few hours.
                </p>
              </div>

              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10.9546"
                      r="7.5"
                      stroke="#F85C3A"
                      stroke-width="5"
                    />
                  </svg>
                  Personalised support
                </h4>
                <p>
                  Receive dedicated assistance from our experienced team
                  throughout your journey. We’re here to address your inquiries,
                  provide guidance, and ensure our solutions meet your needs.
                </p>
              </div>
            </RevealList>
          </div>
        </div>
      </section>
    </>
  );
};
export default BusinessSecond;
