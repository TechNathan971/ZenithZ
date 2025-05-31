import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  dark?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  primaryAction = "Learn more",
  secondaryAction = "Buy",
  onPrimaryClick,
  onSecondaryClick,
  dark = false
}: HeroSectionProps) {
  return (
    <section className={`pt-16 ${dark ? 'bg-black text-white' : 'bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gradient">
                {subtitle}
              </h2>
            )}
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              dark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'
            }`}>
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={onPrimaryClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
              >
                {primaryAction}
              </Button>
              <Button
                variant="outline"
                onClick={onSecondaryClick}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  dark 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {secondaryAction}
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="animate-float">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
