import { client } from "@/sanity/lib/client";
import Image from "next/image";
import AddToCart from "../../Component/cart";

interface Props {
  params: { id: string };
}

const ProductDetail = async ({ params }: Props) => {
  const { id } = params;

  // Fetch product data
  const product = await client.fetch(
    `
    *[_type == "products" && _id == $id][0] {
      name,
      price,
      description,
      "imageUrl": image.asset->url,
      category,
      discountPercent,
      new,
      colors,
      sizes
    }
  `,
    { id }
  );

  if (!product) {
    return <p className="text-center py-8">Product not found!</p>;
  }

  const discountedPrice =
    product.discountPercent > 0
      ? (product.price - (product.price * product.discountPercent) / 100).toFixed(2)
      : null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center items-center bg-white shadow-lg rounded-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg object-contain"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-sm text-gray-500 mt-2 capitalize">
              Category: {product.category}
            </p>

            <div className="mt-4">
              {discountedPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-red-600">
                    ${discountedPrice}
                  </span>
                  <span className="line-through text-gray-500">${product.price}</span>
                  <span className="text-green-600 text-sm font-medium">
                    Save {product.discountPercent}%
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-800">
                  ${product.price}
                </span>
              )}
            </div>

            <p className="text-gray-600 mt-6">{product.description}</p>

            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
