import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Page404 from "./Components/page404";
import Carts from "./Pages/Carts";
import Products from "./Pages/Products";
import Protected from "./Components/Protected";
import ProductsDetailPage from "./Pages/ProductsDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Comp={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carts" element={<Protected Comp={Carts} />} />
          <Route path="/products" element={<Protected Comp={Products} />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/products/:id" element={<ProductsDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
