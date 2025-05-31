import { motion } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const showcaseProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="iPhone 15 Pro"
        subtitle=""
        description="Titanium. So strong. So light. So Pro."
        image="https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
        imageAlt="iPhone 15 Pro"
      />

      {/* Product Categories */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  variant="featured"
                  onLearnMoreClick={() => {
                    // Navigate to product detail
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section - Dark */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Watch Section */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Watch</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                A healthy leap ahead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">
                  Learn more
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all"
                >
                  Buy
                </Button>
              </div>
              <img
                src="https://pixabay.com/get/g87b193f59cdcc1ee5235c0ba749130a7f9d3fb645ca5ed5d0484341fbf7e77971af2c4726abacdf17b7f7fe44d098bcfecf8487084aad2c534d8c94be4e94570_1280.jpg"
                alt="Apple Watch"
                className="w-full max-w-md rounded-2xl"
              />
            </motion.div>

            {/* AirPods Section */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AirPods Pro
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Adaptive Audio. Now playing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">
                  Learn more
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all"
                >
                  Buy
                </Button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="AirPods Pro"
                className="w-full max-w-md rounded-2xl"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              The Zenith lineup.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Compare models. Find the one that's right for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {showcaseProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  variant="compact"
                  onBuyClick={() => {
                    // Handle buy action
                  }}
                />
              </motion.div>
            ))}
          </div>
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
              Stay in the loop.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest news about Zenith products, updates, and exclusive offers.
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
