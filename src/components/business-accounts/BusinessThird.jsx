"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CustomPrevArrow = ({ onClick }) => (
  <div className="prev" onClick={onClick}>
    <Image width={40} height={40} src="/images/business/prev.svg" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="next" onClick={onClick}>
    <Image width={40} height={40} src="/images/business/next.svg" />
  </div>
);

const BusinessThird = () => {
  const slickSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    dots: false,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,

        },
      },
    ],
  };

  return (
    <>
      <section className="business-provide">
        <div className="_container">
          <div className="business-provide__body">
            <RevealWrapper delay={100} origin="bottom">
              <h2 className="section-title">Use cases</h2>
            </RevealWrapper>

            <Slider className="cases-slider" {...slickSettings}>
              <div className="case">
                <span>1</span>
                <h5>Project Expense Management</h5>
                <p>
                  Provide individual company cards to employees, allowing them
                  to spend allocated funds on business expenses such as travel,
                  meals, and supplies while facilitating easy tracking and
                  reconciliation.
                </p>
              </div>

              <div className="case">
                <span>2</span>
                <h5>Team or Project Spending</h5>
                <p>
                  Assign cards to teams or specific projects, enabling shared
                  spending aligned with predetermined budgets, ensuring
                  efficient resource allocation and cost control.
                </p>
              </div>

              <div className="case">
                <span>3</span>
                <h5>Virtual Cards for Supplier Management</h5>
                <p>
                  Create virtual cards for dedicated types of spending, such as
                  subscriptions or online advertising expenses, streamlining
                  payments to third-party suppliers and minimising duplicate or
                  wasted spending.
                </p>
              </div>

              <div className="case">
                <span>4</span>
                <h5>Ad Hoc Purchases</h5>
                <p>
                  Empower team members or contractors to make approved ad hoc
                  purchases with temporary virtual cards, active for a limited
                  time, and set usage limits to control expenditures
                  effectively.
                </p>
              </div>

              <div className="case">
                <span>5</span>
                <h5>Diverse Purchase Categories</h5>
                <p>
                  Utilise the cards for various purchases, including
                  advertising, development, technology, and online services,
                  ensuring flexibility and convenience in procurement processes
                  across different project aspects.
                </p>
              </div>

              <div className="case">
                <span>6</span>
                <h5>Cash Withdrawals</h5>
                <p>
                  Offer the option for cash withdrawals using physical cards,
                  providing users additional flexibility in accessing funds for
                  various business needs or personal expenses.
                </p>
              </div>
            </Slider>
            <RevealWrapper delay={100} origin="bottom">
              <Link href="#" className="orange-button">
                Get started today
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
};
export default BusinessThird;
