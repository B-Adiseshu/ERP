import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";

function OrdersManagement({ updateOrdersCount }) {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderId: "ORD001",
      customerName: "John Doe",
      orderDate: "2024-03-15",
      status: "Pending",
    },
    {
      id: 2,
      orderId: "ORD002",
      customerName: "Jane Smith",
      orderDate: "2024-03-16",
      status: "Shipped",
    },
    {
      id: 3,
      orderId: "ORD003",
      customerName: "william Smith",
      orderDate: "2024-01-16",
      status: "pending",
    },
    {
      id: 4,
      orderId: "ORD004",
      customerName: "Kaisen",
      orderDate: "2024-01-10",
      status: "pending",
    },
  ]);
  useEffect(() => {
    updateOrdersCount(orders.length);
  }, [orders, updateOrdersCount]);

  // State to manage modal for order details
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to handle opening modal and setting selected order
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowDetailsModal(true);
  };

  // Function to handle closing modal
  const handleCloseDetailsModal = () => {
    setSelectedOrder(null);
    setShowDetailsModal(false);
  };

  // Function to update order status
  const handleUpdateStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) => {
      if (order.orderId === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders); // Update the state with the new array of orders
  };

  // Function to delete an order
  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h2>Orders Management</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <Button
                  variant="info"
                  className="mr-2"
                  onClick={() => handleViewDetails(order)}
                >
                  View Details
                </Button>
                <Button
                  variant="success"
                  className="mr-2"
                  onClick={() => handleUpdateStatus(order.orderId, "Shipped")}
                >
                  Update Status
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteOrder(order.orderId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for displaying order details */}
      <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <div>
              <p>Order ID: {selectedOrder.orderId}</p>
              <p>Customer Name: {selectedOrder.customerName}</p>
              <p>Order Date: {selectedOrder.orderDate}</p>
              <p>Status: {selectedOrder.status}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetailsModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrdersManagement;
