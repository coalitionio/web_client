import { VariantProps, cva } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { deepEqual } from "@/utils/dataHelper";

const selectStyle = cva("relative", {
  variants: {
    variant: {},
    outline: {
      primary: "",
      secondary: "",
      accent: "",
    },
    background: {
      primary: "",
      secondary: "",
      accent: "",
    },
  },
});
type SelectStyleProps = VariantProps<typeof selectStyle>;
interface SelectTypeProps
  extends Omit<SelectStyleProps, "outline" | "background"> {
  theme?: `${NonNullable<SelectStyleProps["outline"]>}/${NonNullable<
    SelectStyleProps["background"]
  >}`;
}
interface SelectProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    SelectTypeProps {
  className?: string;
  // children?: ReactNode[];
  label?: string;
  children: ReactNode;
  multiple?: boolean;
  onChange: (value: T) => void;
}

const Select = <T,>({
  className,
  theme = "primary/secondary",
  children,
  label,
  multiple = true,
  onChange,
  ...props
}: SelectProps<string>) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  /**
   * T , T[]
   */
  const [valueDisplay, setValueDisplay] = useState<ReactNode | ReactNode[]>(
    multiple ? [] : null
  );
  const handleChange = (value: string, display: ReactNode) => {
    console.log(value);
    if (multiple && Array.isArray(valueDisplay)) {
      setValueDisplay([...valueDisplay, display]);
    } else {
      setValueDisplay(display);
    }
    onChange(value);
  };
  const renderValue = useMemo(() => {
    if (Array.isArray(valueDisplay)) {
      return valueDisplay.map((value) => valueDisplay);
    } else {
      return valueDisplay;
    }
  }, [valueDisplay]);
  return (
    <div className="cursor-pointer relative px-4 p-2 border-slate-800 border w-full">
      <label
        htmlFor="hidden"
        className="cursor-pointer relative z-[2] w-full h-full block">
        Select
        {renderValue || label}
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

      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: "100%" }}
            exit={{ opacity: 0, y: "50%" }}
            transition={{ duration: 0.2 }}
            className="py-2 px-6 absolute shadow-sm bottom-0 left-0 w-full">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement<any>(child, {
                  onClick: (value: any) =>
                    handleChange(value, child.props.children),
                  value: child.props.value,
                  // selected: child.props.value === value,
                });
              }
              return child;
            })}
          </motion.div>
        )}
      </AnimatePresence>
      {/* {children?.map((child) => child)} */}
      <fieldset className="w-full h-full absolute top-0 left-0">
        <legend className="ml-2 px-2 relative -top-1/2">App</legend>
      </fieldset>
    </div>
  );
};

export default Select;
