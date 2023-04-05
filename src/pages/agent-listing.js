import React from "react";
import { Section } from "../components";
import {
  HeaderContainer,
  DashboardContainer,
  AdminAgentListing,
  FooterContainer,
} from "../containers";

/**
 * The AgentListing function returns a JSX component that renders a dashboard container with an admin
 * agent listing.
 * @returns The `AgentListing` component is being returned, which includes a `HeaderContainer`, a
 * `Section` component with a background color of `--bs-fade-info`, a `DashboardContainer` with a title
 * of "My Listing", and an `AdminAgentListing` component. Finally, a `FooterContainer` is also
 * included.
 */
const AgentListing = () => {
  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="My Listing">
            <AdminAgentListing />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default AgentListing;
