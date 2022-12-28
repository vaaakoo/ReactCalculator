import React from "react";

export class Time extends React.Component {
  constructor() {
    super();
    const today = new Date(),
      date = today.getHours() + ":" + today.getMinutes();

    this.state = {
      date: date,
    };
  }

  render() {
    return <div>{this.state.date}</div>;
  }
}
