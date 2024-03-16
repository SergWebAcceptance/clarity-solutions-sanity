"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { useEffect, useState } from "react";
import Link from "next/link";
import Accordion from "./tabContent/Accordion";
import { tab1, tab2, tab3, tab4, tab5 } from "@/lib/faq";

const FaqWrap = () => {
  const [activeTab, setActiveTab] = useState("#tab1");
  const [items, setItems] = useState(tab1);

  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
    {
      tabId == "#tab1"
        ? setItems(tab1)
        : tabId === "#tab2"
        ? setItems(tab2)
        : tabId === "#tab3"
        ? setItems(tab3)
        : tabId === "#tab4"
        ? setItems(tab4)
        : tabId === "#tab5"
        ? setItems(tab5)
        : setItems(tab1);
    }
  };

  useEffect(() => {}, [activeTab]);

  return (
    <>
      <section className="faq-wrap">
        <div className="_container">
          <div className="faq-wrap__body">
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="tab-titles"
            >
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab1")}
                className={`${activeTab === "#tab1" ? "active" : ""}`}
              >
                Prepaid Cards Guide
              </Link>
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab2")}
                className={`${activeTab === "#tab2" ? "active" : ""}`}
              >
                Card Usage and Services
              </Link>
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab3")}
                className={`${activeTab === "#tab3" ? "active" : ""}`}
              >
                Essential Info for Cardholders
              </Link>
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab4")}
                className={`${activeTab === "#tab4" ? "active" : ""}`}
              >
                KYC Requirements
              </Link>
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab5")}
                className={`${activeTab === "#tab5" ? "active" : ""}`}
              >
                Troubleshooting Card Account
              </Link>
            </RevealList>

            <RevealWrapper className="tab-content" delay={100} origin="bottom">
              <Accordion key={activeTab} items={items} />
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
};
export default FaqWrap;
