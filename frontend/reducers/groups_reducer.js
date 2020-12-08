import { RECEIVE_GROUPS } from '../actions/actions';

const groupsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return Object.assign({}, state, { groups: action.groups });
    default:
      return state;
  }
};

export default groupsReducer;