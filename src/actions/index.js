// TODO: add and export your own actions
const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

export default initialState;

const MESSAGE = 'MESSAGE';
const SET_CHANNELS = 'SET_CHANNELS';
const SET_USER = 'SET_USER';
const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function setMessages(messages) {
  return {
    type: MESSAGE,
    payload: messages
  };
}

export function listChannels() {
  return {
    type: SET_CHANNELS,
    payload: initialState.channels
  };
}

export function setUser() {
  return {
    type: SET_USER,
    payload: initialState.currentUser
  };
}

export function selectChannel() {
  return {
    type: SELECT_CHANNEL,
    payload: initialState.selectedChannel
  };
}
