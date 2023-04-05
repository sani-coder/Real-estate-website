//importing the constants from "../constants/propertyConstants"

import {
  GET_PROPERTIES,
  GET_FEATURED_PROPERTIES,
  GET_PROPERTY,
} from "../constants/propertyConstants";
//defines a function called propertyListReducer.
//This function takes in state and action as parameters.
//The first parameter is the current state, which is an object with properties ,
//such as images, features, amenities, address, agent.
//The second parameter is an action that can be GET_PROPERTIES or GET_FEATURED_PROPERTIES.
//If it's GET_PROPERTIES then the return value of this function will be {properties:action.payload}.
//If it's GET_FEATURED_PROPERTIES then the return value of this function will be {features:action.payload}.
// because featuredPropertyReducer returns {features:action.payload}.
export const propertyListReducer = (state = { properties: [] }, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
      return { properties: action.payload };
    default:
      return state;
  }
};

//featuredPropertyReducer which has a switch statement that checks for actions of type GET_FEATURED_PROPERTY and
// if so returns {featues:action.payload} to its caller (propertyListReducer).
export const featuredPropertyReducer = (state = { featured: [] }, action) => {
  switch (action.type) {
    case GET_FEATURED_PROPERTIES:
      return { featured: action.payload };
    default:
      return state;
  }
};
//propertyListReducer which has a switch statement that checks for actions of type GET- PROPERTY and if so returns {property:action .payload} to its.
//The code is a reducer function that takes in the state object and action, then returns the next state.
export const propertyReducer = (
  state = {
    property: {
      images: [],
      features: {},
      amenities: [],
      address: {},
      agent: {},
    },
  },
  action
) => {
  switch (action.type) {
    case GET_PROPERTY:
      return { ...state, property: action.payload };
    default:
      return state;
  }
};
