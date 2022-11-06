import './ImageList.css'
import React from "react";
import ImageCard from './ImageCard'

const IMageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard className="ui small image"  key={image.id} image={image} />;
  });

  return <div className="image-list"> {images} </div>;
};

export default IMageList; 
