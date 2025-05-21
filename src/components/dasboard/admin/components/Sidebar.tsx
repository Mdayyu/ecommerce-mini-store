import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, Inventory, ShoppingCart, People } from "@mui/icons-material";
import { MenuItems } from "../constants/MenuItems";

const iconMap: Record<string, JSX.Element> = {
  Dashboard: <Dashboard />,
  Inventory: <Inventory />,
  ShoppingCart: <ShoppingCart />,
  People: <People />,
};

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <List>
        {MenuItems.map((item) => (
          <ListItem button key={item.label}>
            <ListItemIcon>{iconMap[item.icon]}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
