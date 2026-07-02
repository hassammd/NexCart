import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
