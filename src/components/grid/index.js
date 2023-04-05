/**
 * The Grid component is a React component that renders a column and a row with customizable width and
 * count props.
 * @returns The `Grid` component is being returned, which has two props: `children` and `restProps`.
 * The `Grid.Row` component is also being returned, which has three props: `children`, `width`, and
 * `count`, as well as `restProps`.
 */
import React from "react";
import { Column, Row } from "./styles/grid";

const Grid = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>;
};

Grid.Row = ({ children, width, count, ...restProps }) => {
  return (
    <Row {...restProps} width={width}>
      {children}
    </Row>
  );
};

export default Grid;
