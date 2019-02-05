import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
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
        <div className="Header-title">808 TAX</div>
        <div id="header-date" className="header-date">
          <i className="fa fa-arrow-left" aria-hidden="true" />
          <div className="day">Tuesday, </div>
          <div id="date" className="date">
            Feburary 20
          </div>
          <div className="year">, 2019</div>
          <i className="fa fa-arrow-right" aria-hidden="true" />
        </div>
        <div className="add-task-button" onClick={this.showForm.bind(this)}>
          <span>🔍</span> Search Appointment
        </div>
      </header>
    );
  }
}

export default Header;
