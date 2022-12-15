import React from "react";
import SongDetails from "./SongDetails";
import SongList from "./SongList";
const App = () => {
  return (
    <div className="ui container grid m-t-5" style={{marginTop: '1rem '}}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};
export default App;
