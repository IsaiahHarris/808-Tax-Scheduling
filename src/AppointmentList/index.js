import React, { Component } from 'react';

import Appointment from '../Appointment';

import './AppointmentList.scss';

class AppointmentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="appointment-list-container">
        {this.props.apps &&
          this.props.apps.map((appointment, i) => {
            if (appointment) {
              return (
                <Appointment
                  key={i}
                  appId={appointment.id}
                  name={appointment.name}
                  phone={appointment.phone_number}
                  note={appointment.note}
                />
              );
            }
          })}
      </div>
    );
  }
}

export default AppointmentList;
