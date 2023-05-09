import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const textStyle = cva([], {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-md",
      large: "text-lg",
    },
    color: {
      default: "text-[black]",
      primary: "text-[red]",
      secondary: "text-[green]",
    },
  },
});
type TextStyleProps = VariantProps<typeof textStyle>;
export interface TextProps extends Omit<TextStyleProps, "size" | "color"> {
  variant: `${NonNullable<TextStyleProps["size"]>}/${NonNullable<
    TextStyleProps["color"]
  >}`;
  children?: ReactNode;
}
export default function Text({
  variant,
  children,
  ...props
}: TextProps) {
  const [size, color] = variant.split("/") as [
    TextStyleProps["size"],
    TextStyleProps["color"]
  ];
  return (
    <span
      className={textStyle({
        color,
        size,
      })}
      {...props}
    >
      {children}
    </span>
  );
}
