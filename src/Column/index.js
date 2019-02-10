import React, { Component } from 'react';
import './Column.scss';
import AppointmentList from '../AppointmentList';
import { connect } from 'react-redux';
import { loadDate } from '../actions';

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: []
    };
  }

  componentDidMount() {
    this.props.realDate.addEventListener('DOMCharacterDataModified', () => {
      this.props.loadDate(this.props.realDate.innerHTML);
    });
  }

  render() {
    let apps = [];
    const appDate = this.props.date[0];

    if (appDate) {
      if (appDate.appointments) {
        appDate.appointments.map(app => {
          apps.push(app);
          // if (app.date === this.props.realDate.innerHTML) {
          //   return app;
          // }
        });
      }
    }

    let filterFunc = filterApps(this.props.label, apps);

    return (
      <div ref="column" className="column-container">
        <div className={this.props.label}>{this.props.label}</div>
        <AppointmentList
          apps={filterFunc.sort((a, b) => {
            return a.time - b.time;
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
