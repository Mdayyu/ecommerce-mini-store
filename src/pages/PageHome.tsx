import React, { useState } from 'react';
import { useHomePage } from '../hooks/useHomePage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
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
  Collapse,
  IconButton,
  Tooltip,
} from '@mui/material';


const PageHome: React.FC = () => {
  const { products, loading, error } = useHomePage();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
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
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🛍️ Product List
      </Typography>
      <Grid container spacing={4}>
        {products.map(product => {
          const isExpanded = expandedId === product.id;

          return (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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

                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {product.description}
                    </Typography>
                  </Collapse>

                  <IconButton onClick={() => toggleExpand(product.id)} size="small">
                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>

                  <Chip label={product.category} variant="outlined" size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PageHome;
