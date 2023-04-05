/**
 * The above code exports a React component called Signup with several sub-components for different
 * parts of a signup form.
 * @returns A React component called `Signup` with several nested sub-components (`Container`,
 * `Content`, `Title`, etc.) that can be used to render a signup form or page.
 */
import React from "react";
import {
  Container,
  InnerContainer,
  Content,
  InnerContent,
  Title,
  Text,
  Anchor,
  Header,
  Footer,
} from "./styles/signup";

const Signup = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Signup.Container = ({ children, ...restProps }) => {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
Signup.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
Signup.InnerContent = ({ children, ...restProps }) => {
  return <InnerContent {...restProps}>{children}</InnerContent>;
};
Signup.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Signup.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Signup.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};
Signup.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
Signup.Footer = ({ children, ...restProps }) => {
  return <Footer {...restProps}>{children}</Footer>;
};
export default Signup;
