import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbarl from './Navbarl';
import '../styles/ProductDisplay.css';

import sam1 from "../Assests/edit.png";

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const baseURL = "http://localhost:8080";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/book/display`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        // Handle error, display error message, etc.
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/api/book/${id}`);
      // Remove the deleted product from the local state
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
      // Handle error, display error message, etc.
    }
  };

  // Calculate the indexes of the first and last products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbarl />
      
        <div className="background-image">
        <img src={sam1} alt="Background" />
      </div>
        <h1 className="product-display-title">Book Details Page</h1>
        <div className="product-grid">
          {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <h3 className="textm">{product.bookName}</h3>
                <p className="textm">Price: ${product.price}</p>
                <p className="textm">Year: {product.year}</p>
                <p className="textm">Author: {product.color}</p>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <Link to={`/edit/${product.id}`} className="edit-button">Edit</Link>
              </div>
            ))
          ) : (
            <p className="no-products-message">No products found.</p>
          )}
        </div>
        <div className="pagination">
          {products.length > productsPerPage && (
            <ul className="pagination-buttons">
              {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                  <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      
    </>
  );
};

export default ProductDisplay;
