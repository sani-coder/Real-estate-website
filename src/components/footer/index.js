/**
 * This is a React component for a website footer with various sub-components for different elements of
 * the footer.
 * @returns The code exports a React component called `Footer` with several sub-components such as
 * `Container`, `Content`, `Item`, `List`, `ListItem`, `Anchor`, `ExternalAnchor`, `Bottom`, `AppDiv`,
 * `Text`, `Subtitle`, `Title`, `Google`, `Apple`, and `Icon`. Each sub-component returns a specific
 * HTML element with some additional props and styles.
 */
import React from "react";
import {
  Container,
  InnerContainer,
  Content,
  Item,
  List,
  ListItem,
  Anchor,
  AppDiv,
  Bottom,
  Title,
  Subtitle,
  Text,
  Icon,
  Google,
  Apple,
  ExternalAnchor,
} from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Container = ({ children, ...restProps }) => {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
Footer.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
Footer.Item = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};
Footer.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};
Footer.ListItem = ({ children, app, ...restProps }) => {
  return (
    <ListItem {...restProps} app={app}>
      {children}
    </ListItem>
  );
};
Footer.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};

Footer.ExternalAnchor = ({ children, to, ...restProps }) => {
  return (
    <ExternalAnchor href={to} target="_blank" {...restProps}>
      {children}
    </ExternalAnchor>
  );
};

Footer.Bottom = ({ children, ...restProps }) => {
  return <Bottom {...restProps}>{children}</Bottom>;
};
Footer.AppDiv = ({ children, ...restProps }) => {
  return <AppDiv {...restProps}>{children}</AppDiv>;
};
Footer.Text = ({ children, blur, ...restProps }) => {
  return (
    <Text {...restProps} blur={blur}>
      {children}
    </Text>
  );
};
Footer.Subtitle = ({ children, min, ...restProps }) => {
  return (
    <Subtitle {...restProps} min={min}>
      {children}
    </Subtitle>
  );
};
Footer.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Footer.Google = ({ children, ...restProps }) => {
  return <Google {...restProps}>{children}</Google>;
};
Footer.Apple = ({ children, ...restProps }) => {
  return <Apple {...restProps}>{children}</Apple>;
};

Footer.Icon = ({ name, social, app }) => {
  return <Icon className={name} social={social} app={app}></Icon>;
};

export default Footer;
