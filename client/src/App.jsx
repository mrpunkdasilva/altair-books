import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/styles.css';
import "./App.css";

import { Books } from "./pages/Books";
import { Add } from "./pages/Add";
import { Update } from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Books />} 
        />

        <Route 
          path="/add" 
          element={<Add />} 
        />

        <Route 
          path="/update/:id" 
          element={<Update />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
