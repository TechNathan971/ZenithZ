import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@shared/schema";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Omit<Product, 'id'> & { id?: number };
  onBuyClick?: (product: ProductCardProps['product']) => void;
  onLearnMoreClick?: (product: ProductCardProps['product']) => void;
  variant?: "default" | "featured" | "compact";
}

export function ProductCard({ 
  product, 
  onBuyClick, 
  onLearnMoreClick,
  variant = "default" 
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    onBuyClick?.(product);
  };

  const handleLearnMoreClick = () => {
    onLearnMoreClick?.(product);
  };

  // Create a URL-safe slug from product name
  const productSlug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  if (variant === "featured") {
    return (
      <motion.div
        className="group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>
            <div className="mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <Link href={`/product/${productSlug}`}>
              <Button
                variant="link"
                className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline"
              >
                Learn more →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        className="group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="rounded-3xl overflow-hidden border-0 shadow-sm">
          <CardContent className="p-6 text-center">
            <Link href={`/product/${productSlug}`}>
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                From ${product.price}
              </p>
            </Link>
            <Button
              onClick={handleBuyClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium transition-all"
            >
              Buy
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-3xl overflow-hidden border-0 shadow-lg">
        <CardContent className="p-0">
          <Link href={`/product/${productSlug}`}>
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-200 mb-4">{product.description}</p>
                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-full"
                  >
                    Learn more
                  </Button>
                  <Button
                    onClick={handleBuyClick}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 rounded-full"
                  >
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
