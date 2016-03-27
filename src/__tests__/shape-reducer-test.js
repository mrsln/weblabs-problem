jest.unmock('../reducers/shapes');
jest.unmock('../constants/shapes');
jest.unmock('../actions/shapes');

jest.unmock('react');
jest.unmock('react-dom');
jest.unmock('react-addons-test-utils');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Reducer from '../reducers/shapes';
import Shapes from '../constants/shapes';
import { ADD_RANDOM_SHAPE, DELETE_SHAPE } from '../actions/shapes';

describe('Shapes reducer', () => {

  it('should return an empty array', () => {
    expect(
      Reducer(undefined, {})
    ).toEqual([]);
  });

  it('should handle ADD_RANDOM_SHAPE', () => {
    expect(
        Reducer([], {type: ADD_RANDOM_SHAPE}).length
    ).toEqual(1);
  });

  it('should handle DELETE_SHAPE', () => {
    expect(
      Reducer(
        [
          {
            id: 0,
          },
          {
            id: 1,
          },
        ], {type: DELETE_SHAPE, id: 1}
      )
    ).toEqual([{id: 0}]);
  })
})