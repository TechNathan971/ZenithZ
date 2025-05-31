import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

interface ProductsPageProps {
  category?: string;
}

export default function Products({ category }: ProductsPageProps) {
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  // Filter products by category if provided
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  // Apply additional filters
  const processedProducts = filteredProducts
    .filter(product => filterBy === "all" || product.category === filterBy)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseFloat(a.price) - parseFloat(b.price);
        case "price-high":
          return parseFloat(b.price) - parseFloat(a.price);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Products";

  const categoryMap: Record<string, string> = {
    phones: "iPhone",
    laptops: "Mac",
    tablets: "iPad",
    watches: "Watch",
    headphones: "AirPods"
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
              {category ? categoryMap[category] || categoryTitle : "All Products"}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {category 
                ? `Discover our complete ${categoryMap[category] || categoryTitle} lineup.`
                : "Explore our complete product lineup."
              }
            </p>
          </motion.div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={filterBy === "all" ? "default" : "secondary"} 
                className="cursor-pointer px-4 py-2"
                onClick={() => setFilterBy("all")}
              >
                All
              </Badge>
              <Badge 
                variant={filterBy === "phones" ? "default" : "secondary"} 
                className="cursor-pointer px-4 py-2"
                onClick={() => setFilterBy("phones")}
              >
                iPhone
              </Badge>
              <Badge 
                variant={filterBy === "laptops" ? "default" : "secondary"} 
                className="cursor-pointer px-4 py-2"
                onClick={() => setFilterBy("laptops")}
              >
                Mac
              </Badge>
              <Badge 
                variant={filterBy === "tablets" ? "default" : "secondary"} 
                className="cursor-pointer px-4 py-2"
                onClick={() => setFilterBy("tablets")}
              >
                iPad
              </Badge>
              <Badge 
                variant={filterBy === "watches" ? "default" : "secondary"} 
                className="cursor-pointer px-4 py-2"
                onClick={() => setFilterBy("watches")}
              >
                Watch
              </Badge>
              <Badge 
                variant={filterBy === "headphones" ? "default" : "secondary"} 
                className="cursor-pointer px-4 py-2"
                onClick={() => setFilterBy("headphones")}
              >
                AirPods
              </Badge>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {processedProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
                No products found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Try adjusting your filters or browse all products.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {processedProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <ProductCard
                    product={product}
                    variant="compact"
                    onBuyClick={(product) => {
                      console.log("Buy:", product);
                    }}
                    onLearnMoreClick={(product) => {
                      console.log("Learn more:", product);
                    }}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Get the latest updates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Be the first to know about new products, features, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-black dark:text-white"
              />
              <Button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
