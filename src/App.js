import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products/ProductList";
import Cart from "./components/Products/Cart";
import ProductDetail from "./components/Products/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
