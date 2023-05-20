import React, { HTMLAttributes, MouseEvent, ReactNode } from "react";

export type DropdownListOptions = {
  label: ReactNode;
  action: (event: MouseEvent & any) => void;
};

export interface DropdownListProps extends HTMLAttributes<HTMLUListElement> {
  options: DropdownListOptions[];
}

const DropdownList = ({ className, options, ...props }: DropdownListProps) => {
  return (
    <ul className={` ${className} `} {...props}>
      {options.map(({ action, label }) => (
        <li onClick={action}>{label}</li>
      ))}
    </ul>
  );
};

export default DropdownList;
