/**
 * This is a React component that displays a gallery of property images.
 * @returns The `PropertGallery` component is returning a gallery of images, with each image being
 * wrapped in an `ImageContainer` component and sourced from an array of images passed in as a prop.
 * The gallery displays four images in total.
 */
import React, { useState } from "react";
import { Property } from "../components";
export const PropertGallery = ({ image }) => {
  return (
    <Property.Gallery>
      <Property.ImageContainer>
        <Property.Image source={image[0]} />
      </Property.ImageContainer>
      <Property.ImageContainer>
        <Property.Image source={image[1]} />
      </Property.ImageContainer>
      <Property.ImageContainer>
        <Property.Image source={image[2]} />
      </Property.ImageContainer>
      <Property.ImageContainer>
        <Property.Image source={image[3]} />
      </Property.ImageContainer>
    </Property.Gallery>
  );
};

/**
 * This is a React component that displays details and features of a property and allows the user to
 * toggle the visibility of the content.
 * @returns A functional component named `PropertyFeatures` is being returned. It takes an object
 * `features` as a parameter and renders a section of property information with details and features.
 * The component uses the `useState` hook to toggle the visibility of the content. When the user clicks
 * on the header, the `contentHandler` function is called, which toggles the `featuresShown` state. The
 * component then
 */
export const PropertyFeatures = ({ features }) => {
  const [featuresShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };

  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Details and Features</Property.InfoTitle>
        <Property.Icon
          name={featuresShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info
        ></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={featuresShown}>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Bedrooms : </Property.Span>
            {features.bedrooms}
          </Property.Text>
          <Property.Text>
            <Property.Span>Garage : </Property.Span>
            {features.garage}
          </Property.Text>
        </Property.InfoItem>

        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Status : </Property.Span>
            {features.status ? "Active" : "Not Active"}
          </Property.Text>
          <Property.Text>
            <Property.Span>Elevator : </Property.Span>
            {features.elevator ? "Yes" : "No"}
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Kitchen : </Property.Span>
            {features.kitchen ? "Availalbe" : "Not Available"}
          </Property.Text>
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>
  );
};

export const PropertyAmenities = ({ amenities }) => {
  const [amenitiesShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };

  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Amenities</Property.InfoTitle>
        <Property.Icon
          name={amenitiesShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info
        ></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={amenitiesShown}>
        {amenities.map((amenity) => (
          <Property.InfoItem key={amenity}>
            <Property.Text>{amenity}</Property.Text>
          </Property.InfoItem>
        ))}
      </Property.InfoContent>
    </Property.Info>
  );
};

/**
 * This is a React component that displays the address of a property and allows the user to toggle the
 * visibility of the address details.
 * @returns A React functional component that renders the address information of a property. It uses
 * state to toggle the visibility of the address information and displays it in a collapsible section
 * with a header and icon. The address information includes the address, city, county/sub-county,
 * street, and area.
 */
export const PropertyAddress = ({ address }) => {
  const [addressShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };
  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Address</Property.InfoTitle>
        <Property.Icon
          name={addressShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info
        ></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={addressShown}>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Address : </Property.Span>
            {address.address}
          </Property.Text>
          <Property.Text>
            <Property.Span>City : </Property.Span>
            {address.city}
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>County/Sub-County : </Property.Span>
            {address.county}
          </Property.Text>
          <Property.Text>
            <Property.Span>Street : </Property.Span>
            {address.street}
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Area : </Property.Span>
            {address.area}
          </Property.Text>
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>
  );
};
/**
 * This is a React component that displays a collapsible property description with a toggle button.
 * @returns A functional component named `PropertyDescription` is being returned. It takes a
 * `description` prop and renders a collapsible section with a header and content. The header displays
 * the title "Property Description" and an icon that toggles between up and down chevrons depending on
 * whether the content is shown or hidden. The content is initially hidden and can be shown or hidden
 * by clicking on the header.
 */
export const PropertyDescription = ({ description }) => {
  const [descriptionShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };
  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Property Description</Property.InfoTitle>
        <Property.Icon
          name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info
        ></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent block="true" contentShown={descriptionShown}>
        <Property.Text>{description}</Property.Text>
      </Property.InfoContent>
    </Property.Info>
  );
};
