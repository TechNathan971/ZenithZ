import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, Share2, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

interface ProductDetailProps {
  productId?: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  // Find product by converting slug back to match product name
  const product = products.find(p => {
    const productSlug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return productSlug === productId;
  }) || products[0];

  useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    if (product.storage && product.storage.length > 0) {
      setSelectedStorage(product.storage[0]);
    }
  }, [product]);

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.name !== product.name
  ).slice(0, 3);

  return (
    <div className="min-h-screen pt-16">
      {/* Product Details */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full bg-white/80 backdrop-blur"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full bg-white/80 backdrop-blur"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-black dark:text-white">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      (4.8)
                    </span>
                  </div>
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        variant={selectedColor === color ? "default" : "outline"}
                        onClick={() => setSelectedColor(color)}
                        className="rounded-full"
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage Selection */}
              {product.storage && product.storage.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Storage</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.storage.map((storage) => (
                      <Button
                        key={storage}
                        variant={selectedStorage === storage ? "default" : "outline"}
                        onClick={() => setSelectedStorage(storage)}
                        className="rounded-full"
                      >
                        {storage}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 rounded-full"
                >
                  Buy Now
                </Button>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specs">Tech Specs</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Overview</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {product.description} This innovative device represents the pinnacle of our engineering excellence, 
                    combining cutting-edge technology with elegant design to deliver an unparalleled user experience.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specs" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Display</span>
                      <span className="text-gray-600 dark:text-gray-400">6.1" Super Retina XDR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Chip</span>
                      <span className="text-gray-600 dark:text-gray-400">A17 Pro</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Camera</span>
                      <span className="text-gray-600 dark:text-gray-400">48MP Main</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Battery</span>
                      <span className="text-gray-600 dark:text-gray-400">All-day battery life</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">Amazing product!</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        "The build quality is exceptional and the performance is outstanding. 
                        Highly recommend this product to anyone looking for premium quality."
                      </p>
                      <p className="text-sm text-gray-500 mt-2">- John D.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="support" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Support & Resources</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Warranty</h4>
                      <p className="text-gray-600 dark:text-gray-400">1-year limited warranty included</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Support</h4>
                      <p className="text-gray-600 dark:text-gray-400">24/7 customer support available</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Returns</h4>
                      <p className="text-gray-600 dark:text-gray-400">30-day return policy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={relatedProduct}
                    variant="compact"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
