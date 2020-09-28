import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search" //para que use el css
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
