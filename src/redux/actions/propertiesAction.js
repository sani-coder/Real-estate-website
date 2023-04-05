import {
  GET_PROPERTIES,
  GET_FEATURED_PROPERTIES,
  GET_PROPERTY,
} from "../constants/propertyConstants";
import properties from "../../dev-data/listing";
//The code is using the async/await pattern to make asynchronous calls.
//The code is also using a function called getPropertyList and 
//which returns an object with properties that are used in the GET_PROPERTIES action.
export const getPropertyList = () => async (dispatch) => {
  dispatch({ type: GET_PROPERTIES, payload: properties });
};
// function getFeaturedList which returns an object with featured properties from the list of all properties,
// and this object is passed as payload for GET_FEATURED_PROPERTIES actions.
export const getFeaturedList = () => async (dispatch) => {
  const featured = properties
    .filter((property) => property.featured === true)
    .slice(0, 6);
  dispatch({ type: GET_FEATURED_PROPERTIES, payload: featured });
};
//The code starts by finding the property from the properties object, then sends back a GET_PROPERTY message to dispatch.
export const getProperty = (id) => async (dispatch) => {
  const property = properties.find((property) => property.id === +id);
  dispatch({ type: GET_PROPERTY, payload: property });
};
