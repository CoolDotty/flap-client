import { AnyAction } from 'redux';
import { DECREMENT_PART, INCREMENT_PART, CREATE_PART } from '../../actions/parts';
import _ from 'lodash';

import { v4 as uuid } from 'uuid';

type Part = {
  id: string
  name: string
  amount: number
};

const Part = (name: string, amount: number = 0): Part => ({
  id: uuid(),
  name, amount
})

type PartState = Array<Part>

const initialState: PartState = [
  Part('Wheel'),
  Part('Chasis'),
  Part('Engine'),
  Part('Windshield'),
];

const partsReducer = (prevState: PartState = initialState, action: AnyAction) => {
  const state = _.cloneDeep(prevState)
  switch (action.type) {
    case INCREMENT_PART: {
      const idx = state.findIndex((part: Part) => part.id === action.partId);
      state[idx].amount += 1;
      return state;
    }
    case DECREMENT_PART: {
      const idx = state.findIndex((part: Part) => part.id === action.partId);
      state[idx].amount -= 1;
      return state;
    }
    case CREATE_PART: {
      state.push(Part(action.partName))
      return state;
    }

    default:
      return state;
  }
};

export default partsReducer;
