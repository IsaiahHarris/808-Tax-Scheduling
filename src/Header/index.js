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
            {this.props.dates[this.state.index] && (
              <div className="day">
                {this.props.dates[this.state.index].day}
              </div>
            )}

            <div id="date" ref="date" className="date">
              March {this.state.index}
            </div>

            {this.props.dates[this.state.index] && (
              <div className="year">
                , {this.props.dates[this.state.index].year}
              </div>
            )}
          </div>

          <i
            className="fa fa-arrow-right"
            onClick={() => {
              this.changeIndex('right');
            }}
            aria-hidden="true"
          />
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
