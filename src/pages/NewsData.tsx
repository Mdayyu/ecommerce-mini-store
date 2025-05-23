import React from 'react';
import {  useNewsData  } from '../hooks/useNewsData';
import ArtikelList from '../components/ArtikelList';

const NewsData =() => {
  const { artikels, loading, error } = useNewsData ();

  return (
    <div>
      <ArtikelList artikels={artikels} loading={loading} error={error} />
    </div>
  );
};

export default NewsData;
