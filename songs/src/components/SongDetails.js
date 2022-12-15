import React from "react";
import { connect } from "react-redux";

const SongDetails = (props) => {
    console.log(props);
  return <div className="">
    Song Details
    <hr />
    Title: {props?.song?.title}
    <br />
    Duration: {props?.song?.duration}
    </div>;
};
// connect
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
