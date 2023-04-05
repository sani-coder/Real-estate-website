/**
 * The above code exports a React component called FormWrapper that contains sub-components for Header,
 * Title, and Content.
 * @returns A React component called `FormWrapper` with three nested components: `Header`, `Title`, and
 * `Content`. The `FormWrapper` component takes in `children` and `restProps` as props and returns a
 * `Wrapper` component with the `restProps` passed as props and the `children` rendered inside it. The
 * `Header`, `Title`, and `Content` components also take
 */
import React from "react";

import { Wrapper, Header, Title, Content } from "./styles/formWrapper";

const FormWrapper = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

FormWrapper.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
FormWrapper.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

FormWrapper.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

export default FormWrapper;
