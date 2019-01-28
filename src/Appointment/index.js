import React from 'react';
import './Apoointment.scss';

const Appointment = props => {
  return (
    <div className="appointment-container">
      <div className="name">Name: {props.name}</div>
      <div className="phone">Phone: {props.phone}</div>
      <div className="time">Time: {props.time}</div>
      <div className="date">Date: {props.date}</div>
      <div className="person">Person: {props.person}</div>
      <div className="subject">Subject: {props.subject}</div>
      <div className="note">Note: {props.note}</div>
    </div>
  );
};

export default Appointment;
