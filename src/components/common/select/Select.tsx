import React, {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { VariantProps, cva } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
const selectStyle = cva("relative",{
  variants:{
    variant : {
      
    },
    outline : {
      primary : "",
      secondary : "",
      accent : ""
    },
    background : {
      primary: "",
      secondary: "",
      accent : ""
    }
  }
});
type SelectStyleProps =VariantProps<typeof selectStyle>;
interface SelectTypeProps extends Omit<SelectStyleProps, "outline" | "background" >{
    theme : `${NonNullable<SelectStyleProps["outline"]>}/${NonNullable<SelectStyleProps['background']>}`
}
interface SelectProps<T> extends HTMLAttributes<HTMLDivElement>, SelectTypeProps{
  className?: string;
  // children?: ReactNode[];
  children: ReactNode;
  onChange: (value: any) => void;
}

const Select= <T,>({
  className,
  theme,
  children,
  onChange,
  ...props
}: SelectProps<T>) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const handleChange = (event: any) => {
    console.log(event);

    onChange(event.target.value);
  };

  return (
    <div className="cursor-pointer relative px-4 p-2 border-slate-800 border w-full">
        <label htmlFor="hidden" className="cursor-pointer relative z-[2]">
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

          <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0, y: '50%' }}
            animate={{ opacity: 1, y: '100%' }}
            exit={{ opacity: 0, y: '50%' }}
            transition={{ duration: 0.2 }}
            className="py-2 px-6 absolute shadow-sm bottom-0 left-0 w-full">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement<any>(child, {
                  onClick: handleChange as any,
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
