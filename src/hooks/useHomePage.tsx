import { useEffect, useState } from 'react';
import axios from 'axios';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
};

export const useHomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          `${import.meta.env.VITE_APP_BACKEND_URL_BASE_1}/products`,
          { timeout: 10000 }
        );
        setProducts(response.data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
