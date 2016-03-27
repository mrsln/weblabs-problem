// главная страница
import React, { Component } from 'react';
import Board from '../components/board';
import Shapes from '../constants/shapes';

const randomInt   = (start, end) => start + Math.floor(Math.random() * (end - start + 1));
const randomColor = ()           => '#' + Math.floor(Math.random()*16777215).toString(16);

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shapes: [],
      width: 0,
      height: 0,
      nextId: 1,
    }
  }

  OnResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  componentDidMount() {
    this.OnResize();
    window.onresize = this.OnResize;
  };

  onAddShape = (x, y) => {
    const color = randomColor();
    const type  = randomInt(0, 1) === 0 ? Shapes.CIRCLE : Shapes.SQUARE;
    let   size  = randomInt(30, 200);
    if (type === Shapes.SQUARE) {
      size = randomInt(20, 150);
    }

    const newShape = {id: this.state.nextId, x, y, type, size, color}
    const shapes   = [...this.state.shapes, newShape];

    this.setState({shapes});
    this.setState({nextId: this.state.nextId+1});
  };

  onDeleteShape = id => {
    const shapes = this.state.shapes.filter(shape => shape.id !== id);
    this.setState({shapes});
  }

  render() {
    return (
      <div>
        <Board
          shapes        = {this.state.shapes}
          width         = {this.state.width}
          height        = {this.state.height}
          onAddShape    = {this.onAddShape}
          onDeleteShape = {this.onDeleteShape}
        />
      </div>
    );
  }
}