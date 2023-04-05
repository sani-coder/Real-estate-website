/**
 * The Home function renders a series of containers for a real estate website's homepage.
 * @returns The Home component is being returned, which includes several containers such as
 * HeaderContainer, FeaturedListingContainer, FeaturedAgentsContainer, HomeContactContainer, and
 * FooterContainer.
 */
import React from "react";
import {  //import all of the containers from "../containers".
  HeaderContainer,
  FeaturedListingContainer,
  FeaturedAgentsContainer,
  HomeContactContainer,
  FooterContainer,
} from "../containers";

const Home = () => { //creates an empty div with no children and sets its background color to true (the default).
  return (
    <>
      <HeaderContainer bg="true" source="/images/banners/banner6.jpg" />
      <FeaturedListingContainer />
      <FeaturedAgentsContainer />
      <HomeContactContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
