import React from "react";

const IMageList = (props) => {
  const images = props.images.map(({description, id, urls}) => {
    return <img src={urls.regular} className="ui small image" alt={description} key={id} />;
  });

  return <div className="ui container"> {images} </div>;
};

export default IMageList;
