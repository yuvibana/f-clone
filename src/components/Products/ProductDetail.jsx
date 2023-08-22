import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  console.log('id', id);

  // Fetch product details based on the ID and display them

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}