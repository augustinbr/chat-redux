import { setMessages, MESSAGE } from '../actions';


export default function (state = null, action) {
  if (state === undefined) {
    console.log(state);
    return [];
  }

  if (action.type === MESSAGE) {
    return action.payload;
  }
  return state;
}
