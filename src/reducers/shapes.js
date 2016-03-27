import {
  ADD_RANDOM_SHAPE,
  DELETE_SHAPE,
} from '../actions/shapes';
import Shapes from '../constants/shapes';

const randomInt   = (start, end) => start + Math.floor(Math.random() * (end - start + 1));
const randomColor = ()           => '#' + Math.floor(Math.random()*16777215).toString(16);

var id = 0;

const shapes = (state = [] , action) => {
  switch (action.type) {

    case ADD_RANDOM_SHAPE:
      const { x, y } = action;
      const color = randomColor();
      const type  = randomInt(0, 1) === 0 ? Shapes.CIRCLE : Shapes.SQUARE;
      let   size  = randomInt(30, 200);
      if (type === Shapes.SQUARE) {
        size = randomInt(20, 150);
      }
      id++;
      const newShape = {id, x, y, type, size, color}
      const shapes   = [...state, newShape];
      return shapes;

    case DELETE_SHAPE:
      return state.shapes.filter(shape => shape.id !== action.id);

    default:
      return state;
  }
}

export default shapes;