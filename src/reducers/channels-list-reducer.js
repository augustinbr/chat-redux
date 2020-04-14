import { listChannels, SET_CHANNELS } from '../actions';


export default function (state = ['general', 'react', 'paris'], action) {
  if (state === undefined) {
    return [];
  }
  if (action.type === SET_CHANNELS) {
    return action.payload;
  }
  return state;
}
