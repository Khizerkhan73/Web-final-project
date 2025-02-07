import React, { useState } from "react";
import axios from "axios";
import "./AddProductForm.css";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    salePrice: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/products", formData);
      alert("Product added successfully!");
      setFormData({ name: "", description: "", price: "", salePrice: "", image: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      ></textarea>
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Sale Price"
        value={formData.salePrice}
        onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
