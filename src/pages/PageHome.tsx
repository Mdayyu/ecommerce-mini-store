import React, { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
};

const PageHome: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width={100} />
            <p>{product.description}</p>
            <small>Category: {product.category}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageHome;
