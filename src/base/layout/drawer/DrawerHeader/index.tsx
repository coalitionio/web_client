// material-ui
import { useTheme } from "@mui/material/styles";

// project import
import { IconButton, Text } from "@medusajs/ui";
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import { BarsThree } from "@medusajs/icons";
// ==============================|| DRAWER HEADER ||============================== //

interface Props {
  open: boolean;
  onDrawerToggle?: () => void;
}

const DrawerHeader = ({ open, onDrawerToggle }: Props) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <div className={`${"flex justify-between w-full mt-8"} ${open? "px-5" : "px-3"}`}>
        
          <>
           {open &&  <div>
              <Text className="text-[#6B7280] font-semibold text-xs">
                Nhà thuốc
              </Text>
              <Text className="text-sm font-semibold">Example</Text>
            </div>}
            <IconButton
              onClick={() => onDrawerToggle?.()}
              className="hover:border-none border-none bg-transparent outline-none focus:border-none focus:outline-none">
              <BarsThree />
            </IconButton>
          </>
      </div>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
