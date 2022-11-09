import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  return (
    <div className="">
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input 
          type="text" 
          className="input" 
          value={term}  
          onChange={e => {setTerm(e.target.value); console.log(e.target.value)}}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
