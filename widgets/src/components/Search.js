import React, { useState, useEffect } from "react";
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [results, setResults] = useState([]);

  console.log(results)

  useEffect(() => {
    const search =  async () => {
      // https://en.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=Programing&namespace=0&limit=10
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'opensearch', 
          format: 'json',
          search: term,
          namespace: '0',
          limit: '0',
          origin: '*'
        }
      })

      setResults(data)
    }

    search()

    // (async () => {
    //   await axios.get('')
    // })();

    // axios.get('')
    // .then(res => {

    // })

  }, [term]);

  return (
    <div className="">
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
