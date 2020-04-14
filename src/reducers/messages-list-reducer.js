import { FETCH_PENDING, FETCH_MESSAGES, FETCH_MESSAGES_ERROR } from '../actions';

const initialState = {
  pending: false,
  messages: []
};


export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        state,
        pending: true

      };
    case FETCH_MESSAGES:
      return {
        state,
        pending: false,
        messages: action.payload
      };
    case FETCH_MESSAGES_ERROR:
      return {
        state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getMessages = state => state.messages;
export const getMessagesPending = state => state.pending;
export const getMessagesError = state => state.error;

