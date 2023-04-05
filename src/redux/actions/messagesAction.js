//importing the constants and messages from "../constants/messageConstants" and "../dev-data/messages".
import { GET_MESSAGES } from "../constants/messageConstants";
import { messages } from "../../dev-data/messages";

//The code then exports a function called getMessages.
//This function takes in no arguments, but it does take in an optional dispatch argument.
//If you pass a dispatch object to this function, it will call that specific method on that object when the GET_MESSAGES action is dispatched.

export const getMessages = () => (dispatch) => {
  dispatch({ type: GET_MESSAGES, payload: messages });
};
//export  deleteMessage which takes in one argument: id.
//It also has an optional dispatch parameter of its own.
export const deleteMessage = (id) => (dispatch) => {
  const filteredMessages = messages.filter((message) => message.id !== id);
  dispatch({ type: GET_MESSAGES, payload: filteredMessages });
};
