import React, { Component } from 'react';
import './Column.scss';
import AppointmentList from '../AppointmentList';
import { connect } from 'react-redux';
import { loadDate } from '../actions';
class Column extends Component {
  componentDidMount() {
    let date = document.getElementById('date');
    this.props.loadDate(date.innerHTML);
  }
  render() {
    let filterFunc = filterApps(
      this.props.label,
      this.props.date[0].appointments
    );

    return (
      <div className="column-container">
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
)(Column);
