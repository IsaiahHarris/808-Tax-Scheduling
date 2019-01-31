import React from 'react';
import './TimeColumn.scss';
import TimeList from '../TimeList';
const TimeColumn = props => {
  return (
    <div className="time-column-container">
      <div className={props.label}>{props.label}</div>
      <TimeList />
    </div>
  );
};

export default TimeColumn;
