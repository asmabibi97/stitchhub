// "use client";

// import AddToCart from "../../app/add";

// interface ProductDetailClientProps {
//   product: any;
// }

// const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
//   return (
//     <div className="mt-8">
//       <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//       <p className="text-sm text-gray-500 mt-2 capitalize">Category: {product.category}</p>

//       <div className="mt-4">
//         {product.discountPercent > 0 ? (
//           <div className="flex items-center gap-2">
//             <span className="text-2xl font-bold text-red-600">
//               ${(product.price - (product.price * product.discountPercent) / 100).toFixed(2)}
//             </span>
//             <span className="line-through text-gray-500">${product.price}</span>
//             <span className="text-green-600 text-sm font-medium">Save {product.discountPercent}%</span>
//           </div>
//         ) : (
//           <span className="text-2xl font-bold text-gray-800">${product.price}</span>
//         )}
//       </div>

//       <p className="text-gray-600 mt-6">{product.description}</p>

//       {/* AddToCart Component */}
//       <AddToCart product={product} />
//     </div>
//   );
// };

// export default ProductDetailClient;
