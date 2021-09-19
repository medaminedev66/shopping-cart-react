import React, { Component } from 'react';

class Counter extends Component {
  // constructor() {
  //   super();
  // }
  state = {
    count: 0,
  };

  handler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  zerValue = () => {
    return this.props.value === 0 ? 'zero' : this.props.value;
  };

  getBadgeClasses() {
    let classes = 'badge m-1 badge-';
    classes += this.props.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.zerValue()}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.handler}>
          Increment
        </button>
        <div className="button btn btn-danger btn-sm mg-2">Delete</div>
      </div>
    );
  }
}

export default Counter;
