import { useCustomerLogin } from "./hook/useCustomerLogin";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const CustomerLogin = () => {
 const {
  name,
  password,
  confirmPassword,
  setName,
  setPassword,
  setConfirmPassword,
  handleRegister, 
} = useCustomerLogin();


  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* KIRI - Form */}
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
          onSubmit={handleRegister}
          sx={{ width: "70%", maxWidth: 400 }}
        >
          <Typography component="h1" variant="h4" gutterBottom>
            Register
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
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, bgcolor: "#fdd835", color: "black" }}
          >
            Register
          </Button>
        </Box>
      </Grid>

      {/* KANAN - Gambar */}
      <Grid
        item
        xs={false}
        sm={6}
        sx={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091870622-2f56c8de8f45')",
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

export default CustomerLogin;
