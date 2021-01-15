import React from 'react';

//this component wraps each individual image (receives an image as props)
export default class ImageCard extends React.Component {
  render() {

    const {description, urls} = this.props.image;
    return (
      <div>
        <img 
        alt={description}
        src={urls.regular}
        />
      </div>
    )
  }
}
