/**
 * The above code exports a React component called AdminListing with several sub-components for
 * building an admin listing page.
 * @returns This is a React component called `AdminListing` that returns a container with several
 * nested components such as `Top`, `Content`, `Title`, `Header`, `Button`, `Anchor`, and `Action`.
 * Each of these nested components is also a React component that returns a specific HTML element with
 * some props. The `AdminListing` component also accepts children as props and passes them down to the
 * container
 */
import React from "react";
import {
  Container,
  Top,
  Content,
  Title,
  Header,
  Button,
  Anchor,
  Action,
} from "./styles/admin_listing";

const AdminListing = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

AdminListing.Top = ({ children, ...restProps }) => {
  return <Top {...restProps}>{children}</Top>;
};
AdminListing.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
AdminListing.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
AdminListing.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
AdminListing.Button = ({ children, bg, ...restProps }) => {
  return (
    <Button bg={bg} {...restProps}>
      {children}
    </Button>
  );
};

AdminListing.Anchor = ({ children, to, ...restProps }) => {
  return (
    <Anchor to={to} {...restProps}>
      {children}
    </Anchor>
  );
};

AdminListing.Action = ({ children, ...restProps }) => {
  return <Action {...restProps}>{children}</Action>;
};

export default AdminListing;
