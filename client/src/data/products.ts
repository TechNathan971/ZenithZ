import { Product } from "@shared/schema";

export const products: Omit<Product, 'id'>[] = [
  {
    name: "iPhone 15 Pro",
    category: "phones",
    price: "999.00",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Titanium. So strong. So light. So Pro.",
    features: ["A17 Pro chip", "Pro camera system", "Action Button", "USB-C"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    inStock: true
  },
  {
    name: "iPhone 15",
    category: "phones",
    price: "799.00",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "New camera. New design. Newphoria.",
    features: ["A16 Bionic chip", "Advanced camera system", "Dynamic Island", "USB-C"],
    colors: ["Pink", "Yellow", "Green", "Blue", "Black"],
    storage: ["128GB", "256GB", "512GB"],
    inStock: true
  },
  {
    name: "MacBook Air",
    category: "laptops",
    price: "1099.00",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Supercharged by M3. Ultralight and ultra-capable.",
    features: ["M3 chip", "18-hour battery", "Liquid Retina display", "MagSafe charging"],
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    inStock: true
  },
  {
    name: "MacBook Pro",
    category: "laptops",
    price: "1599.00",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Mind-blowing. Head-turning.",
    features: ["M3 Pro chip", "22-hour battery", "Liquid Retina XDR display", "Magic Keyboard"],
    colors: ["Silver", "Space Black"],
    storage: ["512GB", "1TB", "2TB", "4TB"],
    inStock: true
  },
  {
    name: "iPad Pro",
    category: "tablets",
    price: "799.00",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Unbelievably thin. Incredibly powerful.",
    features: ["M4 chip", "Ultra Retina XDR display", "Apple Pencil Pro", "Magic Keyboard"],
    colors: ["Silver", "Space Black"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    inStock: true
  },
  {
    name: "iPad Air",
    category: "tablets",
    price: "599.00",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Two sizes. Faster chip. Does it all.",
    features: ["M2 chip", "Liquid Retina display", "Apple Pencil support", "USB-C"],
    colors: ["Blue", "Purple", "Pink", "Starlight", "Space Gray"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    inStock: true
  },
  {
    name: "Apple Watch Series 9",
    category: "watches",
    price: "399.00",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Smarter. Brighter. Mightier.",
    features: ["S9 SiP", "Double Tap", "Precision Finding", "Carbon neutral"],
    colors: ["Pink", "Starlight", "Silver", "Space Black", "Red"],
    storage: ["GPS", "GPS + Cellular"],
    inStock: true
  },
  {
    name: "Apple Watch Ultra 2",
    category: "watches",
    price: "799.00",
    image: "https://pixabay.com/get/g87b193f59cdcc1ee5235c0ba749130a7f9d3fb645ca5ed5d0484341fbf7e77971af2c4726abacdf17b7f7fe44d098bcfecf8487084aad2c534d8c94be4e94570_1280.jpg",
    description: "The most rugged and capable Apple Watch ever.",
    features: ["S9 SiP", "Titanium case", "100m water resistance", "36-hour battery"],
    colors: ["Natural", "Blue", "White"],
    storage: ["GPS + Cellular"],
    inStock: true
  },
  {
    name: "AirPods Pro",
    category: "headphones",
    price: "249.00",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Adaptive Audio. Now playing.",
    features: ["Adaptive Audio", "Active Noise Cancellation", "Transparency mode", "USB-C"],
    colors: ["White"],
    storage: ["32GB"],
    inStock: true
  },
  {
    name: "AirPods Max",
    category: "headphones",
    price: "549.00",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "The ultimate over-ear personal listening experience.",
    features: ["Active Noise Cancellation", "Spatial Audio", "Premium materials", "20-hour battery"],
    colors: ["Silver", "Space Gray", "Sky Blue", "Pink", "Green"],
    storage: ["Wireless"],
    inStock: true
  }
];
