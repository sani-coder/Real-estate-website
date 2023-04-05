/**
 * This is a React component that creates a table with customizable headers, body, rows, data, buttons,
 * and anchors.
 * @returns This is a React component called `Table` that returns a container element with children
 * components. It also has several sub-components such as `Head`, `Body`, `Row`, `Data`, `Button`, and
 * `Anchor`, each of which returns a specific element with its own set of props. The `Table` component
 * is exported as the default export of the module.
 */
import React from "react";
import {
  Container,
  Head,
  Body,
  Row,
  Data,
  Button,
  Anchor,
} from "./styles/table";

const Table = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Table.Head = ({ children, ...restProps }) => {
  return <Head {...restProps}>{children}</Head>;
};

Table.Body = ({ children, ...restProps }) => {
  return <Body {...restProps}>{children}</Body>;
};

Table.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};

Table.Data = ({ children, ...restProps }) => {
  return <Data {...restProps}>{children}</Data>;
};

Table.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

Table.Anchor = ({ children, to, ...restProps }) => {
  return (
    <Anchor to={to} {...restProps}>
      {children}
    </Anchor>
  );
};

export default Table;
