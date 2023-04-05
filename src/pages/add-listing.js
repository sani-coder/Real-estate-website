/* These lines of code are importing various components and containers from different files and
directories to be used in the `AddListing` component. The `import React from "react"` line is
importing the React library, which is necessary for creating React components. The other imports are
importing custom components and containers from the `../components` and `../containers` directories,
as well as partials from the `../partials/add_property_partials` directory. The `useParams` hook is
also being imported from the `react-router-dom` library to access URL parameters. */
import React from "react";

import { Section, Add, Form } from "../components";
import { useParams } from "react-router-dom";
import {
  HeaderContainer,
  DashboardContainer,
  FooterContainer,
} from "../containers";
import {
  Descrition,
  Location,
  Media,
  Details,
} from "../partials/add_property_partials";

/**
 * The function renders a form for adding or editing a property listing.
 * @returns The `AddListing` component is being returned, which renders a header, a section with a
 * dashboard container, and a footer. Inside the dashboard container, there is an `Add` component that
 * contains a form with several input fields for adding or editing a property listing. The form also
 * has a submit button that either says "Submit Property" or "Update Property" depending on whether an
 * `id`
 */
const AddLisiting = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title={id ? "Edit Property" : "Add Property"}>
            <Add>
              <Form>
                <Descrition />
                <Location />
                <Media />
                <Details />
                <Add.Footer>
                  <Form.FormGroup class="form-group">
                    <Form.SubmitInput
                      type="submit"
                      value={id ? "Update Property" : "Submit Property"}
                    />
                  </Form.FormGroup>
                  {id && (
                    <Form.FormGroup class="form-group">
                      <Form.SubmitInput type="submit" value="Cancel Update" />
                    </Form.FormGroup>
                  )}
                </Add.Footer>
              </Form>
            </Add>
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default AddLisiting;
