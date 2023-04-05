/**
 * The Jumbotron component is a reusable React component that renders a container with left and right
 * sections, a title, and text.
 * @returns This code exports a Jumbotron component with four sub-components: Left, Right, Text, and
 * Title. Each sub-component returns a styled component with the given props and children. The
 * Jumbotron component returns a Container component with the given props and children.
 */
import React from "react";

import { Container, Left, Right, Title, Text } from "./styles/jumbotrom";

const Jumbotron = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Left = ({ children, ...restProps }) => {
  return <Left {...restProps}>{children}</Left>;
};

Jumbotron.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};

Jumbotron.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export default Jumbotron;
