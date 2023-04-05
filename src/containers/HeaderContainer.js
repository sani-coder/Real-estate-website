import React, { useState } from "react";
import links from "../constants/routes/nav-links";
import { HeaderWrapper, Banner, Jumbotron } from "../components";

import { AdvancedSearchContainer, SideNavigationContainer } from "./index";
/**
 * The function is a React component that handles the state of a header container, including showing
 * and hiding a side navigation and changing the background color and position based on the user's
 * scroll position.
 */

const HeaderContainer = ({ bg, source }) => {
  const [sideNavShown, setSideNavShown] = useState(false);
  const [sideNavHidden, setSideNavHidden] = useState(true);
  const [fixed, setFixed] = useState(false);

  const changeBackgroundColorAndPosition = () => {
    if (window.pageYOffset > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

 /* Adding an event listener to the window object that listens for the "scroll" event and calls the
 `changeBackgroundColorAndPosition` function when the event is triggered. This function changes the
 state of the `fixed` variable based on the user's scroll position, which in turn changes the
 background color and position of the header container. */
  window.addEventListener("scroll", changeBackgroundColorAndPosition);

  const handleSideNavigation = () => {
    setSideNavHidden((prevState) => !prevState);
    setSideNavShown((prevState) => !prevState);
  };
  return (
    <Banner bg={bg} source={source}>
      <HeaderWrapper bg={bg} fixed={fixed}>
        <HeaderWrapper.Container>
          <HeaderWrapper.Title bg={bg}>
            <HeaderWrapper.Link bg={bg} fixed={fixed} to="/">
              Real Estate
            </HeaderWrapper.Link>
          </HeaderWrapper.Title>
          <HeaderWrapper.LinksContainer>
            <HeaderWrapper.List links="links">
              {links.map((link) => (
                <HeaderWrapper.Item key={link.to}>
                  <HeaderWrapper.Anchor bg={bg} fixed={fixed} to={`${link.to}`}>
                    {link.name}
                  </HeaderWrapper.Anchor>
                </HeaderWrapper.Item>
              ))}
            </HeaderWrapper.List>
            <HeaderWrapper.List>
              <HeaderWrapper.Item>
                <HeaderWrapper.Anchor to="/add-listing" special="true">
                  Add Listing
                </HeaderWrapper.Anchor>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>
            <HeaderWrapper.List side="side">
              <HeaderWrapper.Item>
                <HeaderWrapper.Button onClick={handleSideNavigation}>
                  <HeaderWrapper.Icon name="fa fa-bars" />
                </HeaderWrapper.Button>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>
          </HeaderWrapper.LinksContainer>
        </HeaderWrapper.Container>
      </HeaderWrapper>
      {bg === "true" && (
        <Jumbotron>
          <Jumbotron.Left>
            <Jumbotron.Title>Find The Place You Deserve With Us</Jumbotron.Title>
            <Jumbotron.Text>
            “Owning a home is a keystone of wealth… both financial affluence and emotional security”.
            </Jumbotron.Text>
          </Jumbotron.Left>
          <Jumbotron.Right>
            <AdvancedSearchContainer />
          </Jumbotron.Right>
        </Jumbotron>
      )}
      <SideNavigationContainer
        sideNavShown={sideNavShown}
        sideNavHidden={sideNavHidden}
        setSideNavHidden={setSideNavHidden}
        setSideNavShown={setSideNavShown}
      />
    </Banner>
  );
};

export default HeaderContainer;
