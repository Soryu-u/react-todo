import { Component } from "react";

class Clock extends Component {
  state = { date: new Date() };

  componentDidMount = () =>
    (this.timerID = setInterval(() => this.tick(), 1000));

  componentWillUnmount = () => clearInterval(this.timerID);

  tick = () =>
    this.setState({
      date: new Date(),
    });

  render() {
    return <p id="clock">{this.state.date.toLocaleTimeString()}</p>;
  }
}

export default Clock;
