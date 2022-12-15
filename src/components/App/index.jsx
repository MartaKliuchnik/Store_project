import { Routes, Route } from "react-router-dom";
import BasketPage from "../../pages/BasketPage";
import CategoriesPage from "../../pages/CategoriesPage";
import CategoryPage from "../../pages/CategoryPage";
import ProductPage from "../../pages/ProductPage";
import Layout from "../Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<CategoriesPage />} />
          <Route path="categories/:id" element={<CategoryPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
