/**
 * The function exports a React component that renders a change password form within a dashboard
 * container and a header container.
 * @returns The `Password` component is being returned, which renders the `HeaderContainer`, a
 * `Section` component with a blue background color, and a `DashboardContainer` component with the
 * title "Change Your Password" and the `ChangePasswordContainer` component as its child.
 */
import React from "react";

import {
  ChangePasswordContainer,
  DashboardContainer,
  HeaderContainer,
} from "../containers";
import { Section } from "../components";

const Password = () => {
  return (
    <>
      <HeaderContainer />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="Change Your Password">
            <ChangePasswordContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
    </>
  );
};

export default Password;
