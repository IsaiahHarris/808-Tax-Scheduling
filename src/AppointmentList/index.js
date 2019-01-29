import React, { Component } from 'react';
import { connect } from 'react-redux';
import Appointment from '../Appointment';
import { loadAppointments } from '../actions';
import './AppointmentList.scss';
class AppointmentList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadAppointments();
  }
  render() {
    return (
      <div className="appointment-list-container">
        {this.props.appointments.map((appointment, i) => {
          return (
            <Appointment
              name={appointment.name}
              phone={appointment.phone_number}
              time={appointment.time}
              date={appointment.date}
              subject={appointment.subject}
              note={appointment.note}
              person={appointment.person}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.appointmentsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAppointments: () => {
      dispatch(loadAppointments());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentList);
