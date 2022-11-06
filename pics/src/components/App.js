import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import IMageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(response);

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <IMageList images={this.state.images}></IMageList> 
      </div>
    );
  }
}

export default App;
