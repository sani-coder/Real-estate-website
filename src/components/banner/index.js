/**
 * This is a React component called Banner that takes in children, background image, and source image
 * as props and returns a Main component with those props.
 * @returns The `Banner` component is being returned. It takes in props such as `children`, `bg`, and
 * `source`, and renders a `Main` component with those props passed as attributes. The `Main` component
 * is styled with CSS using the `styles/banner` module.
 */
import React from "react";
import { Main } from "./styles/banner";

const Banner = ({ children, bg, source, ...restProps }) => {
  return (
    <Main {...restProps} bg={bg} source={source}>
      {children}
    </Main>
  );
};

export default Banner;
