import React, { Component } from "react";

export default class Search extends Component {
  state = {
    searchTerm: "",
    result: [],
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    const { food } = this.props;

    this.setState({
      result: food.filter(
        (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
      ),
    });
  };

  render() {
    
    return (
      <div>
        <br />
        <input
          id="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary" onClick={this.handleSearch}>
          Search
        </button>
        <h1 className="h1">Search Result</h1>
        {this.state.result.length > 0 ? (
          this.state.result.map((item) => <div key={item.id}>Name : {item.name} <br /> price : {item.price}</div>)
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  }
}
