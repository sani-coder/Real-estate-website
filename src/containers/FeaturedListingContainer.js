import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../components";
import { ListingItemContainer } from "./index";
import { getFeaturedList } from "../redux/actions/propertiesAction";
/**
 * This is a React functional component that displays a list of featured properties and a button to
 * view more listings.
 * @returns The `FeaturedListingContainer` component is being returned.
 */

const FeaturedListingContainer = () => {
  const dispatch = useDispatch();

  const featuredList = useSelector((state) => state.featuredProperty);

  const { featured: featuredProperties } = featuredList;
/* `useEffect` is a React hook that allows us to perform side effects in functional components. In this
case, it is dispatching an action `getFeaturedList()` to fetch the featured property list from the
server. The second argument `[dispatch]` is an array of dependencies that tells React when to re-run
the effect. In this case, it will re-run the effect only when the `dispatch` function changes. */

  useEffect(() => {
    dispatch(getFeaturedList());
  }, [dispatch]);

  return (
    <Section bgColor="--bs-light">
      <Section.InnerContainer>
        <Section.Header>
          <Section.Title>Our Featured Listing</Section.Title>
        </Section.Header>
        <Section.Content>
          {featuredProperties.map((featured) => (
            <ListingItemContainer key={featured.id} featured={featured} />
          ))}
        </Section.Content>
        <Section.Footer>
          <Section.Button>More Listing</Section.Button>
        </Section.Footer>
      </Section.InnerContainer>
    </Section>
  );
};

export default FeaturedListingContainer;
