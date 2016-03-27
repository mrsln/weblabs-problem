// круг
import React, { Component } from 'react';

export default class Circle extends Component {

  static propTypes = {
    color: React.PropTypes.string.isRequired,
  };

  render() {
    const { color } = this.props;
    const style = {
      borderRadius: '50%',
      border: '1px solid ' + color,
      width: '100%',
      height: '100%',
    };
    return (
      <div style={style} />
    );
  }
}