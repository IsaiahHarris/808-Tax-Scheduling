import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editApp, loadAppointments } from '../actions';
import './AppEdit.scss';

class AppEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      phoneInput: '',
      noteInput: '',
      subjectInput: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);

    this.editApp = this.editApp.bind(this);
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  editApp(id) {
    const data = {
      id: id,
      name: this.state.nameInput,
      phone_number: this.state.phoneInput,
      note: this.state.noteInput,
      subject: this.state.subjectInput
    };

    this.props.editApp(data);
  }
  render() {
    return (
      <div className="item-edit-container">
        {true && (
          <div className="item-edit-form">
            <div className="input">
              {/* <div className="label">Name:</div> */}
              <input
                type="text"
                name="nameInput"
                id="name"
                value={this.state.nameInput}
                onChange={this.handleInputChange('nameInput')}
                placeholder="Name"
                autoComplete="off"
                maxLength="30"
              />
            </div>
            <div className="input">
              {/* <div className="label">Phone:</div> */}
              <input
                type="text"
                name="phoneInput"
                id="phone"
                value={this.state.phoneInput}
                onChange={this.handleInputChange('phoneInput')}
                placeholder="Phone"
                autoComplete="off"
                maxLength="30"
              />
            </div>
            <div className="input">
              {/* <div className="label">Subject:</div> */}
              <input
                type="text"
                name="subjectInput"
                id="subject"
                value={this.state.subjectInput}
                onChange={this.handleInputChange('subjectInput')}
                placeholder="Subject"
                autoComplete="off"
                maxLength="30"
              />
            </div>
            <div className="input">
              {/* <div className="label">Note:</div> */}
              <textarea
                maxLength="30"
                type="text"
                name="noteInput"
                id="note"
                value={this.state.noteInput}
                onChange={this.handleInputChange('noteInput')}
                placeholder="Note"
                autoComplete="off"
              />
            </div>
            <div className="edit-app-button">
              <div
                onClick={() => {
                  this.editApp(this.props.appId);
                  this.props.close('click');
                }}
                className="button"
                id="enter"
              >
                enter
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editApp: app => {
      dispatch(editApp(app));
    },
    loadAppointments: app => {
      dispatch(loadAppointments());
    }
  };
};

const mapStateToProps = state => {
  return {
    appointment: state.appointmentsList
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppEdit);
