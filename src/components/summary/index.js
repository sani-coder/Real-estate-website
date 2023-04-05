/**
 * The code exports a React component called Summary with several sub-components for rendering
 * different parts of a summary.
 * @returns The `Summary` component is being returned, which is a container component that has several
 * sub-components such as `Top`, `BottomContent`, `BottomHeader`, `Bottom`, `Title`, `Text`, `Anchor`,
 * `AnchorDiv`, and `Icon`. These sub-components can be used to build a summary section in a web page
 * or application.
 */
import React from "react";
import {
  Container,
  Top,
  BottomContent,
  BottomHeader,
  Bottom,
  Title,
  Text,
  Anchor,
  AnchorDiv,
  Icon,
} from "./styles/summary";

const Summary = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Summary.Top = ({ children, ...restProps }) => {
  return <Top {...restProps}>{children}</Top>;
};
Summary.BottomContent = ({ children, ...restProps }) => {
  return <BottomContent {...restProps}>{children}</BottomContent>;
};
Summary.BottomHeader = ({ children, ...restProps }) => {
  return <BottomHeader {...restProps}>{children}</BottomHeader>;
};
Summary.Bottom = ({ children, ...restProps }) => {
  return <Bottom {...restProps}>{children}</Bottom>;
};
Summary.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Summary.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Summary.Anchor = ({ children, to, bg, ...restProps }) => {
  return (
    <Anchor to={to} bg={bg} {...restProps}>
      {children}
    </Anchor>
  );
};
Summary.AnchorDiv = ({ children, ...restProps }) => {
  return <AnchorDiv {...restProps}>{children}</AnchorDiv>;
};
Summary.Icon = ({ name, ...restProps }) => {
  return <Icon className={name} {...restProps} />;
};

export default Summary;
