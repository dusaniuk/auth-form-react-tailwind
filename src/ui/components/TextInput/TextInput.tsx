import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { InputHTMLAttributes } from "react";

const textInputVariants = cva(
  "border border-solid rounded-[10px] py-3 px-5 max-h-12 focus:outline-none transition-colors",
  {
    variants: {
      valid: {
        true: "text-success border-success",
        false: "",
      },
      error: {
        true: "text-error border-error",
        false: "",
      },
    },
    compoundVariants: [
      {
        error: false,
        valid: false,
        className: "focus:border-[#6F91BC]",
      },
    ],
  }
);

export type TextInputVariantProps = VariantProps<typeof textInputVariants>;

export type TextInputProps = TextInputVariantProps &
  InputHTMLAttributes<HTMLInputElement>;

export function TextInput(props: TextInputProps) {
  const { error = false, valid = false, ...otherProps } = props;

  const classes = classNames(textInputVariants({ error, valid }));

  return <input className={classes} {...otherProps} />;
}
