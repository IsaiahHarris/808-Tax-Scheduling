import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  showForm() {
    let addCardForm =
      document.getElementById('NewCardForm-container-show') ||
      document.getElementById('NewCardForm-container');
    if (addCardForm.id === 'NewCardForm-container') {
      addCardForm.id = 'NewCardForm-container-show';
    } else if (addCardForm.id === 'NewCardForm-container-show') {
      addCardForm.id = 'NewCardForm-container';
    }
  }

  render() {
    return (
      <header className="Header-header">
        {/* <img src={logo} className="Header-logo" alt="logo" /> */}
        <div className="Header-title">808 TAX</div>
        <div id="header-date" className="header-date">
          <div className="day">Tuesday, </div>
          <div id="date" className="date">
            Feburary 21
          </div>
          <div className="year">, 2019</div>
        </div>
        <div className="add-task-button" onClick={this.showForm.bind(this)}>
          <span>🔍</span> Search Appointment
        </div>
      </header>
    );
  }
}

export default Header;
