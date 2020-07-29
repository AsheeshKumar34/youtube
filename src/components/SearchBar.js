import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "" };
  }
  onInputChange = (searchTerm) => {
    this.setState({ searchTerm });
    this.props.onSearchTermChange(searchTerm);
  };
  render() {
    return (
      <input
        value={this.state.searchTerm}
        placeholder="Search"
        className="w-75"
        onChange={(e) => this.onInputChange(e.target.value)}
      />
    );
  }
}

export default SearchBar;
