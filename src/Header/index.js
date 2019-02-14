import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDates, loadDate } from '../actions';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1
    };
    this.changeIndex = this.changeIndex.bind(this);
    this.findDay = this.findDay.bind(this);
  }
  componentDidMount() {
    this.props.loadDates();
    this.props.passRefUpward(this.refs);
  }

  changeIndex(direction) {
    if (direction === 'left') {
      this.setState({
        index: this.state.index - 1
      });
    } else if (direction === 'right') {
      this.setState({
        index: this.state.index + 1
      });
    }

    if (this.state.index <= 0) {
      this.setState({
        index: 1
      });
    }
    if (this.state.index >= 32) {
      this.setState({
        index: 31
      });
    }
  }

  findDay() {
    switch (this.state.index) {
      case 1 || 8 || 15 || 22 || 29:
        return 'Friday';
      case 2 || 9 || 16 || 23 || 30:
        return 'Saturday';
      case 3 || 10 || 17 || 24 || 31:
        return 'Sunday';
      case 4 || 11 || 18 || 25:
        return 'Monday';
      case 5 || 12 || 19 || 26:
        return 'Tuesday';
      case 6 || 13 || 20 || 27:
        return 'Wednesday';
      case 7 || 14 || 21 || 28:
        return 'Thursday';
      default:
        break;
    }
  }

  render() {
    console.log(this.props.dates);
    return (
      <header className="Header-header">
        <div className="Header-title">808 TAX</div>
        <div id="header-date" className="header-date">
          <i
            className="fa fa-arrow-left"
            onClick={() => {
              this.changeIndex('left');
            }}
            aria-hidden="true"
          />
          <div className="time">
            <div className="day">{this.findDay()}</div>

            <div id="date" ref="date" className="date">
              March {this.state.index}
            </div>

            <div className="year">, 2019</div>
          </div>

          <i
            className="fa fa-arrow-right"
            onClick={() => {
              this.changeIndex('right');
            }}
            aria-hidden="true"
          />
        </div>
        <div
          className="add-task-button"
          onClick={this.props.sideBarClickHandler}
        >
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
    },
    loadDate: date => {
      dispatch(loadDate(date));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
