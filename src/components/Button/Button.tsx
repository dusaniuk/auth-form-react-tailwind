import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";

const buttonVariants = cva(
  "py-3 px-6 rounded-4xl text-white font-bold max-w-60",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-[#70C3FF] to-[#4B65FF]",
        secondary: "bg-[#F2F2F2] text-[#4B65FF]",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonProps = PropsWithChildren<ButtonVariantProps> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const {
    className,
    children,
    fullWidth = false,
    variant = "primary",
    ...otherProps
  } = props;

  const classes = classNames(buttonVariants({ fullWidth, variant }), className);

  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
}
