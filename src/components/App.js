import React from 'react';
import SearchBar from './SearchBar';

export default class App extends React.Component {

  handleSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onSearchSubmit={this.handleSearchSubmit}/>
      </div>
    )
  }
}
