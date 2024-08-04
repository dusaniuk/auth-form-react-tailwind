import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { SVGAttributes } from "react";

function getRandomDelay() {
  return Math.random() * 2; // Random delay between 0 and 2 seconds
}

const iconVariants = cva("fill-current animate-blink", {
  variants: {
    size: {
      xs: "w-4 h-4",
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-10 h-10",
      "2-lg": "w-12 h-12",
    },
  },
});

export type StarIconProps = VariantProps<typeof iconVariants> &
  SVGAttributes<SVGSVGElement>;

export function StarIcon(props: StarIconProps) {
  const { className, size = "md", ...otherProps } = props;

  const delay = getRandomDelay();
  const style = {
    animationDelay: `${delay}s`,
  };

  const classes = classNames(iconVariants({ size }), className);

  return (
    <svg
      className={classes}
      style={style}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M13.532 0L17.1868 9.87711L27.0639 13.532L17.1868 17.1868L13.532 27.0639L9.87711 17.1868L0 13.532L9.87711 9.87711L13.532 0Z"
        fill="#CFE1F4"
      />
    </svg>
  );
}
