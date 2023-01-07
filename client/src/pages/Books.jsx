import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Books = () => {
  const [books, setBooks] = useState([]);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books", config);
        
        setBooks(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div>Books</div>
  );
};
