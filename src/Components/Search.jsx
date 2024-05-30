import React, { useState } from "react";
import icon from "../assets/searchIcon.svg";
const Search = ({ searchTrm }) => {
  const [text, setText] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    searchTrm(text);
  };
  return (
    <form onSubmit={onsubmit} className="search">
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <img src={icon} alt="" onClick={onsubmit} />
    </form>
  );
};

export default Search;
