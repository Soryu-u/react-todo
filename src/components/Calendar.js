import { Component } from "react";

class Calendar extends Component {
  state = { date: new Date() };

  componentDidMount = () =>
    (this.timerID = setInterval(() => this.tick(), 1000));

  componentWillUnmount = () => clearInterval(this.timerID);

  tick = () =>
    this.setState({
      date: new Date(),
    });

  render() {
    return <p id="calendar">{this.state.date.toDateString()}</p>;
  }
}

export default Calendar;
