import React from "react";
import "./search.css"

function SearchForm({ search, setSearch, handleSearch }) {
  return (
    <input
      type="search"
      placeholder="search image"
      className="search"
      value={search}
      onChange={e => setSearch(e.target.value)}
      onKeyDown={handleSearch}
    />
  );
}

export default SearchForm;
