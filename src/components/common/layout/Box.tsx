import React, { ReactNode } from "react";

type Props = {
  component?: "div" | "ul" | "li" | "span" | "p";
  children?: ReactNode;
};

const Box = ({ component: Component = "div", children }: Props) => {
  return <Component>{children}</Component>;
};

export default Box;
