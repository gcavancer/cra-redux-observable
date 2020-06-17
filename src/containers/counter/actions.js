import * as types from '../../constants/ActionTypes'

export const increment = () => {
  return { type: types.INCREMENT, payload: 1 };
}

export const decrement = () => {
  return { type: types.DECREMENT, payload: -1 };
}

export const observableComplete = (data) => {
  return { 
    type: types.OBSERVABLE_COMPLETE, 
    payload: data 
  };
}