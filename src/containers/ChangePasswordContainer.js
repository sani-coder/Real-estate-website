/**
 * This is a React functional component that renders a form for changing a user's password.
 * @returns The `ChangePasswordContainer` component is being returned. It contains a `Password`
 * component and a `Form` component with three `FormGroup` components, each containing a `Label` and an
 * `Input`. The last `FormGroup` contains a `SubmitInput` with the value "Change Password".
 */
import React from "react";

import { Password, Form } from "../components";

const ChangePasswordContainer = () => {
  return (
    <Password>
      <Form>
        <Form.FormGroup>
          <Form.Label>Old Password</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>New Password</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.SubmitInput value="Change Password" />
        </Form.FormGroup>
      </Form>
    </Password>
  );
};

export default ChangePasswordContainer;
