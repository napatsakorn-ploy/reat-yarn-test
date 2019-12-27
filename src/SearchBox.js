import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      filter :
      <input type="search" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;
