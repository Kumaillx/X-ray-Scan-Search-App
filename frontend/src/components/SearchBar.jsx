import React from 'react';

function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search scans..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
