import { products, type Product, type InsertProduct } from "@shared/schema";

export interface IStorage {
  getProduct(id: number): Promise<Product | undefined>;
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private currentId: number;

  constructor() {
    this.products = new Map();
    this.currentId = 1;
    
    // Initialize with some sample products
    this.seedProducts();
  }

  private async seedProducts() {
    const sampleProducts: InsertProduct[] = [
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
        name: "MacBook Air",
        category: "laptops",
        price: "1099.00",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Supercharged by M3. Ultralight and ultra-capable.",
        features: ["M3 chip", "18-hour battery", "Liquid Retina display", "MagSafe charging"],
        colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
        storage: ["256GB", "512GB", "1TB", "2TB"],
        inStock: true
      }
    ];

    for (const product of sampleProducts) {
      await this.createProduct(product);
    }
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category,
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async updateProduct(id: number, updateData: Partial<InsertProduct>): Promise<Product | undefined> {
    const existing = this.products.get(id);
    if (!existing) return undefined;
    
    const updated: Product = { ...existing, ...updateData };
    this.products.set(id, updated);
    return updated;
  }

  async deleteProduct(id: number): Promise<boolean> {
    return this.products.delete(id);
  }
}

export const storage = new MemStorage();
