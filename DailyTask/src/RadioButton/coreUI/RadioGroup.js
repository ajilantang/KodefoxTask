//@flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
type GroupProps = {
  name: string,
  children?: Array<React$Element<*>>,
};

export class RadioGroup extends Component {
  props: GroupProps;
  static childContextTypes = {
    name: PropTypes.string,
  };
  getChildContext() {
    return {name: this.props.name};
  }
  render() {
    let {name, children, ...otherProps} = this.props;
    return <div {...otherProps}>{children}</div>;
  }
}
type ItemProps = {
  children?: Array<React$Element<*>>,
};

export class RadioItem extends Component {
  props: ItemProps;
  static contextTypes = {
    name: PropTypes.string,
  };
  render() {
    let {children, ...otherProps} = this.props;
    return (
      <div {...otherProps}>
        <input name={this.context.name} type="radio" />
        <span>{children}</span>
        <p>{this.context.ampas}</p>
      </div>
    );
  }
}

RadioItem.contextTypes = {
  name: PropTypes.string,
};
