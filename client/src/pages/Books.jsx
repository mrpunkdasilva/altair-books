import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Books = () => {
  const { reload } = window.location;
  const url = "http://localhost:8800";

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
        const res = await axios.get(`${url}/api/books`, config);
        console.log(res);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);


  const handleDelete = async ( id ) => {
    try {
      await axios.delete(`${url}/api/deleteBook/${id}`);
      reload();
    } catch(err) {
      console.log("ERRO EHANDLE DELETE ====> ", err);
    }
  }


  return (
    <div>
      <h1>Books</h1>

      <div className="books">
      {
        books.map(( book ) => {
          <div key={book.book_id} className="book">
            {
              book.cover && (
                <img 
                  src={ book.cover }
                  alt={ book.title } 
                />
              )
            }
            <h2>
              { book.title }
            </h2>

            <p>
              { book.description }
            </p>

            <span>
              { book.price }
            </span>

            <button
              className="delete"
              onClick={() => handleDelete(book.book_id)}
            >
              Delete
            </button>
            <button 
              className="update"
            >
              <Link to={`/update/${book.book_id}`}>
                Update
              </Link>
            </button>
          </div>
        })
      }
      </div>

      <button>
        <Link to="/add">
          Add new book
        </Link>
      </button>
    </div>
  );
};
