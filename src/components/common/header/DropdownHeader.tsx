import React from "react";
import { Image } from "@ui/common/image";

type Props = {};

const DropdownHeader = (props: Props) => {
  return (
    <header className="h-header-sm flex justify-between bg-red-400 absolute inset-x-0 p-1">
      <Image
        url="https://api.dicebear.com/6.x/adventurer/svg?seed=Scooter"
        className=""
        ratio="square"></Image>
    </header>
  );
};

export default DropdownHeader;
