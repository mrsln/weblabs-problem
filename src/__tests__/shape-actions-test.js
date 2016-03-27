jest.unmock('../actions/shapes');

jest.unmock('react');
jest.unmock('react-dom');
jest.unmock('react-addons-test-utils');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import * as Actions from '../actions/shapes';

describe('Shapes actions', () => {
  it('should create ADD_RANDOM_SHAPE action', () => {
    expect(
      Actions.addRandomShape()
    ).toEqual({type: Actions.ADD_RANDOM_SHAPE});
  })
})