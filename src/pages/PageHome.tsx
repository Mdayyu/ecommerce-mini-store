import React, { useState } from 'react';
import { useHomePage } from '../hooks/useHomePage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  CircularProgress,
  Alert,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';

const PageHome: React.FC = () => {
  const { products, loading, error } = useHomePage();
  const [openProductId, setOpenProductId] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setOpenProductId(id);
  };

  const handleClose = () => {
    setOpenProductId(null);
  };

  if (loading)
    return (
      <Container sx={{ textAlign: 'center', mt: 10 }}>
        <CircularProgress />
      </Container>
    );

  if (error)
    return (
      <Container sx={{ mt: 10 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        🛍️ Product List
      </Typography>
      <Grid container spacing={4}>
        {products.map(product => {
          const isOpen = openProductId === product.id;

          return (
            <Grid item xs={12} key={product.id}>
              <Card sx={{ height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: 'contain', height: 200, p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Tooltip title={product.title}>
                    <Typography
                      variant="h6"
                      noWrap
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {product.title}
                    </Typography>
                  </Tooltip>

                  <Typography variant="h6" color="green" sx={{ mb: 1 }}>
                    ${product.price}
                  </Typography>

                  <IconButton onClick={() => handleOpen(product.id)} size="small">
                    <ExpandMoreIcon />
                  </IconButton>

                  <Chip label={product.category} variant="outlined" size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>

              <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>{product.title}</DialogTitle>
                <DialogContent>
                  <DialogContentText>{product.description}</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autoFocus>Close</Button>
                </DialogActions>
              </Dialog>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PageHome;
