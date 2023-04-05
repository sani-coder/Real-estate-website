import React from "react";
import { Section } from "../components";
/**
 * The function UserProfile returns a JSX element that renders a header container and a dashboard
 * container with a profile container inside.
 * @returns The `UserProfile` component is being returned, which includes the `HeaderContainer`,
 * `DashboardContainer`, and `ProfileContainer` components. The `DashboardContainer` component has a
 * `title` prop set to "My Account" and contains the `ProfileContainer` component. The entire component
 * is wrapped in a `Section` component with a background color of "--bs-fade-info".
 */

import {
  HeaderContainer,
  DashboardContainer,
  ProfileContainer,
} from "../containers";

const UserProfile = () => {
  return (
    <>
      <HeaderContainer />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="My Account">
            <ProfileContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
    </>
  );
};

export default UserProfile;
