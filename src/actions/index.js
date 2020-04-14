// TODO: add and export your own actions
const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};


export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR';

export const SET_CHANNELS = 'SET_CHANNELS';
export const SET_USER = 'SET_USER';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function selectChannel(selectedChannel) {
  return {
    type: SELECT_CHANNEL,
    payload: selectedChannel
  };
}

export function fetchMessagesPending() {
  return {
    type: FETCH_PENDING
  };
}


export function fetchMessagesSuccess(messages) {
  return {
    type: FETCH_MESSAGES,
    payload: messages

  };
}

export function fetchMessagesError(error) {
  return {
    type: FETCH_MESSAGES_ERROR,
    error

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

