import React from "react";
import { Link, Router, Routes, Route } from "react-router-dom";
import ProductsManagement from "./Navigaton/ProductsManagement";
import OrdersManagement from "./Navigaton/OrdersManagement";
function NavBar() {
  return (
    <div>
      <nav>
        <div>
          <Link to="/dashboard/products">Products</Link>
          <Link to="/dashboard/orders">Orders</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/dashboard/products" element={<ProductsManagement />} />
        <Route path="/dashboard/orders" element={<OrdersManagement />} />
      </Routes>
    </div>
  );
}
export default NavBar;
