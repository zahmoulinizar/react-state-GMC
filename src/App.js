import React, { Component } from 'react';
import img from './images/image1.jpg'

class App extends Component {
  state = {
    person: {
      fullName: 'Nizar Zahmouli',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgSrc:img,
      profession: 'Web Developer'
    },
    shows: true,
    timeInterval: 0
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      timeInterval: this.state.timeInterval + 1
    });
  }

  toggleShow = () => {
    this.setState({
      shows: !this.state.shows
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.shows && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName}  style={{width:300 }}/>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time Interval Since Mounted: {this.state.timeInterval}</p>
      </div>
    );
  }
}

export default App;



