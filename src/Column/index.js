import React, { Component } from 'react';
import './Column.scss';
import AppointmentList from '../AppointmentList';
import { connect } from 'react-redux';
import { loadAppointments } from '../actions';
class Column extends Component {
  componentDidMount() {
    this.props.loadAppointments();
  }
  render() {
    let filterFunc = filterApps(this.props.label, this.props.appointments);

    return (
      <div className="column-container">
        <div className={this.props.label}>{this.props.label}</div>
        <AppointmentList
          apps={filterFunc.sort((a, b) => {
            return b.time - a.time;
          })}
        />
      </div>
    );
  }
}

function filterApps(label, apps) {
  if (apps) {
    switch (label) {
      case 'Jimmy':
        return apps.filter(app => app.person === 'jimmy');
      case 'Bernice':
        return apps.filter(app => app.person === 'bernice');
      case 'Walk-in':
        return apps.filter(app => app.person === 'walkin');
      default:
        return apps;
    }
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
)(Column);
