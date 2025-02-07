import React, { useState, useEffect } from "react";
import "./ClothingCategory.css";

const ClothingCategory = () => {
  const [clothingProducts, setClothingProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    salePrice: "",
    category: "Clothing",
    image: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState("");

  // Fetch Clothing Products from Backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      const clothing = data.filter((product) => product.category === "Clothing");
      setClothingProducts(clothing);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add a Product
  const addProduct = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        fetchProducts(); // Refresh the list
        setNewProduct({
          name: "",
          price: "",
          salePrice: "",
          category: "Clothing",
          image: "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Delete a Product
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchProducts(); // Refresh the list
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Edit a Product
  const editProduct = (product) => {
    setIsEditing(true);
    setEditProductId(product._id);
    setNewProduct(product);
  };

  // Update a Product
  const updateProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${editProductId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProduct),
        }
      );
      if (response.ok) {
        fetchProducts(); // Refresh the list
        setIsEditing(false);
        setNewProduct({
          name: "",
          price: "",
          salePrice: "",
          category: "Clothing",
          image: "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Add to Cart (Dummy Logic)
  const addToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="clothing-category">
      <h2>Clothing</h2>
      <img
        src="//splash30.com/cdn/shop/files/BAG_BANNERArtboard_1_1_1944x.jpg?v=1737462926"
        alt="Clothing Banner"
        className="clothing-image"
      />
      <div className="form-section">
        <h3>{isEditing ? "Edit Product" : "Add Product"}</h3>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Sale Price"
          value={newProduct.salePrice}
          onChange={(e) =>
            setNewProduct({ ...newProduct, salePrice: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <textarea
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        ></textarea>
        <button onClick={isEditing ? updateProduct : addProduct}>
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </div>
      <div className="product-grid">
        {clothingProducts.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              Price: Rs. {product.salePrice} <span>Rs. {product.price}</span>
            </p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => editProduct(product)}>Edit</button>
            <button onClick={() => deleteProduct(product)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingCategory;
