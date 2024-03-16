"use client";
import { useState, useRef, useEffect } from "react";

const Accordion = ({items}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRef = useRef([]);

  useEffect(() => {
    setOpenIndex(null);
    contentRef.current = contentRef.current.slice(0, items.length);
  }, [items]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          data-id={openIndex}
          data-key={item.id}
          key={index}
          className={`accordion__item ${openIndex === index ? "opened" : ""}`}
          onClick={() => toggleItem(index)}
        >
          <div className="accordion__title">
            <h4 className="accordion__title-text">{item.title}</h4>
            <span></span>
            <img src="/images/faq/arrow.svg" alt="^" />
          </div>
          <div
            className="accordion__content"
            ref={(el) => (contentRef.current[index] = el)}
            style={{
              maxHeight:
                openIndex === index
                  ? `${contentRef.current[index]?.scrollHeight}px`
                  : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
            dangerouslySetInnerHTML={{ __html: item.content }}
          >
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
