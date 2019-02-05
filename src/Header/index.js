import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDates } from '../actions';
import './Header.scss';

class Header extends Component {
  componentDidMount() {
    this.props.loadDates();
  }

  render() {
    return (
      <header className="Header-header">
        <div className="Header-title">808 TAX</div>
        <div id="header-date" className="header-date">
          <i className="fa fa-arrow-left" aria-hidden="true" />
          <div className="day">Tuesday, </div>
          {this.props.dates.length > 1 && (
            <div id="date" className="date">
              {this.props.dates[0].date}
            </div>
          )}
          <div id="date" className="date">
            Feburary 20
          </div>
          <div className="year">, 2019</div>
          <i className="fa fa-arrow-right" aria-hidden="true" />
        </div>
        <div className="add-task-button">
          <span>🔍</span> Search Appointment
        </div>
      </header>
    );
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
)(Header);
