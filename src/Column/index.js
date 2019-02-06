import React, { Component } from 'react';
import './Column.scss';
import AppointmentList from '../AppointmentList';
import { connect } from 'react-redux';
import { loadDates } from '../actions';

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: []
    };
  }

  componentDidMount() {
    this.props.loadDates();
    this.props.realDate.addEventListener(
      'DOMSubtreeModified',
      this.props.loadDates()
    );
  }

  render() {
    let dates = [];
    this.props.dates.map(date => {
      if (date.appointments) {
        if (date.appointments.length > 0) {
          if (date.date === this.props.realDate.innerHTML) {
            date.appointments.map(app => {
              return dates.push(app);
            });
          }
        }
      }
    });

    let filterFunc = filterApps(this.props.label, dates);

    return (
      <div ref="column" className="column-container">
        <div className={this.props.label}>{this.props.label}</div>
        <AppointmentList apps={filterFunc} />
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
    dates: state.datesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDates: () => {
      dispatch(loadDates());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);
