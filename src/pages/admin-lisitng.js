import React from "react";
import {
  HeaderContainer,
  DashboardContainer,
  AdminAllLisitngContainer,
  FooterContainer,
} from "../containers";
import { Section } from "../components";

/**
 * This is a React functional component that renders a dashboard container with a list of all listings
 * for an admin user.
 * @returns The `AdminListingList` component is being returned.
 */
const AdminListingList = () => {
  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="All Listing">
            <AdminAllLisitngContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default AdminListingList;
