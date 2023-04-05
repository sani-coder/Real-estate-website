/**
 * This is a React component for password change with a container styled component.
 * @returns The `PasswordChange` component is being returned, which renders a `Container` component
 * with any children passed to it as props.
 */
import React from "react";
import { Container } from "./styles/password";

const PasswordChange = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default PasswordChange;
