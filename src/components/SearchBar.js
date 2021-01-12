import React from 'react';

export default class SearchBar extends React.Component {

  handleInputChange(evt){
    console.log(evt.target.value);
  }
  
  state = {};

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label className="label">Image Search</label>
            <input type="text" 
            onChange={this.handleInputChange}/> 
                                        {/* do not write this.handleInputChange() otherwise it will be called whenever on render instead of only when input changes */}
          </div>
        </form>
      </div>
    )
  }
}
