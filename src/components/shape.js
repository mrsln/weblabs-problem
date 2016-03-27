// фигура. Является фабрикой конкретных фигур.
import React, { Component } from 'react';
import Shapes from '../constants/shapes';
import Circle from './circle';
import Square from './square';

export default class Shape extends Component {

  static propTypes = {
    type: React.PropTypes.oneOf([Shapes.CIRCLE, Shapes.SQUARE]),
    size: React.PropTypes.number.isRequired,
    onDelete: React.PropTypes.func.isRequired,
  };

  onDelete = e => {
    e.stopPropagation();
    e.preventDefault();
    this.props.onDelete();
  };
  
  renderShape = (type, size, color) => {
    switch (type) {
      case Shapes.CIRCLE:
        return <Circle color={color} />;
      case Shapes.SQUARE:
        return <Square color={color} />;
      default:
        return null;
    }
  };

  render() {
    const { type, size, color } = this.props;
    const style = {
      width:  size,
      height: size,
    };
    return (
      <div
        style   = {style}
        onClick = {this.onDelete}
      >
        {this.renderShape(type, size, color)}
      </div>
    );
  }
}