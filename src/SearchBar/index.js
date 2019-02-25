import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.scss';
const SearchBar = props => {
  let searchBarClasses = 'sidebar-container';
  if (props.show) {
    searchBarClasses = 'sidebar-container open';
  }
  return (
    <div className={searchBarClasses}>
      <div className="header">
        <div className="close" onClick={props.click} />
      </div>
    </div>
  );
};

export default SearchBar;
