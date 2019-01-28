import React, { Component } from 'react';
import './Apoointment.scss';

class Appointment extends Component {
  render() {
    return (
      <div className="appointment-container">
        <div className="name">Name:</div>
        <div className="phone">Phone:</div>
        <div className="time">Time:</div>
        <div className="date">Date:</div>
        <div className="person">Person:</div>
        <div className="subject">Subject:</div>
        <div className="note">Note:</div>
      </div>
    );
  }
}

export default Appointment;
