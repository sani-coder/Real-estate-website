
import {
  GET_AGENTS,
  GET_FEATURED_AGENTS,
  GET_AGENT,
} from "../constants/agentsConstants";

//code is a reducer that takes in state and action.
//then returns the new state based on the type of action it received
//A reducer is a function that takes in the current state and returns the next state after applying some action.
//code has three functions: agentListReducer, featuredAgentsReducer, and agentReducer.
//The first two are simple reducers that take in the current state and return the next state after applying some action,
// while the third one is an actual reducer with a single argument called agent.
export const featuredAgentsReducer = (state = { featured: [] }, action) => {
  switch (action.type) {
    case GET_FEATURED_AGENTS:
      return { featured: action.payload };
    default:
      return state;
  }
};
export const agentListReducer = (state = { agents: [] }, action) => {
  switch (action.type) {
    case GET_AGENTS:
      return { agents: action.payload };
    default:
      return state;
  }
};

export const agentReducer = (
  state = { agent: { social: {}, listings: [] } },
  action
) => {
  switch (action.type) {
    case GET_AGENT:
      return { ...state, agent: action.payload };
    default:
      return state;
  }
};
