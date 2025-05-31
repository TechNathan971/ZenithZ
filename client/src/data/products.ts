import { Product } from "@shared/schema";

export const products: Omit<Product, 'id'>[] = [
  // iPhones
  {
    name: "iPhone 15 Pro Max",
    category: "phones",
    price: "1199.00",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "The ultimate iPhone. Forged in titanium.",
    features: ["A17 Pro chip", "Pro camera system", "Action Button", "USB-C", "6.7-inch display"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storage: ["256GB", "512GB", "1TB"],
    inStock: true
  },
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
    name: "iPhone 15 Plus",
    category: "phones",
    price: "899.00",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Loved by millions. Built to last.",
    features: ["A16 Bionic chip", "Advanced camera system", "Dynamic Island", "USB-C", "6.7-inch display"],
    colors: ["Pink", "Yellow", "Green", "Blue", "Black"],
    storage: ["128GB", "256GB", "512GB"],
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
    name: "iPhone 14",
    category: "phones",
    price: "699.00",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "As amazing as ever.",
    features: ["A15 Bionic chip", "Dual camera system", "Ceramic Shield", "Lightning"],
    colors: ["Blue", "Purple", "Midnight", "Starlight", "Red"],
    storage: ["128GB", "256GB", "512GB"],
    inStock: true
  },
  {
    name: "iPhone SE",
    category: "phones",
    price: "429.00",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Lots to love. Less to spend.",
    features: ["A15 Bionic chip", "Advanced camera system", "Touch ID", "Lightning"],
    colors: ["Midnight", "Starlight", "Red"],
    storage: ["64GB", "128GB", "256GB"],
    inStock: true
  },

  // MacBooks
  {
    name: "MacBook Air 15-inch",
    category: "laptops",
    price: "1299.00",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Impressively big. Impossibly thin.",
    features: ["M3 chip", "18-hour battery", "15.3-inch Liquid Retina display", "MagSafe charging"],
    colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    inStock: true
  },
  {
    name: "MacBook Air 13-inch",
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
    name: "MacBook Pro 16-inch",
    category: "laptops",
    price: "2499.00",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Mind-blowing performance. Game-changing battery life.",
    features: ["M3 Max chip", "22-hour battery", "16.2-inch Liquid Retina XDR display", "Magic Keyboard"],
    colors: ["Silver", "Space Black"],
    storage: ["512GB", "1TB", "2TB", "4TB", "8TB"],
    inStock: true
  },
  {
    name: "MacBook Pro 14-inch",
    category: "laptops",
    price: "1599.00",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Mind-blowing. Head-turning.",
    features: ["M3 Pro chip", "18-hour battery", "14.2-inch Liquid Retina XDR display", "Magic Keyboard"],
    colors: ["Silver", "Space Black"],
    storage: ["512GB", "1TB", "2TB", "4TB"],
    inStock: true
  },
  {
    name: "iMac 24-inch",
    category: "laptops",
    price: "1299.00",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Say hello to the new iMac.",
    features: ["M3 chip", "4.5K Retina display", "1080p FaceTime HD camera", "Studio-quality mics"],
    colors: ["Blue", "Green", "Pink", "Silver", "Yellow", "Orange", "Purple"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    inStock: true
  },
  {
    name: "Mac Studio",
    category: "laptops",
    price: "1999.00",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Supercharged for pros.",
    features: ["M3 Max chip", "Extensive connectivity", "Compact design", "Quiet operation"],
    colors: ["Silver"],
    storage: ["512GB", "1TB", "2TB", "4TB", "8TB"],
    inStock: true
  },
  {
    name: "Mac Pro",
    category: "laptops",
    price: "6999.00",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "A beast of a workstation.",
    features: ["M3 Ultra chip", "Extreme performance", "Expandable design", "Pro workflows"],
    colors: ["Silver"],
    storage: ["1TB", "2TB", "4TB", "8TB"],
    inStock: true
  },

  // iPads
  {
    name: "iPad Pro 12.9-inch",
    category: "tablets",
    price: "1099.00",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Ultimate iPad experience with the largest display.",
    features: ["M4 chip", "12.9-inch Ultra Retina XDR display", "Apple Pencil Pro", "Magic Keyboard"],
    colors: ["Silver", "Space Black"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    inStock: true
  },
  {
    name: "iPad Pro 11-inch",
    category: "tablets",
    price: "799.00",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Unbelievably thin. Incredibly powerful.",
    features: ["M4 chip", "11-inch Ultra Retina XDR display", "Apple Pencil Pro", "Magic Keyboard"],
    colors: ["Silver", "Space Black"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    inStock: true
  },
  {
    name: "iPad Air 11-inch",
    category: "tablets",
    price: "599.00",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Serious performance. Surprisingly portable.",
    features: ["M2 chip", "11-inch Liquid Retina display", "Apple Pencil support", "USB-C"],
    colors: ["Blue", "Purple", "Pink", "Starlight", "Space Gray"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    inStock: true
  },
  {
    name: "iPad Air 13-inch",
    category: "tablets",
    price: "799.00",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Two sizes. Faster chip. Does it all.",
    features: ["M2 chip", "13-inch Liquid Retina display", "Apple Pencil support", "USB-C"],
    colors: ["Blue", "Purple", "Pink", "Starlight", "Space Gray"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    inStock: true
  },
  {
    name: "iPad 10th generation",
    category: "tablets",
    price: "449.00",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Colorfully reimagined.",
    features: ["A14 Bionic chip", "10.9-inch Liquid Retina display", "Apple Pencil support", "USB-C"],
    colors: ["Blue", "Pink", "Yellow", "Silver"],
    storage: ["64GB", "256GB"],
    inStock: true
  },
  {
    name: "iPad mini",
    category: "tablets",
    price: "499.00",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Mega performance. Mini design.",
    features: ["A15 Bionic chip", "8.3-inch Liquid Retina display", "Apple Pencil support", "USB-C"],
    colors: ["Space Gray", "Pink", "Purple", "Starlight"],
    storage: ["64GB", "256GB"],
    inStock: true
  },

  // Apple Watches
  {
    name: "Apple Watch Series 9 45mm",
    category: "watches",
    price: "429.00",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Smarter. Brighter. Mightier.",
    features: ["S9 SiP", "Double Tap", "Precision Finding", "Carbon neutral", "45mm"],
    colors: ["Pink", "Starlight", "Silver", "Space Black", "Red"],
    storage: ["GPS", "GPS + Cellular"],
    inStock: true
  },
  {
    name: "Apple Watch Series 9 41mm",
    category: "watches",
    price: "399.00",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Smarter. Brighter. Mightier.",
    features: ["S9 SiP", "Double Tap", "Precision Finding", "Carbon neutral", "41mm"],
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
    name: "Apple Watch SE",
    category: "watches",
    price: "249.00",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "A great deal to love.",
    features: ["S8 SiP", "Crash Detection", "Sleep tracking", "Swimproof"],
    colors: ["Midnight", "Starlight", "Silver"],
    storage: ["GPS", "GPS + Cellular"],
    inStock: true
  },

  // AirPods & Audio
  {
    name: "AirPods Pro (2nd generation)",
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
    name: "AirPods (3rd generation)",
    category: "headphones",
    price: "179.00",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Personalized Spatial Audio. Sweat and water resistant.",
    features: ["Personalized Spatial Audio", "Adaptive EQ", "Force sensor", "Lightning charging"],
    colors: ["White"],
    storage: ["Lightning", "MagSafe"],
    inStock: true
  },
  {
    name: "AirPods (2nd generation)",
    category: "headphones",
    price: "129.00",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Effortless. Wireless. Magical.",
    features: ["Quick access to Siri", "More than 24 hours total listening time", "Effortless setup"],
    colors: ["White"],
    storage: ["Lightning"],
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
  },
  {
    name: "HomePod",
    category: "headphones",
    price: "299.00",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Profound sound. Intelligent assistant. Smart home hub.",
    features: ["Computational audio", "Spatial Audio", "Siri integration", "Matter support"],
    colors: ["White", "Midnight"],
    storage: ["Wi-Fi"],
    inStock: true
  },
  {
    name: "HomePod mini",
    category: "headphones",
    price: "99.00",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Surprisingly big sound. Surprisingly intelligent.",
    features: ["360-degree audio", "Siri integration", "Smart home hub", "Intercom"],
    colors: ["White", "Space Gray", "Orange", "Yellow", "Blue"],
    storage: ["Wi-Fi"],
    inStock: true
  }
];
