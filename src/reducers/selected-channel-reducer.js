import { selectChannel, SELECT_CHANNEL } from '../actions';


export default function (state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === SELECT_CHANNEL) {
    return action.payload;
  }
  return state;
}
