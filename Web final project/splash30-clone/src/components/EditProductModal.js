import React, { useState } from "react";
import axios from "axios";
import "./EditProductModal.css";

const EditProductModal = ({ product, onClose, onProductUpdate }) => {
  const [formData, setFormData] = useState({ ...product });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${product._id}`, formData);
      onProductUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="edit-modal">
      <div className="modal-content">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
          <input
            type="number"
            value={formData.salePrice}
            onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
          />
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
          <button type="submit">Save Changes</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditProductModal;
