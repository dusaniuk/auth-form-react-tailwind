import { EyeClosedIcon } from "@ui/icons/EyeClosedIcon";
import { EyeIcon } from "@ui/icons/EyeIcon";
import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { InputHTMLAttributes, useState } from "react";

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
  const {
    type: inputType,
    error = false,
    valid = false,
    ...otherProps
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const classes = classNames(textInputVariants({ error, valid }));

  const IconComponent = showPassword ? EyeIcon : EyeClosedIcon;

  function handleTogglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="flex flex-col relative">
      <input
        type={showPassword ? "text" : inputType}
        className={classes}
        {...otherProps}
      />
      {inputType === "password" && (
        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400">
          <IconComponent
            className="w-6 h-6"
            onClick={handleTogglePasswordVisibility}
          />
        </div>
      )}
    </div>
  );
}
