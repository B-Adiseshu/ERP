import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardContent from "./Navigation/DashboardContent";
import ProductsManagement from "./Navigation/ProductsManagement";
import OrdersManagement from "./Navigation/OrdersManagement";
import OrdersCalendar from "./Navigation/OrdersCalendar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      category: "Category 1",
      price: 10.99,
      stock: 20,
      quantity: 0,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category 2",
      price: 15.99,
      stock: 15,
      quantity: 0,
    },
  ]);

  const [ordersCount, setOrdersCount] = useState(4);
  const [orders, setOrders] = useState([]);

  const updateOrdersCount = (count) => {
    setOrdersCount(count);
  };

  return (
    <div className="main">
      <div className="navigation">
        <Button variant="primary" className="left">
          No of products: {products.length}
        </Button>
        <Button variant="primary" className="right">
          No of orders: {ordersCount}
        </Button>

        <div className="buttons">
          <Button variant="primary" href="/">
            Dashboard
          </Button>
          <Button variant="primary" href="/products">
            Manage Products
          </Button>
          <Button variant="primary" href="/orders">
            Manage Orders
          </Button>
        </div>
        <Button variant="primary" href="/orders-calendar" className="cal">
          Orderscalendar
        </Button>
      </div>

      <Routes>
        <Route path="/" element={<DashboardContent />} />
        <Route
          path="/products"
          element={
            <ProductsManagement
              initialProducts={products}
              setProducts={setProducts}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <OrdersManagement
              updateOrdersCount={updateOrdersCount}
              setOrders={setOrders}
            />
          }
        />
        <Route
          path="/orders-calendar"
          element={<OrdersCalendar orders={orders} />}
        />
      </Routes>
    </div>
  );
}

export default App;
