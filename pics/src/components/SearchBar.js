import React from "react";

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = { term: '', password: ''}

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.term);
    }

    // onFormSubmit(event){
    //     event.preventDefault()
    //     console.log(this.state.term);
    // }

    render() {
        return (
        <div className="ui segment ">
            {/* <form className="ui form"  onSubmit={(e) => this.onFormSubmit(e)} > */}
            <form className="ui form"  onSubmit={this.onFormSubmit} >
                <div className="field">
                <label htmlFor="">Image Search</label>
                {/* <input type="text" onChange={this.onInputChange} /> */}
                <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value.toUpperCase()})} />
                </div>

                {/* <label htmlFor="">Password</label>
                <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                {this.state.password.length < 4 ? 'Password must be at least 4 caracters' : ''} */}
            </form>
        </div>
        );
    }
}

export default SearchBar;