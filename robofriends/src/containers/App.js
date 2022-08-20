import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
// import { robots } from '../robots';
import './App.css'
import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     // searchField: ''
  //   }
  //   // console.log('constructor');
  // }

  componentDidMount() {
    // console.log(this.props.store);
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => {
    //   this.setState({robots: users})
    // })
    this.props.onRequestRobots();
  }

  // onSearchChange = (e) =>{
  //   this.setState({searchField: e.target.value})
  // }

  render() {
    // console.log('render');
    // const {robots} = this.state;
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filterdRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    if(isPending) {
      return <h1>Loading</h1>
    }else{
      return (
        <div className="tc">
          <h1 className="logo f2">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterdRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }

    
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
