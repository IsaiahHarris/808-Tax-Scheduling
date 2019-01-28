import React from 'react';
import './Column.scss';
import AppointmentList from '../AppointmentList';
const Column = props => {
  return (
    <div className="column-container">
      <div className={props.label}>{props.label}</div>
      <AppointmentList />
    </div>
  );
};

export default Column;
