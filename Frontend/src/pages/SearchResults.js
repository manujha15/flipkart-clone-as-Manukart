import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);
  const location = useLocation();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for: "{query}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResults;
