import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbarl from './Navbarl';
import sam3 from "../Assests/new.png"


const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [bookName, setBookName] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');

  const baseURL = "http://localhost:8080";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/iphone-models/${id}`);
        setProduct(response.data);
        setBookName(response.data.bookName);
        setPrice(response.data.price);
        setYear(response.data.year);
        setColor(response.data.author);
      } catch (error) {
        console.log(error);
        // Handle error, display error message, etc.
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedProduct = {
        id: product.id,
        bookName,
        price,
        year,
        color,
      };

      await axios.put(`${baseURL}/api/book/${id}`, updatedProduct);
      // Redirect to the product display page or perform other actions on successful update
      window.location.href = "/products";
    } catch (error) {
      console.log(error);
      // Handle error, display error message, etc.
    }
  };

  return (
    <>
      <Navbarl />
      <div className="background-image">
        <img src={sam3} alt="Background" />
      </div>
      <div className="edit-product-container">
        <form className="form">
          <p className="title">Edit Book</p>
          <div className="field">
            <label htmlFor="model-name">Book Name:</label>
            <input
              type="text"
              id="model-name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="color">Author:</label>
            <input
              type="text"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="input"
              required
            />
          </div>

          <button className="submit" onClick={handleUpdate}>
            Update
          </button>
          <p className="signin">
            Go to Products<a href="/products">See Products</a>
          </p>
        
        </form>
      </div>
    </>
  );
};

export default EditProduct;
