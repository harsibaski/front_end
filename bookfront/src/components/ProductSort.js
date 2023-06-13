import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchColor, setSearchColor] = useState('');
  const [searchYear, setSearchYear] = useState(0);
  const [searchPrice, setSearchPrice] = useState(0);

  const baseURL = "http://localhost:8080";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/iphone-models/sort`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      // Handle error, display error message, etc.
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/iphone-models/sort`, {
        params: {
          query: searchQuery,
          color: searchColor,
          year: searchYear,
          price: searchPrice
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      // Handle error, display error message, etc.
    }
  };

  return (
    <div>
      <h1>Product Search Page</h1>
      <input
        type="text"
        placeholder="Search Query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Color"
        value={searchColor}
        onChange={(e) => setSearchColor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={searchYear}
        onChange={(e) => setSearchYear(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={searchPrice}
        onChange={(e) => setSearchPrice(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.modelName}</h3>
          <p>Price: ${product.price}</p>
          <p>Year: {product.year}</p>
          <p>Color: {product.color}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSearch;
