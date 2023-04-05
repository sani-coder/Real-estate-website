import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Forgot, Form } from "../components";

/**
 * The function returns a JSX component for a forgot password page with a form to reset the password.
 * @returns A React functional component named `Forgott` is being returned. It renders a header
 * container, a `Forgot` component, and a footer container. The `Forgot` component contains a form for
 * resetting the user's password.
 */
const Forgott = () => {
  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Forgot>
        <Forgot.Container>
          <Forgot.Content>
            <Forgot.Header>
              <Forgot.Title>Reset Your Password</Forgot.Title>
            </Forgot.Header>
            <Forgot.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Send Reset Token" />
                </Form.FormGroup>
              </Form>
            </Forgot.InnerContent>
          </Forgot.Content>
        </Forgot.Container>
      </Forgot>
      <FooterContainer />
    </Fragment>
  );
};

export default Forgott;
