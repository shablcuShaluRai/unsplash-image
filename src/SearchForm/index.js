import React from "react";

function SearchForm({ search, setSearch, handleSearch }) {
  return (
    <input
      type="search"
      placeholder="search image"
      value={search}
      onChange={e => setSearch(e.target.value)}
      onKeyDown={handleSearch}
    />
  );
}

export default SearchForm;
