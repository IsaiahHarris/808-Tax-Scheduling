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
    this.setState({ id: document.getElementById('container').id });
  }

  render() {
    let note = document.getElementById('note');
    let phone = document.getElementById('phone');
    let name = document.getElementById('name');
    let subject = document.getElementById('subject');
    let container = document.getElementById('container');
    if (note && phone && name && subject) {
      console.log(note.innerHTML.length > 0);
      if (
        !(
          note.innerHTML.length < 1 &&
          name.innerHTML.length < 1 &&
          phone.innerHTML.length < 1 &&
          subject.innerHTML.length < 1
        )
      ) {
        container.className = 'colored-appointment';
      }
    }

    return (
      <div
        className="appointment-container"
        onClick={() => {
          this.handleOpen();
        }}
      >
        <div className="appointment" id={this.props.appId || 16} id="container">
          <div className="name">
            Name:
            <div id="name" ref="desc" className="desc">
              {this.props.name}
            </div>
          </div>
          <div className="phone">
            Phone:
            <div id="phone" ref="phone" className="desc">
              {this.props.phone}
            </div>
          </div>
          <div className="subject">
            Subject:
            <div id="subject" ref="subject" className="desc">
              {this.props.subject}
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
              <AppEdit appId={this.state.id} close={this.handleClose} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Appointment;
