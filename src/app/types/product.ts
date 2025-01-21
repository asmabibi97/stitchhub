export interface Product {
    _id: string; // Sanity product ID
    name: string; // Product name
    price: number; // Product price
    description: string; // Product description
    imageUrl: string; // Product image URL
    category?: string; // Product category (optional)
    discountPercent?: number; // Discount percentage (optional)
    new?: boolean; // Is product new? (optional)
    colors?: string[]; // Available colors (optional)
    sizes?: string[]; // Available sizes (optional)
  }
  