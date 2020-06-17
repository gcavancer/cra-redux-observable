import * as types from '../../constants/ActionTypes'

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {

    case types.INCREMENT:
      return state;
      
    case types.DECREMENT:
      return state;

    case types.OBSERVABLE_COMPLETE:
      return {
        ...state,
        count: state.count + action.payload
      }

    default:
      return state
  }
}