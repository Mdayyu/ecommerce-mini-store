export interface MenuItem {
  label: string;
  icon: string;
  path: string;
}

export const MenuItems: MenuItem[] = [
  { label: "Dashboard", icon: "Dashboard", path: "/" },
  { label: "Products", icon: "Inventory", path: "/products" },
  { label: "Orders", icon: "ShoppingCart", path: "/orders" },
  { label: "Customers", icon: "People", path: "/customers" },
];
