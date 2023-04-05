import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";

import { FormWrapper, Form } from "../components";

import { priceFormat } from "../helpers/helper_functions";
/**
 * The AdvancedSearchContainer component renders a form for advanced property search with various
 * filters and a price range slider.
 * @returns The `AdvancedSearchContainer` component is being returned.
 */

/**
 * The function retrieves the price of properties from the state and converts them into a numerical
 * format.
 */
const AdvancedSearchContainer = () => {
  const dispatch = useDispatch();

  const { properties } = useSelector((state) => state.propertyList);

  const price = properties.map(
    (property) => +property.price.split(",").join("")
  );

  /* These are all variable declarations using `const` and `useState` hooks. */
  const maxPrice = Math.max.apply(null, price),
    minPrice = Math.min.apply(null, price);

  const categories = [
    ...new Set(properties.map((property) => property.category)),
  ];

  const listedIn = [
    ...new Set(properties.map((property) => property.listedIn)),
  ];

  const counties = [
    ...new Set(properties.map((property) => property.address.county)),
  ];
  const rooms = [
    ...new Set(properties.map((property) => property.features.bedrooms)),
  ].sort((a, b) => a - b);

  const [priceRange, setPriceRange] = useState(0);
/* The `useEffect` hook is used to dispatch an action to retrieve a list of properties when the
component mounts. The `useSelector` hook is used to retrieve the `properties` array from the state.
The component then renders a form with various filters and a price range slider. The form allows
users to search for properties based on their type, county, category, number of bedrooms, price
range, and search term. */

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);
  return (
    <FormWrapper>
      <FormWrapper.Header>
        <FormWrapper.Title>Advanced Search</FormWrapper.Title>
      </FormWrapper.Header>
      <FormWrapper.Content>
        <Form>
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Types</Form.Option>
              {listedIn.map((type) => (
                <Form.Option key={type}>{type}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Counties</Form.Option>
              {counties.map((county) => (
                <Form.Option key={county}>{county}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Categories</Form.Option>
              {categories.map((category) => (
                <Form.Option key={category}>{category}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Bed Rooms</Form.Option>
              {rooms.map((room) => (
                <Form.Option key={Math.random(room)}>{room}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Span>
              {" "}
              Price range: $ {priceFormat(+priceRange)} to ${" "}
              {priceFormat(maxPrice)}
            </Form.Span>
            <Form.RangeInput
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange}
              onChange={({ target: { value } }) => setPriceRange(value)}
            />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Input type="text" placeholder="Search Term" />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.SubmitInput type="submit" value="Search" />
          </Form.FormGroup>
        </Form>
      </FormWrapper.Content>
    </FormWrapper>
  );
};

export default AdvancedSearchContainer;
