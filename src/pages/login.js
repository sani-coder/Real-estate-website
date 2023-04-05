import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Login, Form } from "../components";
/**
 * The function Loginn returns a JSX component for a login page with a form and links to forgot
 * password and sign up pages.
 * @returns The `Loginn` component is being returned, which renders a login form with email and
 * password input fields, a submit button, and links to forgot password and sign up pages. It also
 * includes a header and footer container.
 */

const Loginn = () => {
  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Login>
        <Login.Container>
          <Login.Content>
            <Login.Header>
              <Login.Title>Login</Login.Title>
            </Login.Header>
            <Login.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input type="email" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.Input type="password" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Login" />
                </Form.FormGroup>
              </Form>
            </Login.InnerContent>
            <Login.Footer>
              <Login.Text>
                <Login.Anchor to="/forgot-password">
                  Forgot Password ?
                </Login.Anchor>
              </Login.Text>
              <Login.Text>
                Don't have an Account ?{" "}
                <Login.Anchor to="/signup">Sign Up</Login.Anchor>
              </Login.Text>
            </Login.Footer>
          </Login.Content>
        </Login.Container>
      </Login>
      <FooterContainer />
    </Fragment>
  );
};

export default Loginn;
