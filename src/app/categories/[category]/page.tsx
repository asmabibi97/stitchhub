// app/categories/[category]/page.tsx
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface Props {
  params: { category: string }; // Capture category from the URL params
}

const CategoryProducts = async ({ params }: Props) => {
  const { category } = params; // Get category from URL params

  // Fetch products based on the category
  const products: Product[] = await client.fetch(
    `*[_type == "products" && category == $category]{
      _id,
      name,
      price,
      "imageUrl": image.asset->url
    }`,
    { category }
  );

  if (!category) {
    return <p className="text-center text-lg">Category not found</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6 capitalize">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md bg-white">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-lg font-bold text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
