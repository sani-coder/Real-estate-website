/**
 * The above code exports a Login component with sub-components for Container, Content, Title, Text,
 * Anchor, Header, and Footer.
 * @returns This is a React functional component called `Login`. It returns a container element with
 * various child components such as `Content`, `Title`, `Text`, `Anchor`, `Header`, and `Footer`. Each
 * of these child components is also a functional component that returns a specific HTML element with
 * its own set of props. The `Login` component itself takes in `children` and `restProps` as
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
} from "./styles/login";

const Login = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Login.Container = ({ children, ...restProps }) => {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
Login.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
Login.InnerContent = ({ children, ...restProps }) => {
  return <InnerContent {...restProps}>{children}</InnerContent>;
};
Login.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Login.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Login.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};
Login.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Login.Footer = ({ children, ...restProps }) => {
  return <Footer {...restProps}>{children}</Footer>;
};

export default Login;
