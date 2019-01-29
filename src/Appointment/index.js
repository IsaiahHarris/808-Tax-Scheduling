import React from 'react';
import './Appointment.scss';

const Appointment = props => {
  return (
    <div className="appointment-container">
      <div className="appointment">
        <div className="name">
          Name: <div className="desc">{props.name}</div>
        </div>
        <div className="phone">
          Phone: <div className="desc">{props.phone}</div>
        </div>
        <div className="subject">
          Subject: <div className="desc">{props.subject}</div>
        </div>
        <div className="note">
          Note: <div className="desc">{props.note}</div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
