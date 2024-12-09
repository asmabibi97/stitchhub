import { FaTwitter, FaStripe, FaAws, FaReddit, FaCar } from 'react-icons/fa'; // icons for Lyft, Stripe, AWS, Reddit, and Twitter
import { FaHooli } from "react-icons/fa";
import Footer from '../Component/Footer';
import Image from 'next/image';
import Header from '../Component/shop/Header';
import { IoIosArrowForward } from "react-icons/io";
import Logos from '../Component/shop/Logos';

function page() {
  return (
    <div>
      <Header />
      {/*..................... First Section with Gray Background .......................  */}
      <div className="font-sans">
        <div className="container mx-auto px-4 py-8 bg-gray-100">
          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[500px]">
                <Image 
                  src="/images/prductimage.jpg" 
                  alt="Product Image" 
                  width={500} 
                  height={500} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-4">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                    <Image 
                      src="/images/prductimage.jpg" 
                      alt="Thumbnail" 
                      width={100} 
                      height={100} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Floating Phone</h1>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-xl">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                <span className="text-gray-500">10 Reviews</span>
              </div>
              <p className="text-3xl text-gray-800 font-semibold">$1,139.33</p>
              <p className="text-sm text-green-600">Availability: <span className="font-bold">In Stock</span></p>
              <p className="text-gray-700 leading-relaxed">
                Met minim mollit non deserunt Alamo est sit cliquey dolor do amet sint. RELIT official consequat dolor ENIM RELIT Mollie. Excitation venial consequuntur sent nostrum met.
              </p>
              <div className="flex items-center space-x-4">
                <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
                <button className="w-8 h-8 bg-yellow-500 rounded-full"></button>
                <button className="w-8 h-8 bg-green-500 rounded-full"></button>
                <button className="w-8 h-8 bg-red-500 rounded-full"></button>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">Select Options</button>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-12">
            <div className="border-b">
              <nav className="flex space-x-6">
                <button className="py-2 px-4 border-b-2 border-blue-600 font-semibold">Description</button>
                <button className="py-2 px-4 text-gray-500 hover:text-gray-800">Additional Information</button>
                <button className="py-2 px-4 text-gray-500 hover:text-gray-800">Reviews (0)</button>
              </nav>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-6">
              {/* //////////////// Second Section with White Background /////////////////// */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <Image 
                  src="/images/card-item.png" 
                  alt="Description Image" 
                  width={400} 
                  height={500} 
                  className="w-full h-full object-cover mb-4"
                />
              </div>

              {/* Text Section 1 */}
              <div className="bg-white p-6">
                <h2 className="text-xl font-bold mb-4">The quick fox jumps over</h2>
                <p className="text-gray-700 leading-relaxed">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Additional details can be elaborated here for a more comprehensive view.
                </p>
              </div>

              {/* Text Section 2 */}
              <div className="bg-white p-6">
                <h2 className="text-xl font-bold mb-4">The quick fox jumps over</h2>
                <p className="flex items-center text-gray-700 leading-relaxed">
                  <IoIosArrowForward className="mr-2" />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center text-gray-700 leading-relaxed">
                  <IoIosArrowForward className="mr-2" />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center text-gray-700 leading-relaxed">
                  <IoIosArrowForward className="mr-2" />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center text-gray-700 leading-relaxed">
                  <IoIosArrowForward className="mr-2" />
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>

          {/* Bestseller Products Section with Gray Background */}
          <div className="mt-12 bg-gray-100">
            <h2 className="text-2xl font-bold mb-8">Bestseller Products</h2>
            {/* ////////////////product image////////////// */}
            {/* Product Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mb-24">
              {/* Product Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/images/product-cover-5 (6).png"
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="w-full rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Graphic Design</h3>
                  <p className="text-gray-500">English Department</p>
                  <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/images/product-cover-5 (7).png"
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="w-full rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Graphic Design</h3>
                  <p className="text-gray-500">English Department</p>
                  <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/images/product-cover-5 (10).png"
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="w-full rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Graphic Design</h3>
                  <p className="text-gray-500">English Department</p>
                  <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/images/product-cover-5 (9).png"
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="w-full rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Graphic Design</h3>
                  <p className="text-gray-500">English Department</p>
                  <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
                </div>
              </div>
            </div>
            {/* Second Product Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mb-24">
              {/* Product Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/images/product-cover-5 (4).png"
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="w-full rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Graphic Design</h3>
                  <p className="text-gray-500">English Department</p>
                  <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/images/product-cover-5 (5).png"
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="w-full rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Graphic Design</h3>
                  <p className="text-gray-500">English Department</p>
                  <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/images/product-cover-5 (10).png"
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="w-full rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Graphic Design</h3>
                  <p className="text-gray-500">English Department</p>
                  <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/images/product-cover-5 (9).png"
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="w-full rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Graphic Design</h3>
                  <p className="text-gray-500">English Department</p>
                  <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
                </div>
              </div>
            </div>
          </div>

          {/* Icons Section */}
          <Logos />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
