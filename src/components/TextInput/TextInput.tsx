import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { InputHTMLAttributes } from "react";

const textInputVariants = cva(
  "border border-solid rounded-[10px] py-3 px-5 max-h-12 focus:border-[#6F91BC] focus:outline-none transition-colors",
  {
    variants: {},
  }
);

export type TextInputVariantProps = VariantProps<typeof textInputVariants>;

export type TextInputProps = TextInputVariantProps &
  Pick<InputHTMLAttributes<HTMLInputElement>, "type" | "placeholder">;

export function TextInput(props: TextInputProps) {
  const { type = "text", ...otherProps } = props;

  const classes = classNames(textInputVariants({}));

  return <input type={type} className={classes} {...otherProps} />;
}
