import { useEffect, useState } from 'react';
import axios from 'axios';

export type Artikel = {
  article_id: string;
  title: string;
  link: string;
  creator: string[];
  description: string;
};

export const useNewsData = () => {
  const [artikels, setArtikels] = useState<Artikel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtikels = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          import.meta.env.VITE_APP_BACKEND_URL_BASE_2,
          { timeout: 10000 }
        );

        setArtikels(response.data.results);
      } catch (err) {
        setError('Gagal mengambil data');
      } finally {
        setLoading(false);
      }
    };

    fetchArtikels();
  }, []);

  return { artikels, loading, error };
};
