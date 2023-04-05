import React from "react";
import { SideNavigation } from "../components";

import links from "../constants/routes/nav-links";
/**
 * This is a functional component that renders a side navigation container with links and a cross icon.
 * @returns A React component that renders a side navigation menu with links and a cross icon to close
 * it. The component takes in props such as `sideNavShown`, `setSideNavShown`, `sideNavHidden`, and
 * `setSideNavHidden` to control the visibility of the side navigation. It also maps over an array of
 * `links` to render each link as a list item with an anchor tag
 */

const SideNavigationContainer = ({
  sideNavShown,
  setSideNavShown,
  sideNavHidden,
  setSideNavHidden,
}) => {
  return (
    <SideNavigation shown={sideNavShown} hidden={sideNavHidden}>
      <SideNavigation.Container>
        <SideNavigation.Cross>
          <SideNavigation.Icon
            name="fas fa-times"
            onClick={() => {
              setSideNavHidden(true);
              setSideNavShown(false);
            }}
          />
        </SideNavigation.Cross>
        <SideNavigation.Header>
          <SideNavigation.Title>Real Home</SideNavigation.Title>
          <SideNavigation.Text>The Home You Deserve</SideNavigation.Text>
        </SideNavigation.Header>

        <SideNavigation.Links>
          <SideNavigation.List>
            {links.map((link) => (
              <SideNavigation.ListItem key={link.to}>
                <SideNavigation.Anchor to={link.to}>
                  {link.name}
                </SideNavigation.Anchor>
              </SideNavigation.ListItem>
            ))}
            <SideNavigation.ListItem>
              <SideNavigation.Anchor to="/add-listing">
                Add Listing
              </SideNavigation.Anchor>
            </SideNavigation.ListItem>
          </SideNavigation.List>
        </SideNavigation.Links>
      </SideNavigation.Container>
    </SideNavigation>
  );
};

export default SideNavigationContainer;
