import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import OrdersTable from "../components/OrdersTable";

const AdminDashboard = () => (
  <Box sx={{ display: "flex" }}>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
      <Navbar />
      <Container>
        <DashboardCards />
        <OrdersTable />
      </Container>
    </Box>
  </Box>
);

export default AdminDashboard;
