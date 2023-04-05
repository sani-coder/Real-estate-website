import { GET_MESSAGES } from "../constants/messageConstants";
//code is trying to get the messages from a reducer.
//The code is using an object called state and it has two properties: messages and payload.
//Messages is an array of objects that are being passed in as the payload for this action.

export const messagesReducer = (state = { messages: [] }, action) => {
   //The switch statement checks what type of action was sent, then it returns either a new state or
   // just passes through whatever was sent in as the payload.
  switch (action.type) {
    //code above shows how the GET_MESSAGES constant can be imported into the messagesReducer function,
    // which then returns an array of objects with the payload being the message that was received.
    case GET_MESSAGES:
      return { messages: action.payload };
    default:
      return state;
  }
};
