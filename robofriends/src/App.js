import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll"
import { robots } from './robots';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({robots: users})
    })
  }

  onSearchChange = (e) =>{
    this.setState({searchField: e.target.value})
  }

  render() {
    // console.log('render');
    const filterdRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });

    if(this.state.robots.length === 0) {
      return <h1>Loading</h1>
    }else{
      return (
        <div className="tc">
          <h1 className="logo f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterdRobots} />
          </Scroll>
        </div>
      )
    }

    
  }
  
}

export default App;
