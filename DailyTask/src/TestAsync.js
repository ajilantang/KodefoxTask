import React, {Component} from 'react';
import autobind from 'class-autobind';

export default class TestAsync extends Component {
  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      counter: 0,
    };
  }

  _onIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this._onIncrement} />
      </div>
    );
  }
}
