import { SignUpForm } from "@app/auth/SignUpForm";
import { StarIcon, type StarIconProps } from "@ui/icons/StarIcon";
import classNames from "classnames";

interface StarPositions {
  className: string;
  size: StarIconProps["size"];
}

const mobileStarsPosition: StarPositions[] = [
  { className: "top-[6%] left-[85%]", size: "xs" },
  { className: "top-[8%] left-[33%]", size: "xs" },
  { className: "top-[11%] left-[28%]", size: "sm" },
  { className: "top-[55%] left-[25%]", size: "md" },
  { className: "top-[60%] left-[70%]", size: "sm" },
  { className: "top-[90%] left-[15%]", size: "xs" },
];

const desktopStarsPosition: StarPositions[] = [
  { className: "top-[8%] left-[20%]", size: "lg" },
  { className: "top-[12%] left-[80%]", size: "sm" },
  { className: "top-[22%] left-[66%]", size: "2-lg" },
  { className: "top-[50%] left-[30%]", size: "lg" },
  { className: "top-[60%] left-[45%]", size: "sm" },
  { className: "top-[88%] left-[45%]", size: "md" },
  { className: "top-[90%] left-[70%]", size: "2-lg" },
  { className: "top-[92%] left-[80%]", size: "md" },
];

function App() {
  return (
    <div className="relative bg-gradient-to-b from-[#F4F9FF] to-[#E0EDFB] h-lvh">
      <div className="flex justify-center pt-24">
        <SignUpForm />
      </div>
      <div>
        {mobileStarsPosition.map((position, index) => (
          <StarIcon
            key={index}
            className={classNames("absolute", position.className)}
            size={position.size}
          />
        ))}
        {desktopStarsPosition.map((position, index) => (
          <StarIcon
            key={`xs-${index}`}
            className={classNames(
              "absolute",
              "hidden md:block",
              position.className
            )}
            size={position.size}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
