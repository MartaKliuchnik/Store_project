import { Routes, Route } from "react-router-dom";
import BasketPage from "../../pages/BasketPage";
import CategoriesPage from "../../pages/CategoriesPage";
import CategoryPage from "../../pages/CategoryPage";
import ProductPage from "../../pages/ProductPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<CategoriesPage />} />
      <Route path="categories/:id_categ" element={<CategoryPage />} />
      <Route path="product/:id_prod" element={<ProductPage />} />
      <Route path="basket" element={<BasketPage />} />
    </Routes>
  );
}

export default App;
