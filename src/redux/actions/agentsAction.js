import {
  GET_AGENTS,
  GET_FEATURED_AGENTS,
  GET_AGENT,
} from "../constants/agentsConstants";

import agents from "../../dev-data/agents";
//The code is a function that takes in an id and returns the corresponding agent.
//it creates a const called featuredAgents which is an array of agents filtered to only those with their featured property set to true.
//it dispatches a payload of this array as GET_FEATURED_AGENTS.
export const getFeaturedAgents = () => (dispatch) => {
  const featuredAgents = agents
    .filter((agent) => agent.featured === true)
    .slice(0, 3);
  dispatch({ type: GET_FEATURED_AGENTS, payload: featuredAgents });
};
//The next line imports the GET_AGENTS constant from "../constants/agentsConstants" and exports a function called getAgentList(),
// that takes in no parameters and returns an array of agents.
export const getAgentList = () => (dispatch) => {
  dispatch({ type: GET_AGENTS, payload: agents });
};
//This function also has another export called getAgent(), 
//which takes in an id parameter and returns the corresponding agent based on its ID value.
export const getAgent = (id) => (dispatch) => {
  const singleAgent = agents.find((agent) => agent.id === +id);

  dispatch({ type: GET_AGENT, payload: singleAgent });
};
