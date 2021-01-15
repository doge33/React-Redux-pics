import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

function ImageList(props) {
                                  //  desstructre id url description from each image 
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
    // add key prop on the outer most element returned here
  })
  return (
    <div  className="image-list">
      {images}
    </div>
  )
}

export default ImageList;
