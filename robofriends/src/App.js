import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from './robots';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  onSearchChange = (e) =>{
    this.setState({searchField: e.target.value})
  }

  render() {
    const filterdRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });

    return (
      <div className="tc">
        <h1 className="logo f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterdRobots} />
      </div>
    )
  }
  
}

export default App;
