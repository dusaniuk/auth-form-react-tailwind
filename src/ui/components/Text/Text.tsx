import { ElementType, PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";

const headerVariants = cva("", {
  variants: {
    size: {
      h1: "text-[1.75rem]/[1.75rem] font-bold",
      label: "text-[0.8125rem]/[1.125rem]",
    },
    color: {
      primary: "text-primary",
      success: "text-success/70",
      error: "text-error",
    },
  },
});

export type HeaderVariantProps = VariantProps<typeof headerVariants>;

export type TextProps = PropsWithChildren<HeaderVariantProps> & {
  component?: ElementType;
};

export function Text(props: TextProps) {
  const {
    component: Component = "div",
    children,
    color = "primary",
    size = "label",
  } = props;

  const classes = classNames(headerVariants({ color, size }));

  return <Component className={classes}>{children}</Component>;
}
