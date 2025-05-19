import { useCustomerSignUp } from "./hook/useCustomerSignUp";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const CustomerSignUp = () => {
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleSignUp,
  } = useCustomerSignUp();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* KIRI - Form Sign Up */}
      <Grid
        item
        xs={12}
        sm={6}
        component={Paper}
        elevation={6}
        square
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          component="form"
          onSubmit={handleSignUp}
          sx={{ width: "70%", maxWidth: 400 }}
        >
          <Typography component="h1" variant="h4" gutterBottom>
            Sign Up
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, bgcolor: "#fdd835", color: "black" }}
          >
            Sign Up
          </Button>
        </Box>
      </Grid>

      {/* KANAN - Gambar */}
      <Grid
        item
        xs={false}
        sm={6}
        sx={{
          backgroundImage: "url('https://source.unsplash.com/featured/?signup,people')",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[100]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
};

export default CustomerSignUp;
