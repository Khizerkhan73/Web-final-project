import React, { useState, useEffect } from "react";
import "./BestSellers.css";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    salePrice: "",
    image: "",
  });

  // Fetch 5-6 products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data.slice(0, 6)); // Fetch only the first 6 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    alert(`Added "${product.name}" to cart!`);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      try {
        await fetch(`http://localhost:5000/api/products/${id}`, {
          method: "DELETE",
        });
        setProducts(products.filter((product) => product._id !== id));
        alert("Product deleted successfully.");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleUpdateProduct = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedProduct),
      });
      alert("Product updated successfully.");
      setProducts(
        products.map((product) =>
          product._id === id ? { ...product, ...selectedProduct } : product
        )
      );
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      setProducts([...products, data]);
      alert("Product added successfully.");
      setNewProduct({ name: "", price: "", salePrice: "", image: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <section className="best-sellers">
      <h2>BEST SELLERS</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <span className="sale-badge">Sale</span>
            </div>
            {selectedProduct?._id === product._id ? (
              <>
                <input
                  type="text"
                  value={selectedProduct.name}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, price: e.target.value })
                  }
                  placeholder="Price"
                />
                <input
                  type="number"
                  value={selectedProduct.salePrice}
                  onChange={(e) =>
                    setSelectedProduct({ ...selectedProduct, salePrice: e.target.value })
                  }
                  placeholder="Sale Price"
                />
                <button className="action-btn save" onClick={() => handleUpdateProduct(product._id)}>
                  Save
                </button>
                <button
                  className="action-btn cancel"
                  onClick={() => setSelectedProduct(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3>{product.name}</h3>
                <p className="product-price">
                  <span className="original-price">Rs. {product.price}</span> Rs.{" "}
                  {product.salePrice}{" "}
                  <span className="save-price">
                    Save Rs. {product.price - product.salePrice}
                  </span>
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
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="action-btn delete"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="add-product-form">
        <h3>Add New Product</h3>
        <input
          type="text"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          placeholder="Price"
        />
        <input
          type="number"
          value={newProduct.salePrice}
          onChange={(e) => setNewProduct({ ...newProduct, salePrice: e.target.value })}
          placeholder="Sale Price"
        />
        <input
          type="text"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          placeholder="Image URL"
        />
        <button className="action-btn add" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </section>
  );
};

export default BestSellers;
