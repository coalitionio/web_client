import React, { useEffect, useState } from "react";
import {} from "@medusajs/ui";
import useConfig from "../hooks/useConfig";
import { useRecoilState } from "recoil";
import { menuWithDrawerOpen } from "../store/selectors/app";
import { Outlet } from "react-router-dom";
import AxiosInterceptor from "../service/AxiosInterceptor";
import Footer from "./Footer";
import { Toolbar, useMediaQuery, useTheme } from "@mui/material";
// import Header from "../mantis/layout/MainLayout/Header";
// import Drawer from "../mantis/layout/MainLayout/Drawer"
import Drawer from "./drawer"
import Header from "./Header"
const MainPharmacyLayout = () => {
	const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down("xl"));

  const { container, miniDrawer } = useConfig();
  const [drawerOpen, setDrawerOpen] = useRecoilState(menuWithDrawerOpen);

  // drawer toggler
  // const [open, setOpen] = useState(!miniDrawer || drawerOpen);
  const [open, setOpen] = useState(!miniDrawer || drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    // dispatch(openDrawer({ drawerOpen: !open }));
    setDrawerOpen(!drawerOpen);
  };
	useEffect(() => {
    if (!miniDrawer) {
      setOpen(!matchDownLG);
      setDrawerOpen(!matchDownLG);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);
  useEffect(() => {
    // if (open !== drawerOpen) setOpen(drawerOpen);
  }, [drawerOpen]);

	return (
		<div className="flex w-full relative">
			<Header open={open} handleDrawerToggle={handleDrawerToggle} />
			<Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
			<div
				className="main-content"
				style={{ width: "calc(100% - 260px)", flexGrow: 1, padding: "16px" }}>
				<div className="toolbar">
					{/* You might want to replace this with your actual Toolbar component */}
					<Toolbar/>
				</div>
				<div
					className="flex flex-col relative min-h-screen"
					style={{ minHeight: "calc(100vh - 110px)" }}>
					{/* Breadcrumbs Component (if needed) */}
					{/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} /> */}
					<AxiosInterceptor>
						<Outlet />
					</AxiosInterceptor>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default MainPharmacyLayout;
