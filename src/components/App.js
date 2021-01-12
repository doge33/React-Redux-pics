import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


export default class App extends React.Component {

  state = {images: []};

  handleSearchSubmit = async (term) => {
    
    //instead of using axios.get, just import unspalsh and use some of the default settings.
    const response = await unsplash.get("/search/photos", {
      params: {query: term},
    }); 
    console.log(this.state); // => this is gonna give you the this context when it's actually called in the child compo
    this.setState({images: response.data.results});
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onSearchSubmit={this.handleSearchSubmit}/>
        Found: {this.state.images.length} images
        
      </div>
    );
  };
};
