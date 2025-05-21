import { Grid, Paper, Typography } from "@mui/material";

interface CardData {
  label: string;
  value: string;
}

const cards: CardData[] = [
  { label: "Total Sales", value: "$12,300" },
  { label: "Orders", value: "235" },
  { label: "Customers", value: "120" },
  { label: "Products", value: "58" },
];

const DashboardCards = () => (
  <Grid container spacing={2}>
    {cards.map((card, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">{card.label}</Typography>
          <Typography variant="h5">{card.value}</Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
);

export default DashboardCards;
