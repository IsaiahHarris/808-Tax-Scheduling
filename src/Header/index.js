import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDates, loadDate } from '../actions';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      month: ''
    };
    this.changeIndex = this.changeIndex.bind(this);
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

  changeMonth(direction) {
    let months = [
      'January',
      'Febuary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    let index = 0;
    if (direction === 'up') {
      index += 1;
      this.setState({
        month: months[index]
      });
    }

    if (direction === 'down') {
      index -= 1;
      this.setState({
        month: months[index]
      });
    }
  }

  render() {
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
            <div id="date" ref="date" className="date">
              {this.state.month} {this.state.index}
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
