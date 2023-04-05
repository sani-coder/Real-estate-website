/**
 * The above code exports a React component called "Add" with various sub-components for creating a
 * form for adding items.
 * @returns The code is defining a React component called "Add" which returns a container element with
 * various child components such as "Description", "Location", "Media", "Details", "Title", "Button",
 * and "Footer". Each of these child components has its own set of properties and styles defined in the
 * imported styles file. The child components are defined as separate functions within the "Add"
 * component using the
 */
import React from "react";
import { //importing the styles from "./styles/add". 
  Container,
  Description,
  DescriptionHeader,
  DescriptionContent,
  DescriptionContentTop,
  DescriptionContentBottom,
  Location,
  LocationHeader,
  LocationContent,
  LocationContentBottom,
  LocationContentTop,
  Media,
  MediaHeader,
  MediaContent,
  Details,
  DetailsHeader,
  DetailsContent,
  Title,
  Button,
  Footer,
} from "./styles/add";


//example of how to use the Add component. 
//The code below is a simple example of how to use the Add component.
const Add = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Add.Description = ({ children, ...restProps }) => {
  return <Description {...restProps}>{children}</Description>;
};

Add.DescriptionHeader = ({ children, ...restProps }) => {
  return <DescriptionHeader {...restProps}>{children}</DescriptionHeader>;
};
Add.DescriptionContent = ({ children, ...restProps }) => {
  return <DescriptionContent {...restProps}>{children}</DescriptionContent>;
};
Add.DescriptionContentTop = ({ children, ...restProps }) => {
  return (
    <DescriptionContentTop {...restProps}>{children}</DescriptionContentTop>
  );
};
Add.DescriptionContentBottom = ({ children, ...restProps }) => {
  return (
    <DescriptionContentBottom {...restProps}>
      {children}
    </DescriptionContentBottom>
  );
};

Add.Location = ({ children, ...restProps }) => {
  return <Location {...restProps}>{children}</Location>;
};
Add.LocationHeader = ({ children, ...restProps }) => {
  return <LocationHeader {...restProps}>{children}</LocationHeader>;
};
Add.LocationContent = ({ children, ...restProps }) => {
  return <LocationContent {...restProps}>{children}</LocationContent>;
};
Add.LocationContentBottom = ({ children, ...restProps }) => {
  return (
    <LocationContentBottom {...restProps}>{children}</LocationContentBottom>
  );
};
Add.LocationContentTop = ({ children, ...restProps }) => {
  return <LocationContentTop {...restProps}>{children}</LocationContentTop>;
};
Add.Media = ({ children, ...restProps }) => {
  return <Media {...restProps}>{children}</Media>;
};
Add.MediaHeader = ({ children, ...restProps }) => {
  return <MediaHeader {...restProps}>{children}</MediaHeader>;
};
Add.MediaContent = ({ children, ...restProps }) => {
  return <MediaContent {...restProps}>{children}</MediaContent>;
};
Add.Details = ({ children, ...restProps }) => {
  return <Details {...restProps}>{children}</Details>;
};
Add.DetailsHeader = ({ children, ...restProps }) => {
  return <DetailsHeader {...restProps}>{children}</DetailsHeader>;
};
Add.DetailsContent = ({ children, ...restProps }) => {
  return <DetailsContent {...restProps}>{children}</DetailsContent>;
};
Add.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Add.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
Add.Footer = ({ children, ...restProps }) => {
  return <Footer {...restProps}>{children}</Footer>;
};

export default Add;
