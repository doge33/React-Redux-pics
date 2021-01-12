import React from 'react';

export default class SearchBar extends React.Component {

  //alternative to using an arrow func in onChange: pass a reference of the func below
  // handleInputChange(evt){
  //   console.log(evt.target.value);
  // }
  
  state = {term: ''};

  // handleFormSubmit
  
  handleFormSubmit = (evt) => {
    evt.preventDefault(); //prevent refresh
    //console.log(this.state.term) //this line gives error: "this" is undefined! 
    this.props.onSearchSubmit(this.state.term); //this is passed down from the app.
  }
  //handle func is a callback, so the "this" context is lost and default to undefined in JS strict mode (if we don't use arrow func).
  // React classes are always executed in strict mode...so use 1. arrow func, or 2. pass it as a callback in an arrow func inline in jsx, or 3. bind manaually in an constructor
  //render(),however, is not a callback, so "this" context is not lost


  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Image Search</label>
            <input type="text"
            value={this.state.term}
            onChange={(evt) => this.setState({term: evt.target.value})}
            /> 
                                        {/* when passing only a reference(when not using anonymous arrow func), do not call it in () otherwise it will be called whenever on render instead of only when input changes */}
          </div>
        </form>
      </div>
    )
  }
}
