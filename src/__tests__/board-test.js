jest.unmock('../components/board');
jest.unmock('../constants/shapes');

jest.unmock('react');
jest.unmock('react-dom');
jest.unmock('react-addons-test-utils');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Board from '../components/board';
import Shapes from '../constants/shapes';

describe('Board', () => {
  it('adds a shape', () => {

  const onAddShape    = jest.genMockFunction();
  const onDeleteShape = jest.genMockFunction();
  const width = 600;
  const height = 400;
  const shapes = [
    {
      id: 0,
      type: Shapes.CIRCLE,
      size: 30,
      x: 0.5,
      y: 0.5,
      color: 'green',
    }
  ];
  
  const board = TestUtils.renderIntoDocument(
    <Board shapes={[]} width={width} height={height} onAddShape={onAddShape} onDeleteShape={onDeleteShape} />
  );

  const boardNode = ReactDOM.findDOMNode(board);
  const e = {clientX: 20, clientY: 30}
  TestUtils.Simulate.click(boardNode, e);

  const x = e.clientX / width;
  const y = e.clientY / height;
  expect(onAddShape).toBeCalledWith(x, y);


  });
})