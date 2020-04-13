import { setUser, SET_USER } from '../actions';

export default function (state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === SET_USER) {
    return action.payload;
  }
  return state;
}
