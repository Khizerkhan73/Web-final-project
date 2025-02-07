const mongoose = require("mongoose");
const Product = require("./models/Product"); // Adjust path as per your project structure
require("dotenv").config();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Additional Bags Data
const additionalBags = [
  {
    name: "Splash Premium Tactical Bag Gray",
    category: "Bags",
    price: 5999,
    salePrice: 4999,
    image: "https://splash30.com/cdn/shop/files/DSC09980_1800x1800.jpg?v=1735304738",
    description: "Durable tactical bag in a sleek gray color.",
    url: "/collections/bags/products/splash-premium-tactical-bag",
  },
  {
    name: "Splash Premium Duffle Bag",
    category: "Bags",
    price: 4999,
    salePrice: 3999,
    image: "https://splash30.com/cdn/shop/files/DSC09983_1800x1800.jpg?v=1734712935",
    description: "Spacious and durable duffle bag for travel.",
    url: "/collections/bags/products/splash-premium-duffle-bag",
  },
  {
    name: "Pack-N-Go Duffel Bag Red",
    category: "Bags",
    price: 2800,
    salePrice: 2350,
    image: "https://splash30.com/cdn/shop/files/Pack-N-Go_Duffel_Bag_1_400x.png?v=1735498123",
    description: "Stylish red duffel bag for gym and travel.",
    url: "/collections/bags/products/pack-n-go-duffel-bag",
  },
  {
    name: "Anti-Theft Crossbody Bag - Grey",
    category: "Bags",
    price: 3600,
    salePrice: 3200,
    image: "https://splash30.com/cdn/shop/files/DSC00006_1800x1800.jpg?v=1735305288",
    description: "Modern anti-theft crossbody bag in grey.",
    url: "/collections/bags/products/anti-theft-crossbody-bag-grey",
  },
  {
    name: "Splash Backpack - Black",
    category: "Bags",
    price: 3800,
    salePrice: 1999,
    image: "https://splash30.com/cdn/shop/files/Splash_Backpack_-_Black-Neon_1_400x.png?v=1736582997",
    description: "Premium black backpack with neon highlights.",
    url: "/collections/bags/products/splash-backpack-black-neon",
  },
  {
    name: "The Splash Terra Lumbar Hip Pack",
    category: "Bags",
    price: 2200,
    salePrice: 1980,
    image: "https://splash30.com/cdn/shop/files/The_Splash_Terra_Lumbar_Hip_Pack_1_400x.png?v=1732467435",
    description: "Compact lumbar hip pack for outdoor adventures.",
    url: "/collections/bags/products/the-splash-terra-lumbar-hip-pack",
  },
  {
    name: "Pack-N-Go Duffel Bag Gray",
    category: "Bags",
    price: 2800,
    salePrice: 2350,
    image: "https://splash30.com/cdn/shop/files/Pack-N-GoDuffelBagGray_400x.png?v=1735306123",
    description: "Elegant gray duffel bag for multipurpose use.",
    url: "/collections/bags/products/pack-n-go-duffel-bag-gray",
  },
  {
    name: "Splash Backpack - Neon",
    category: "Bags",
    price: 3800,
    salePrice: 2499,
    image: "https://splash30.com/cdn/shop/files/Splash_Backpack_-_Black-Neon_2_400x.png?v=1736582997",
    description: "Vibrant neon backpack for urban lifestyle.",
    url: "/collections/bags/products/splash-backpack-neon",
  },
];

// Append the data to the database
const appendBags = async () => {
  try {
    await Product.insertMany(additionalBags);
    console.log("Additional bags successfully added!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error appending bags:", error);
    mongoose.connection.close();
  }
};

appendBags();
