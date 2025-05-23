import React from 'react';
import { useNewsData, Artikel } from '../hooks/useNewsData';

const ArtikelList = () => {
  const { artikels, loading, error } = useNewsData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Daftar Artikel</h2>
    <ul>
        {artikels.map((artikel) => (
            <li key={artikel.article_id}>
            <a href={artikel.link} target="_blank" rel="noopener noreferrer">
                {artikel.title}
            </a>
            <p>By: {(artikel.creator ?? []) || 'Unknown author'}</p>
            <p>{artikel.description}</p>
            </li>
        ))}
        </ul>


    </div>
  );
};

export default ArtikelList;
