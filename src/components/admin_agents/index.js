/**
 * The above code exports a React component called AdminAgents with a nested Content component.
 * @returns The code is returning a React component called `AdminAgents` which has a nested component
 * called `Content`. The `AdminAgents` component has a `Container` element that wraps around its
 * children, and the `Content` component has a `Content` element that wraps around its children. The
 * `...restProps` spread operator is used to pass any additional props to the respective elements.
 */
import React from "react";

import { Container, Content } from "./styles/admin_agents";

const AdminAgents = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

AdminAgents.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

export default AdminAgents;
