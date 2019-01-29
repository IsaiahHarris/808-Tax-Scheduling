import React, { Component } from 'react';
import './Appointment.scss';
import AppEdit from '../AppEdit';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);

    this.handleOpen = this.handleOpen.bind(this);
    this.myRef = React.createRef();
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
      event.target === document.getElementById('modal-container') &&
      this.state.show
    ) {
      this.setState({ show: false });
    }
  };

  componentDidMount() {
    const node = this.myRef.current;
    this.setState({ id: node.id });
  }
  render() {
    return (
      <div
        className="appointment-container"
        onClick={() => {
          this.handleOpen();
        }}
      >
        <div
          className="appointment"
          id={this.props.appId || 16}
          ref={this.myRef}
        >
          <div className="name">
            Name: <div className="desc">{this.props.name}</div>
          </div>
          <div className="phone">
            Phone: <div className="desc">{this.props.phone}</div>
          </div>
          <div className="subject">
            Subject: <div className="desc">{this.props.subject}</div>
          </div>
          <div className="note">
            Note: <div className="desc">{this.props.note}</div>
          </div>
        </div>
        {this.state.show && (
          <div
            className="modal-container"
            id="modal-container"
            onClick={this.handleClose}
          >
            <div id="modal-content" className="modal-content">
              <AppEdit appId={this.state.id} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Appointment;
