import React, { HTMLAttributes, ReactNode } from "react";

export interface SelectItemProps<T>
  extends Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
  value: T;
  children: ReactNode;
  onClick?: (value: T) => void;
}

const SelectItem = <T,>({
  onClick,
  value,
  children,
  className,
  ...props
}: SelectItemProps<T>) => {
  return (
    <li className={` ${className}`} {...props} onClick={() => onClick?.(value)}>
      {children}
    </li>
  );
};

export default SelectItem;
