import { fetchMessagesPending, fetchMessagesSuccess, fetchMessagesError } from '../actions';


function fetchMessages() {
  return (dispatch) => {
    dispatch(fetchMessagesPending());
    fetch('https://wagon-chat.herokuapp.com')
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMessagesSuccess(res.messages));
        return res.messages;
      })
      .catch((error) => {
        dispatch(fetchMessagesError(error));
      });
  };
}

export default fetchMessages;
