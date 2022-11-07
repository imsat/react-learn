import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);


  const renderedItems = items.map((item, index) => {
    const onTitleCLick = (index) => {
      setActiveIndex(index);
    };

    const active = index === activeIndex ? 'active' : ''

    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleCLick(index)} className="title">
          <i
            className={`dropdown icon ${active}`}
          ></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
