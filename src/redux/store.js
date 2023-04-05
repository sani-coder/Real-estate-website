//code creates a Redux store with the reducer function as its initial state.

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import {
  propertyListReducer,
  featuredPropertyReducer,
  propertyReducer,
} from "./reducers/propertiesReducer";

import {
  featuredAgentsReducer,
  agentListReducer,
  agentReducer,
} from "./reducers/agentsReducer";
import { messagesReducer } from "./reducers/messagesReducer";

const middlewares = [thunk];
//creates an object that contains all of the middleware functions and applies them to the store.

//reducer is created and the initial state is set to an empty object {}.

const reducer = combineReducers({
  propertyList: propertyListReducer,
  featuredProperty: featuredPropertyReducer,
  featuredAgents: featuredAgentsReducer,
  agentList: agentListReducer,
  agent: agentReducer,
  property: propertyReducer,
  messageList: messagesReducer,
});
const intialState = {};
//middlewares are applied in order and then the store is exported with the default export function

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
