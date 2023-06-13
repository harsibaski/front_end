import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbarl from './Navbarl';
import '../styles/upload.css';
import sam from "../Assests/upload.png"

const ProductUpload = () => {
  const [bookName, setBookName] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');

  const baseURL = "http://localhost:8080";

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!bookName || !price || !year || !color) {
      toast.error("Please fill in all the fields.");
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/api/book/products`, {
        bookName,
        price,
        year,
        color,
      });
      console.log(response.data);

      toast.success("Product uploaded successfully!", {
        onClose: () => window.location.reload(),
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload product. Please try again.");
    }
  };

  return (
    <>
      <Navbarl />
      <div>
      <div className="background-image">
        <img src={sam} alt="Background" />
      </div>
        <form className="form" onSubmit={handleUpload}>
          <p className="title">Upload</p>
          <p className="message">Upload and Sell.</p>
          <div className="flex">
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
              <span>Book Name</span>
            </label>

            <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span>Price</span>
            </label>
          </div>

          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <span>Year</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <span>Author</span>
          </label>
          
          <button type="submit" className="submit">
            Submit
          </button>
          <p className="signin">
            Want to see our Products<a href="/products">See Products</a>
          </p>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ProductUpload;
