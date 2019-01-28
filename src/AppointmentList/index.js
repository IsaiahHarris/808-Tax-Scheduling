import React, { Component } from 'react';
import { connect } from 'react-redux';
import Appointment from '../Appointment';
import { loadAppointments } from '../actions';
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
            <div key={i} className="appointment-list-container">
              <Appointment
                name={appointment.name}
                phone={appointment.phone}
                time={appointment.time}
                date={appointment.date}
                subject={appointment.subject}
                note={appointment.note}
                person={appointment.person}
              />
            </div>
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
