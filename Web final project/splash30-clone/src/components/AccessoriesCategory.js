import React, { useEffect, useState } from "react";
import "./AccessoriesCategory.css";

const AccessoriesCategory = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // State to hold product being edited
  const [form, setForm] = useState({
    name: "",
    price: "",
    salePrice: "",
    image: "",
  });

  useEffect(() => {
    // Fetch products from backend API
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        // Filter products for the Accessories category and limit to 5
        const filteredProducts = data
          .filter((product) => product.category === "Fitness Accessories")
          .slice(0, 5); // Limit to 5 products
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching accessories category products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart`);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setProducts(products.filter((product) => product._id !== productId));
        alert("Product deleted successfully!");
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setForm({
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.image,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${editProduct._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        const updatedProduct = await response.json();
        setProducts(
          products.map((product) =>
            product._id === updatedProduct._id ? updatedProduct : product
          )
        );
        setEditProduct(null);
        setForm({ name: "", price: "", salePrice: "", image: "" });
        alert("Product updated successfully!");
      } else {
        alert("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, category: "Fitness Accessories" }),
      });

      if (response.ok) {
        const newProduct = await response.json();
        setProducts([...products, newProduct].slice(0, 5)); // Ensure only 5 items remain
        setForm({ name: "", price: "", salePrice: "", image: "" });
        alert("Product added successfully!");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="accessories-category">
      {/* Banner Section */}
      <div className="accessories-header">
        <img
          src="https://splash30.com/cdn/shop/files/3_84ff9bfa-0d77-44f3-b15e-0f5f43ac6585_1920x.jpg?v=1732854015"
          alt="Accessories Category"
          className="accessories-banner"
          loading="lazy"
        />
      </div>

      {/* Product Section */}
      <div className="accessories-products">
        <h2>Accessories Collection</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                {product.salePrice && (
                  <div className="sale-badge">Sale</div>
                )}
              </div>
              <h3>{product.name}</h3>
              <p className="product-price">
                <span className="original-price">Rs. {product.price}</span>
                <span className="sale-price"> Rs. {product.salePrice}</span>
              </p>
              <div className="product-actions">
                <button
                  className="action-btn add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="action-btn edit"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="action-btn delete"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Product Section */}
      <div className="add-product-form">
        <h3>Add New Product</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="salePrice"
          placeholder="Sale Price"
          value={form.salePrice}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleFormChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {/* Edit Product Section */}
      {editProduct && (
        <div className="edit-product-form">
          <h3>Edit Product</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="salePrice"
            placeholder="Sale Price"
            value={form.salePrice}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleFormChange}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setEditProduct(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default AccessoriesCategory;
