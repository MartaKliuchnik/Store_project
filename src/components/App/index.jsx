import { Routes, Route } from "react-router-dom";
import BasketPage from "../../pages/BasketPage";
import CategoriesPage from "../../pages/CategoriesPage";
import CategoryPage from "../../pages/CategoryPage";
import ProductPage from "../../pages/ProductPage";
import NavMenu from "../NavMenu";


function App() {
  return (
    <>
      <NavMenu/>
    
    <Routes>
      <Route path="/" element={<CategoriesPage />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
    </>
  );
}

export default App;
