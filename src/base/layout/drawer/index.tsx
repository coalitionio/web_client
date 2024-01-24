
// import DrawerContent from '@/base/mantis/layout/MainLayout/Drawer/DrawerContent';
// import DrawerHeader from '@/base/mantis/layout/MainLayout/Drawer/DrawerHeader';
import MiniDrawerStyled from '@/base/mantis/layout/MainLayout/Drawer/MiniDrawerStyled';
import { useMediaQuery, useTheme } from '@mui/material';
import React, { useMemo } from 'react'
import DrawerContent from './DrawerContent';
import DrawerHeader from './DrawerHeader';

interface Props {
  open: boolean;
  window?: () => Window;
  handleDrawerToggle?: () => void;
}

const MainDrawer = ({ open, handleDrawerToggle, window }: Props) => {
	const theme = useTheme();
  
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));
  // responsive drawer container
  const container =
    window !== undefined ? () => window().document.body : undefined;

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} onDrawerToggle={handleDrawerToggle} />, [open]);
	return (
		<nav
		className="flex-shrink-0 md:flex-shrink md:z-1300"
		aria-label="mailbox folders">
		{!matchDownMD ? (
			<MiniDrawerStyled variant="permanent" open={open}>
				{drawerHeader}
				{drawerContent}
			</MiniDrawerStyled>
		) : (
		<>
		{/* TODO responsive drawer */}
		</>
		)} 
	</nav>
	)
}

export default MainDrawer
