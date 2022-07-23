import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    //response.data[0].meanings[0].definitions[0]; How to find the definitions.
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="text-center">
        <input type="search" onChange={handleChange} />
      </form>
      <Results info={results} />
    </div>
  );
}
