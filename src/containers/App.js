// главная страница
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../components/board';
import Shapes from '../constants/shapes';

import {
  addRandomShape,
  deleteShape,
} from '../actions/shapes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
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
    this.props.dispatch(addRandomShape(x, y));
  };

  onDeleteShape = id => {
    this.props.dispatch(deleteShape(id));
  }

  render() {
    const { shapes } = this.props;

    return (
      <div>
        <Board
          shapes        = {shapes}
          width         = {this.state.width}
          height        = {this.state.height}
          onAddShape    = {this.onAddShape}
          onDeleteShape = {this.onDeleteShape}
        />
      </div>
    );
  }
}

function select(state) {
  return {
    shapes: state,
  };
}

export default connect(select)(App);
