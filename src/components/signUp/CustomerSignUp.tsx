import React from "react";
import { useCustomerSignUp } from "./hook/useCustomerSignUp";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const CustomerSignUp: React.FC = () => {
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
      {/* Form Sign Up */}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
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

      {/* Gambar di kanan */}
      <Grid
        item
        xs={false}
        sm={6}
        sx={{
          backgroundImage: `url('https://media.istockphoto.com/id/1447845897/photo/penjual-online-wanita-dan-pria-asia-menyiapkan-kotak-parsel-dan-memeriksa-pesanan.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
};

export default CustomerSignUp;
