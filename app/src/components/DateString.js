import React from "react";

const timezone_offset = new Date().getTimezoneOffset();
const date = new Date(Date.now() - timezone_offset * 60000);

class SearchBar extends React.Component {
  getISOString() {
    return date.toISOString();
  }
  
  render() {
    return (
      <>
        {this.getISOString()}
      </>
    );
  }
}

export default SearchBar;
