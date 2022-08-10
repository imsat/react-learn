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
  render() {
    return (
      <div className="tc">
        <h1 className="">RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    )
  }
  
}

export default App;
