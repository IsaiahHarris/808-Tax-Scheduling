import React, { Component } from 'react';
import Header from '../Header';
import Column from '../Column';
import TimeColumn from '../TimeColumn';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      realDate: ''
    };
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
  }

  getRefsFromChild(childRefs) {
    this.setState({
      realDate: childRefs.date
    });
  }

  render() {
    return (
      <div className="App">
        <Header passRefUpward={this.getRefsFromChild} />
        <div className="main-body">
          <TimeColumn className="time-column" label="Time" />

          {this.state.realDate && (
            <Column
              realDate={this.state.realDate}
              className="jimmy-column"
              label="Jimmy"
            />
          )}
          {this.state.realDate && (
            <Column
              realDate={this.state.realDate}
              className="bernice-column"
              label="Bernice"
            />
          )}
          {this.state.realDate && (
            <Column
              realDate={this.state.realDate}
              className="walkin-column"
              label="Walk-in"
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
