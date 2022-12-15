import React from "react";
import SongList from "./SongList";
const App = () => {
  return (
    <div className="ui container grid m-t-5" style={{marginTop: '1rem '}}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};
export default App;
