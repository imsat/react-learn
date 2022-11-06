import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)

  const renderedItems = items.map((item, index) => {
    const onTitleCLick = (index) => {
        setActiveIndex(index) 
    };

    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleCLick(index)} className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">
    {renderedItems}
    <h2>{ activeIndex }</h2>
    </div>;
};

export default Accordion;
