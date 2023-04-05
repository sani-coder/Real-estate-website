import React from "react";
import { Section } from "../components";

import {
  HeaderContainer,
  DashboardContainer,
  MessagesContainer,
  FooterContainer,
} from "../containers";
/**
 * The Messages function returns a JSX element that renders a header, a section with a dashboard
 * container for inbox messages, and a footer.
 * @returns The `Messages` component is being returned, which renders a header container, a section
 * container with a dashboard container and a messages container inside, and a footer container.
 */

const Messages = () => {
  return (
    <>
      <HeaderContainer />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="Inbox Messages">
            <MessagesContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Messages;
