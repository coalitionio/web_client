import React, {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { cva } from "class-variance-authority";
const selectStyle = cva("");
interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
  className?: string;
  // children?: ReactNode[];
  children: ReactNode;
  onChange: (value: any) => void;
}

const Select = ({
  className,
  theme,
  children,
  onChange,
  ...props
}: SelectProps) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  console.log(children);

  // useEffect(() => {
  //   console.log(dropdown);
  // }, [dropdown]);
  const handleChange = (event: any) => {
    console.log(event);

    onChange(event.target.value);
  };
  return (
    <div className="cursor-pointer relative">
      <label htmlFor="hidden" className="cursor-pointer">
        Select
      </label>
      <input
        aria-hidden="true"
        id="hidden"
        className="absolute opacity-0"
        type="checkbox"
        checked={dropdown}
        onChange={() => {
          setDropdown(!dropdown);
        }}
      />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === "object") {
          return React.cloneElement<any>(child, {
            onClick: handleChange as any,
            // selected: child.props.value === value,
          });
        }
        return child;
      })}
      {/* {children?.map((child) => child)} */}
    </div>
  );
};

export default Select;
