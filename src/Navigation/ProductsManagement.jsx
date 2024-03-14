import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function ProductsManagement({ initialProducts, setProducts }) {
  const [products, setLocalProducts] = useState(initialProducts);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
    quantity: 0,
  });

  const addProduct = () => {
    const updatedProducts = [
      ...products,
      { ...newProduct, id: products.length + 1 },
    ];
    setLocalProducts(updatedProducts);
    setProducts(updatedProducts);
    setNewProduct({ name: "", category: "", price: 0, stock: 0, quantity: 0 });
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setLocalProducts(updatedProducts);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2 style={{ justifyContent: "center" }}>Products Management</h2>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Add Product</h3>
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        value={newProduct.category}
        onChange={(e) =>
          setNewProduct({ ...newProduct, category: e.target.value })
        }
        placeholder="Category"
      />
      <input
        type="number"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
        }
        placeholder="Price"
      />
      <input
        type="number"
        value={newProduct.stock}
        onChange={(e) =>
          setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })
        }
        placeholder="Stock"
      />
      <input
        type="number"
        value={newProduct.quantity}
        onChange={(e) =>
          setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })
        }
        placeholder="Quantity"
      />
      <Button variant="primary" onClick={addProduct}>
        Add Product
      </Button>
    </div>
  );
}

export default ProductsManagement;
