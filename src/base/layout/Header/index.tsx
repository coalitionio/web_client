import { ReactNode, useMemo } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, useMediaQuery, AppBarProps } from "@mui/material";

// project import
import AppBarStyled from "./AppBarStyled";
import HeaderContent from "./HeaderContent";
import IconButton from '@/base/components/@extended/IconButton';

// assets
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { ArrowLeftMini, ArrowRightMini } from "@medusajs/icons";
import { useLocation } from "react-router-dom";

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

interface Props {
  open: boolean;
  handleDrawerToggle?: () => void;
}

const Header = ({ open, handleDrawerToggle }: Props) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));
	const location = useLocation()
	const canGoForward = () => window.history.length > window.history.state.index + 1;
  const canGoBackward = () => window.history.state.index > 0;
	const handleGoForward = () => {
      window.history.go(1);    
  };

  const handleGoBackward = () => {
      window.history.go(-1);
  };
  // header content
  const headerContent = useMemo(() => <HeaderContent />, []);

  const iconBackColorOpen =
    theme.palette.mode === "dark" ? "grey.200" : "grey.300";
  const iconBackColor =
    theme.palette.mode === "dark" ? "background.default" : "grey.100";

  // common header
  const mainHeader: ReactNode = (
    <Toolbar>
     <div className="flex  gap-4 ml-4 w-full">
				{/* <IconButton
					aria-label="open drawer"
					onClick={handleDrawerToggle}
					edge="start"
					color="secondary"
					variant="light"
					sx={{
						color: "text.primary",
						bgcolor: open ? iconBackColorOpen : iconBackColor,
						ml: { xs: 0, lg: -2 },
					}}>
					{!open ? <MenuUnfoldOutlined rev={{}} /> : <MenuFoldOutlined rev={{}} />}
				</IconButton> */}
				<IconButton
					aria-label="back"
					onClick={handleGoBackward}
					edge="start"
					color="secondary"
					variant="light"
					className="hover:bg-transparent text-black disabled:text-gray-600 disabled:bg-transparent"
					title="backward"
					// disabled={!(window.history.state.index > 0)}

					sx={{
						// color: "text.primary",
						bgcolor: open ? iconBackColorOpen : iconBackColor,
						ml: { xs: 0, lg: -2 },
					}}>
					<ArrowLeftMini/>
				</IconButton>
				<IconButton
					aria-label="forward"
					onClick={handleGoForward}
					edge="start"
					color="secondary"
					variant="light"
					title="forward"
					className="hover:bg-transparent text-black disabled:text-gray-600 disabled:bg-transparent"
					// disabled={!canGoForward()}
					sx={{
						// color: "text.primary",
						bgcolor: open ? iconBackColorOpen : iconBackColor,
						ml: { xs: 0, lg: -2 },
					}}>
					<ArrowRightMini/>
				</IconButton>
			</div>
      {headerContent}
    </Toolbar>
  );

  // app-bar params
  const appBar: AppBarProps = {
    position: "fixed",
    color: "inherit",
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      boxShadow: theme.customShadows.z1
    },
  };

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;
