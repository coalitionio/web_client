// assets
import { NavItemType } from "@/types/menu";
import {
  DashboardOutlined,
  CustomerServiceOutlined,
  AreaChartOutlined,
  TableOutlined,
  ForkOutlined,
  SnippetsOutlined,
  ShopOutlined,
	HomeOutlined,
	InboxOutlined
} from "@ant-design/icons";
import { Map, Payment } from "@mui/icons-material";

import {
	BuildingStorefront,
	ShoppingBag,
	BuildingsMini,
	Newspaper,
	CogSixTooth
} from "@medusajs/icons"

// icons
const icons = {
  DashboardOutlined,
  CustomerServiceOutlined,
  AreaChartOutlined,
  TableOutlined,
  ForkOutlined,
  SnippetsOutlined,
  ShopOutlined,
  Map,
  Payment,
	BuildingStorefront,
	ShoppingBag,
	BuildingsMini,
	Newspaper,
	CogSixTooth,
	InboxOutlined
};
export const admin: NavItemType = {
  id: "admin",
  title: "",
  type: "group",
  children: [
    {
      id: "home",
      title: "home",
      type: "item",
      url: "/",
      icon: icons.BuildingStorefront,
      breadcrumbs: false,
    },
    {
      id: "product",
      title: "product",
      type: "collapse",
      icon: icons.ShoppingBag,
      url: "/product",
      breadcrumbs: true,
      children: [
        {
          id: "product-list",
          title: "Danh mục sản phẩm",
          type: "item",
          url: "/product/list",
        },
        {
          id: "medicine-list",
          title: "Danh mục thuốc",
          type: "item",
          url: "/product/medicine",
        },
      ],
    },
    {
      id: "inventory",
      title: "inventory",
      type: "collapse",
      icon: icons.BuildingsMini,
      url: "/inventory",
			children: [
        {
          id: "inventory-import",
          title: "Nhập kho",
          type: "item",
          url: "/product/list",
        },
        {
          id: "inventory-export",
          title: "Xuất kho",
          type: "item",
          url: "/product/medicine",
        },
        {
          id: "inventory-check",
          title: "Kiểm kho",
          type: "item",
          url: "/product/medicine",
        },
      ],
     
    },
    {
      id: "report",
      title: "report",
      type: "item",
      icon: icons.Newspaper,
      url: "/report",
    },
    {
      id: "setting",
      title: "setting",
      type: "item",
      icon: icons.CogSixTooth,
      url: "/setting"
    },
  ],
};
