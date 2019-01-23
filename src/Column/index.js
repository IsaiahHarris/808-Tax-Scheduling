import React from 'react';
import './Column.scss';

const Column = props => {
  return (
    <div className="column-container">
      <div className={props.label}>{props.label}</div>
    </div>
  );
};

export default Column;
