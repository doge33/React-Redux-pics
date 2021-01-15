import React from 'react';

//this component wraps each individual image (receives an image as props)
export default class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef(); //create ref in constructor
  }

  // componentDidMount() {
    
  //   console.log(this.imageRef); // => you will see proper info including clientHeight
  //   console.log(this.imageRef.current.clientHeight); // => you will see 0 because the image is not yet downloaded and loaded into the DOM at this point
  // }

  componentDidMount() {
    
    this.imageRef.current.addEventListener('load', this.setSpans); 
    //any time an img successfully loads onto the screen, run setSpans, set the span for that card.
  }


  //span corresponds to grid-row-end unit
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10 );

    //console.log(spans);

    this.setState({spans: spans}) //or {spans} (ES2015)
  }

  render() {

    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img 
        ref={this.imageRef} //pass ref as props to JSX tag 
        alt={description}
        src={urls.regular}
        />
      </div>
    )
  }
}
