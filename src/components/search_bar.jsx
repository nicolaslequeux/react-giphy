import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    // console.log("value: ", event.target.value);
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search form-control"
      onChange={this.handleUpdate} />
    )
  }
}

export default SearchBar;