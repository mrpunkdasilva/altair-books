import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const Add = () => {
  const navigate = useNavigate();

  const [ book, setBook ] = useState({
    title:"",
    description: "",
    price: null,
    cover: ""
  });


  const handleChangeValues = (e) => {
    let nameTarget = e.target.name;
    let valueTarget = e.target.value;

    setBook(( prev ) => ({ 
      ...prev, 
      [nameTarget]: valueTarget,
    }));
  };

  const handleClick = async () => {
    e.preventDefault();

    try {
      await axios.post(`${url}/api/addBook`, book);
      navigate("/");
    } catch (err) {
      console.log("ERRO HANDLE CLICK ====> ", err);      
    }
  };
 

  console.log("BOOK ====> ", book);

  return (
    <div className="form">
      <h1>Add Book</h1>

      <input 
        type="text" 
        id="title" 
        name="title" 
        placeholder="Title"
        onChange={handleChangeValues}
      />

      <input 
        type="text" 
        id="description" 
        name="description" 
        placeholder="Description"
        onChange={handleChangeValues}
      />

      <input 
        type="number" 
        id="price" 
        name="price" 
        placeholder="Price"
        onChange={handleChangeValues}
      />

      <input 
        type="text" 
        id="cover" 
        name="cover" 
        placeholder="cover"
        onChange={handleChangeValues}
      />

      <button
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};
