import React from 'react';
import axios from "axios";
import SearchBar from './SearchBar';

export default class App extends React.Component {

  state = {images: []};

  handleSearchSubmit = async (term) => {
    
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {query: term},
      headers:{
        Authorization: 'Client-ID VVW5Cs-edj4xKtaVTk1O0KNI_g99vRB9FNEEwCnVb-4'
      }
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
