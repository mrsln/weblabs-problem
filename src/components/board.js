// полотно с геометрическими фигурами. Отвечает за расположение фигур.
import React, { Component } from 'react';
import Shape from './shape';

export default class Board extends Component {
  static propTypes = {
    shapes: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    onAddShape: React.PropTypes.func.isRequired,
    onDeleteShape: React.PropTypes.func.isRequired,
  };

  onAddShape = (e) => {
    const { width, height } = this.props;
    const x = e.clientX / width;
    const y = e.clientY / height;
    this.props.onAddShape(x, y);
  };

  renderShape = shape => {
    const { width, height } = this.props;
    const x = width  * shape.x;
    const y = height * shape.y;

    return (
      <div
        key   = {shape.id}
        style = {{
          position: 'absolute',
          left: x,
          top: y,
        }}
      >
        <Shape
          type     = {shape.type}
          size     = {shape.size}
          color    = {shape.color}
          onDelete = {this.props.onDeleteShape.bind(null, shape.id)}
        />
      </div>
    );
  };

  render() {
    const { shapes, width, height } = this.props;
    
    const style = {
      border: '1px solid gray',
      position: 'static',
      width,
      height,
    };

    return (
      <div
        style   = {style}
        onClick = {this.onAddShape}
      >
        { shapes.map( shape => this.renderShape(shape) ) }
      </div>
    );
  }
}