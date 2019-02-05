import React, { Component } from 'react';
import { connect } from 'react-redux';
import Appointment from '../Appointment';
import { loadDate } from '../actions';
import './AppointmentList.scss';

class AppointmentList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let date = document.getElementById('date');
    this.props.loadDate(date.innerHTML);
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
                  time={appointment.time}
                  date={appointment.date}
                  subject={appointment.subject}
                  note={appointment.note}
                  person={appointment.person}
                />
              );
            }
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    date: state.datesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDate: date => {
      dispatch(loadDate(date));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentList);
