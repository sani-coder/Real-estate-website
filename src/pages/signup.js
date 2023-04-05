/* These lines of code are importing necessary modules and components from other files in the project. */
import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Signup, Form } from "../components";

/**
 * The function returns a signup form with input fields for name, email, password, and confirm
 * password, along with a submit button and a link to the login page.
 * @returns A functional component called `Signupp` is being returned. It renders a header container, a
 * signup form with input fields for name, email, password, and confirm password, and a submit button.
 * It also includes a footer with a link to the login page.
 */
const Signupp = () => {
  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Signup>
        <Signup.Container>
          <Signup.Content>
            <Signup.Header>
              <Signup.Title>Signup</Signup.Title>
            </Signup.Header>
            <Signup.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Name</Form.Label>
                  <Form.Input type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.Input type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Input type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Signup" />
                </Form.FormGroup>
              </Form>
            </Signup.InnerContent>
            <Signup.Footer>
              <Signup.Text>
                Already Have Account ?{" "}
                <Signup.Anchor to="/login">Login</Signup.Anchor>
              </Signup.Text>
            </Signup.Footer>
          </Signup.Content>
        </Signup.Container>
      </Signup>
      <FooterContainer />
    </Fragment>
  );
};

export default Signupp;
