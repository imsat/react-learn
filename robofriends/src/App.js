import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from './robots';
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }
  onSearchChange = (e) =>{
    // console.log(e.target.value)
    // console.log(this.state.searchField)
    this.setState({searchField: e.target.value})
    // console.log(this.state.searchField)
  }

  render() {
    return (
      <div className="tc">
        <h1 className="">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    )
  }
  
}

export default App;
