import React, { Component } from 'react';
import Header from '../Header';
import Column from '../Column';
import TimeColumn from '../TimeColumn';
import SearchBar from '../SearchBar';
import BackDrop from '../BackDrop';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      realDate: '',
      month: ''
    };
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
  }

  getRefsFromChild(childRefs) {
    this.setState({
      realDate: childRefs.date,
      month: childRefs.month
    });
  }
  toggleSideBar = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideBarOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Header
          passRefUpward={this.getRefsFromChild}
          sideBarClickHandler={this.toggleSideBar}
        />
        <SearchBar
          show={this.state.sideBarOpen}
          click={this.backdropClickHandler}
        />
        {backdrop}
        <div className="main-body">
          <TimeColumn className="time-column" label="Time" />
          {this.state.realDate && (
            <Column
              realDate={this.state.realDate}
              month={this.state.month}
              className="jimmy-column"
              label="Jimmy"
            />
          )}
          {this.state.realDate && (
            <Column
              realDate={this.state.realDate}
              month={this.state.month}
              className="bernice-column"
              label="Bernice"
            />
          )}
          {this.state.realDate && (
            <Column
              realDate={this.state.realDate}
              month={this.state.month}
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
