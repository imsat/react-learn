import React from "react";
import { connect } from "react-redux";

const SongDetails = ({song}) => {
  if(!song) {
    return <div className="">Please select a song</div>
  }

  return <div className="">
    Song Details
    <hr />
    Title: {song?.title}
    <br />
    Duration: {song?.duration}
    </div>;
};
// connect
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
