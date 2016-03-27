// круг
import React, { Component } from 'react';

export default class Square extends Component {
  
  static propTypes = {
    color: React.PropTypes.string.isRequired,
  };

  render() {
    const { size, color } = this.props;
    const style = {
      border: '1px solid ' + color,
      width: '100%',
      height: '100%',
    };
    return (
      <div style={style} />
    );
  }
}