import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "../redux/slices/searchSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(setSearchQuery(query));
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ display: "flex" }}>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "350px", marginRight: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 12px", cursor: "pointer" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
