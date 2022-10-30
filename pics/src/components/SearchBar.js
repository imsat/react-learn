import React from "react";

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = { term: 'Hi there!', password: ''}


    render() {
        return (
        <div className="ui segment ">
            <form className="ui form">
                <div className="field">
                <label htmlFor="">Image Search</label>
                {/* <input type="text" onChange={this.onInputChange} /> */}
                <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value.toUpperCase()})} />
                </div>

                 {/* <div className="field"> */}
                <label htmlFor="">Password</label>
                {/* <input type="text" onChange={this.onInputChange} /> */}
                <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                {this.state.password.length < 4 ? 'Password must be at least 4 caracters' : ''}
                {/* </div> */}
            </form>
        </div>
        );
    }
}

export default SearchBar;