import React, { Component } from 'react';
import './Appointment.scss';
import AppEdit from '../AppEdit';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);

    this.handleOpen = this.handleOpen.bind(this);
    this.myRef = React.createRef();
    this.secondRef = React.createRef();
    this.state = {
      show: false,
      id: 0
    };
  }
  handleOpen = () => {
    if (!this.state.show) {
      this.setState({ show: true });
    }
  };

  handleClose = event => {
    if (
      (event.target === document.getElementById('modal-container') ||
        event.target === document.getElementById('enter')) &&
      this.state.show
    ) {
      this.setState({ show: false });
    }
  };

  componentDidMount() {
    this.setState({ id: this.refs.container.id });
  }

  render() {
    return (
      <div
        className="appointment-container"
        onClick={() => {
          this.handleOpen();
        }}
        ref="container"
      >
        <div className="appointment" id={Number(this.props.appId) || 16}>
          <div className="name">
            Name:
            <div id="name" ref="name" className="desc">
              {this.props.name}
            </div>
          </div>
          <div className="phone">
            Phone:
            <div id="phone" ref="phone" className="desc">
              {this.props.phone}
            </div>
          </div>

          <div className="note">
            Note:
            <div id="note" ref="note" className="desc">
              {this.props.note}
            </div>
          </div>
        </div>
        {this.state.show && (
          <div
            className="modal-container"
            id="modal-container"
            onClick={this.handleClose}
          >
            <div id="modal-content" className="modal-content">
              <AppEdit appId={this.props.appId} close={this.handleClose} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Appointment;
