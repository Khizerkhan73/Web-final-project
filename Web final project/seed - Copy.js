const mongoose = require("mongoose");
const Product = require("./models/Product"); // Adjust the path to your Product model
require("dotenv").config();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Extended dataset with more fitness accessories
const fitnessAccessories = [
  {
    name: "Premium Leather Weightlifting Belt",
    category: "Fitness Accessories",
    price: 5000,
    salePrice: 4500,
    image: "https://splash30.com/cdn/shop/files/Premium_Leather_Weightlifting_Belt_1_1800x1800.png?v=1732469439",
    description: "Premium leather belt for professional weightlifting.",
    url: "/collections/accessories/products/premium-leather-weightlifting-belt",
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
    name: "Resistance Bands Set",
    category: "Fitness Accessories",
    price: 1500,
    salePrice: 1200,
    image: "https://splash30.com/cdn/shop/files/resistance_bands_set_1800x1800.jpg?v=1735305930",
    description: "High-quality resistance bands for versatile workouts.",
    url: "/collections/accessories/products/resistance-bands-set",
  },
  {
    name: "Fitness Foam Roller",
    category: "Fitness Accessories",
    price: 3000,
    salePrice: 2500,
    image: "https://splash30.com/cdn/shop/files/fitness_foam_roller_1800x1800.jpg?v=1735305930",
    description: "Durable foam roller for muscle recovery and flexibility.",
    url: "/collections/accessories/products/fitness-foam-roller",
  },
  {
    name: "Adjustable Dumbbell Set",
    category: "Fitness Accessories",
    price: 10000,
    salePrice: 9000,
    image: "https://splash30.com/cdn/shop/files/adjustable_dumbbell_set_1800x1800.jpg?v=1735305930",
    description: "Space-saving adjustable dumbbell set for all fitness levels.",
    url: "/collections/accessories/products/adjustable-dumbbell-set",
  },
  {
    name: "Gym Gloves with Wrist Support",
    category: "Fitness Accessories",
    price: 1500,
    salePrice: 1200,
    image: "https://splash30.com/cdn/shop/files/gym_gloves_wrist_support_1800x1800.jpg?v=1735305930",
    description: "Comfortable and durable gloves with wrist support for workouts.",
    url: "/collections/accessories/products/gym-gloves-wrist-support",
  },
  {
    name: "Push-Up Bars",
    category: "Fitness Accessories",
    price: 2500,
    salePrice: 2000,
    image: "https://splash30.com/cdn/shop/files/push_up_bars_1800x1800.jpg?v=1735305930",
    description: "Sturdy push-up bars for enhanced upper body workouts.",
    url: "/collections/accessories/products/push-up-bars",
  },
  {
    name: "Ankle Weights",
    category: "Fitness Accessories",
    price: 1800,
    salePrice: 1500,
    image: "https://splash30.com/cdn/shop/files/ankle_weights_1800x1800.jpg?v=1735305930",
    description: "Adjustable ankle weights for added resistance training.",
    url: "/collections/accessories/products/ankle-weights",
  },
  {
    name: "Yoga Mat with Carry Strap",
    category: "Fitness Accessories",
    price: 3000,
    salePrice: 2800,
    image: "https://splash30.com/cdn/shop/files/yoga_mat_with_strap_1800x1800.jpg?v=1735305930",
    description: "Non-slip yoga mat with a convenient carry strap.",
    url: "/collections/accessories/products/yoga-mat-with-carry-strap",
  },
  {
    name: "Skipping Rope",
    category: "Fitness Accessories",
    price: 800,
    salePrice: 700,
    image: "https://splash30.com/cdn/shop/files/skipping_rope_1800x1800.jpg?v=1735305930",
    description: "Adjustable skipping rope for cardio and endurance training.",
    url: "/collections/accessories/products/skipping-rope",
  },
  {
    name: "Massage Gun Pro",
    category: "Fitness Accessories",
    price: 12000,
    salePrice: 11000,
    image: "https://splash30.com/cdn/shop/files/massage_gun_pro_1800x1800.jpg?v=1735305930",
    description: "Professional massage gun for deep muscle relaxation.",
    url: "/collections/accessories/products/massage-gun-pro",
  },
];

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Insert new products
    await Product.insertMany(fitnessAccessories);
    console.log("Fitness accessories data successfully inserted!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error while seeding the database:", error);
    mongoose.connection.close();
  }
};

// Execute the function
seedDatabase();
