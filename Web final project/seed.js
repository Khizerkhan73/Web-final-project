const mongoose = require("mongoose");
const Product = require("./models/Product"); // Adjust the path to your Product model
const User = require("./models/User"); // Adjust the path to your User model
require("dotenv").config();
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Product data
const products = [
  {
    name: "Legends Tee Khabib",
    category: "Clothing",
    price: 2800,
    salePrice: 2550,
    image: "https://splash30.com/cdn/shop/files/Legends_Tee_Khbib04_1800x1800.jpg?v=1732564950",
    description: "Comfortable Legends Tee inspired by Khabib.",
    url: "/collections/clothing/products/legends-tee-khabib-2",
  },
  {
    name: "Legends Tee Imran Khan",
    category: "Clothing",
    price: 3000,
    salePrice: 2550,
    image: "https://splash30.com/cdn/shop/files/Legends_Tee_Khan_1800x1800.jpg?v=1732564928",
    description: "Legends Tee celebrating Imran Khan's legacy.",
    url: "/collections/clothing/products/legends-tee-khan",
  },
  {
    name: "Legends Tee Curry",
    category: "Clothing",
    price: 2800,
    salePrice: 2520,
    image: "https://splash30.com/cdn/shop/files/Legends_Tee_Curry_1800x1800.jpg?v=1732564953",
    description: "Legends Tee inspired by Stephen Curry.",
    url: "/collections/clothing/products/legends-tee-curry",
  },
  {
    name: "Legends Tee Ali",
    category: "Clothing",
    price: 3000,
    salePrice: 2550,
    image: "https://splash30.com/cdn/shop/files/Legends_Tee_Ali_1800x1800.jpg?v=1732564935",
    description: "Comfortable Legends Tee inspired by Muhammad Ali.",
    url: "/collections/clothing/products/legends-tee-ali-2",
  },
  {
    name: "Legends Tee Kobe Bryant",
    category: "Clothing",
    price: 3000,
    salePrice: 2550,
    image: "https://splash30.com/cdn/shop/files/Mamba01_1800x1800.jpg?v=1732564782",
    description: "Legends Tee honoring Kobe Bryant's legacy.",
    url: "/collections/clothing/products/legend-mamba",
  },
  {
    name: "BR Silence Hoodie",
    category: "Clothing",
    price: 6000,
    salePrice: 2950,
    image: "https://splash30.com/cdn/shop/files/BR_Silence3_1800x1800.jpg?v=1732564937",
    description: "Stylish hoodie for comfort and warmth.",
    url: "/collections/clothing/products/legends-tee",
  },
  {
    name: "BK Iron Club Hoodie",
    category: "Clothing",
    price: 6000,
    salePrice: 2950,
    image: "https://splash30.com/cdn/shop/files/BK_Iron_Club7_1800x1800.jpg?v=1735498591",
    description: "Stylish hoodie for casual and workout wear.",
    url: "/collections/clothing/products/bk-iron-club",
  },
  {
    name: "BL Silence Hoodie",
    category: "Clothing",
    price: 6000,
    salePrice: 2950,
    image: "https://splash30.com/cdn/shop/files/B_Silence6_1800x1800.jpg?v=1735499242",
    description: "Premium Silence hoodie for all occasions.",
    url: "/collections/clothing/products/b-silence-hoodie",
  },
  {
    name: "Legends Tee Ronaldo",
    category: "Clothing",
    price: 3000,
    salePrice: 2550,
    image: "https://splash30.com/cdn/shop/files/Splash_CR_1800x1800.jpg?v=1732564939",
    description: "Legends Tee inspired by Ronaldo's excellence.",
    url: "/collections/clothing/products/splash-cr",
  },
  {
    name: "Splash Premium Tactical Bag",
    category: "Bags",
    price: 5999,
    salePrice: 4999,
    image: "https://splash30.com/cdn/shop/files/DSC09980_1800x1800.jpg?v=1735304738",
    description: "Premium tactical bag designed for durability and style.",
    url: "/collections/bags/products/splash-premium-tactical-bag",
  },
  {
    name: "Splash Premium Duffle Bag",
    category: "Bags",
    price: 4999,
    salePrice: 3999,
    image: "https://splash30.com/cdn/shop/files/DSC09983_1800x1800.jpg?v=1734712935",
    description: "A durable duffle bag suitable for gym and travel.",
    url: "/collections/bags/products/splash-premium-duffle-bag",
  },
  {
    name: "Splash Premium Tactical Bag Gray",
    category: "Bags",
    price: 5999,
    salePrice: 4999,
    image: "https://splash30.com/cdn/shop/files/DSC09987_1800x1800.jpg?v=1735304899",
    description: "Gray version of the premium tactical bag.",
    url: "/collections/bags/products/splash-premium-tactical-bag-gray",
  },
  {
    name: "Anti-Theft Crossbody Bag - Grey",
    category: "Bags",
    price: 3600,
    salePrice: 3200,
    image: "https://splash30.com/cdn/shop/files/DSC00006_1800x1800.jpg?v=1735305288",
    description: "Anti-theft crossbody bag with modern features.",
    url: "/collections/bags/products/anti-theft-crossbody-bag-grey",
  },
  {
    name: "Knee Sleeves Neoprene",
    category: "Fitness Accessories",
    price: 2000,
    salePrice: 1800,
    image: "https://splash30.com/cdn/shop/files/Knee_Sleeves_Neoprene_1_1800x1800.png?v=1735305930",
    description: "Durable knee sleeves for support during workouts.",
    url: "/collections/accessories/products/knee-sleeves-neoprene",
  },
  {
    name: "Premium Leather Weightlifting Belt",
    category: "Fitness Accessories",
    price: 5000,
    salePrice: 4500,
    image: "https://splash30.com/cdn/shop/files/Premium_Leather_Weightlifting_Belt_1_1800x1800.png?v=1732469439",
    description: "Premium leather belt for professional weightlifting.",
    url: "/collections/accessories/products/premium-leather-weightlifting-belt",
  },
];
const users = [
    {
      username: "admin",
      email: "admin@example.com",
      password: "admin123", // Use plain text (not recommended in production)
      role: "admin",
    },
    {
      username: "user1",
      email: "user1@example.com",
      password: "password123", // Use plain text (not recommended in production)
      role: "user",
    },
    {
      username: "user2",
      email: "user2@example.com",
      password: "password123", // Use plain text (not recommended in production)
      role: "user",
    },
  ];
  
  const seedDatabase = async () => {
    try {
      // Clear existing data
      await Product.deleteMany();
      await User.deleteMany();
  
      // Insert new data
      await Product.insertMany(products);
      console.log("Product data successfully inserted!");
  
      await User.insertMany(users);
      console.log("User data successfully inserted!");
  
      mongoose.connection.close();
    } catch (error) {
      console.error("Error while seeding the database:", error);
      mongoose.connection.close();
    }
  };
  
  seedDatabase();