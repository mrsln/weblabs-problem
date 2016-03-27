export const ADD_RANDOM_SHAPE = 'ADD_RANDOM_SHAPE';
export const DELETE_SHAPE = 'DELETE_SHAPE';

export const addRandomShape = (x, y) => ({
  type: ADD_RANDOM_SHAPE,
  x,
  y,
});

export const deleteShape = id => ({
  type: DELETE_SHAPE,
  id,
});
