import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

interface Order {
  id: string;
  customer: string;
  total: string;
  status: string;
}

const dummyOrders: Order[] = [
  { id: "ORD001", customer: "John Doe", total: "$120", status: "Delivered" },
  { id: "ORD002", customer: "Jane Smith", total: "$80", status: "Pending" },
];

const OrdersTable = () => (
  <Paper sx={{ marginTop: 3, padding: 2 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order ID</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Total</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dummyOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell>{order.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default OrdersTable;
