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
    let desc = document.getElementById('desc');
    let phone = document.getElementById('phone');
    let name = document.getElementById('name');
    let subject = document.getElementById('subject');

    if (desc || phone || name || subject) {
      console.log(desc.innerHTML);
      if (
        desc.innerHTML &&
        phone.innerHTML &&
        name.innerHTML &&
        subject.innerHTML
      ) {
        this.refs.container.className = 'colored-appointment';
      }
    }

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
          ref="container"
        >
          <div className="name">
            Name:
            <div id="desc" ref="desc" className="desc">
              {this.props.name}
            </div>
          </div>
          <div className="phone">
            Phone:
            <div ref="phone" className="desc">
              {this.props.phone}
            </div>
          </div>
          <div className="subject">
            Subject:
            <div ref="subject" className="desc">
              {this.props.subject}
            </div>
          </div>
          <div className="note">
            Note:
            <div ref="note" className="desc">
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
              <AppEdit appId={this.state.id} close={this.handleClose} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Appointment;
