"use client";
import { urlFor } from "@/lib/insights";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";


const InsightCard = ({ insightObject }) => {



  return (
    <>
      <RevealWrapper delay={100} origin="bottom">
        <Link href={`/insights/${insightObject.slug}`}>
          <div
            className="thumbnail"
            style={{ backgroundImage: `url(${urlFor(insightObject.image).url()})` }}
          ></div>
          <div className="info">
            <h3>{insightObject.title}</h3>
            <span>
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  transform="matrix(-1 8.74228e-08 8.74228e-08 1 24 0)"
                  fill="#F85C3A"
                />
                <path
                  d="M10.7852 8.00008L12.8594 10.0743L14.9336 12.1484L12.8594 14.2226L10.7852 16.2968"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </span>
          </div>
        </Link>
      </RevealWrapper>
    </>
  );
};
export default InsightCard;
