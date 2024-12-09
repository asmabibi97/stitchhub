import React from 'react'
import Header2 from '../Component/Aboutus/Header2'
import Image from 'next/image'
import { FaFacebook, FaInstagram , FaTwitter ,FaLinkedin} from 'react-icons/fa';
import Footer from '../Component/Footer';

function team() {
  return (
    <div>
      <Header2/>
      {/* /////////////////hero section//////////////// */}
<div className="flex flex-col items-center justify-center px-4 py-8">
  <div className="text-center">
    <p className="text-sm uppercase tracking-wide text-gray-500">What we do</p>
    <h1 className="text-3xl font-bold mt-2">Innovation tailored for you</h1>
  </div>
  <div className="breadcrumb my-4 text-gray-600">
    <p className="text-sm">Home &gt; Team</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">

    <div className="md:col-span-1 md:row-span-2 overflow-hidden">
      <Image
        src="/images/unsplash_Lks7vei-eAg.png"
        alt="Team Member"
        className="rounded-lg object-cover h-full"
        width={500}
        height={600}
      />
    </div>

    
    <div className="overflow-hidden">
      <Image
        src="/images/unsplash_gMsnXqILjp4.png"
        alt="Team Member"
        className="rounded-lg object-cover"
        width={500}
        height={600}
      />
    </div>
    <div className="overflow-hidden">
      <Image
        src="/images/unsplash_1-aA2Fadydc.png"
        alt="Team Member"
        className="rounded-lg object-cover"
        width={500}
        height={600}
      />
    </div>

    
    <div className="overflow-hidden">
      <Image
        src="/images/unsplash_PSmDDeXaEWE.png"
        alt="Team Member"
        className="rounded-lg object-cover"
        width={500}
        height={600}
      />
    </div>
    <div className="overflow-hidden">
      <Image
        src="/images/unsplash_mcSDtbWXUZU.png"
        alt="Team Member"
        className="rounded-lg object-cover"
        width={500}
        height={600}
      />
    </div>
  </div>
</div>
{/* /////////////////////////////////////////////// */}
{/* //////////////////////////// meet our team section ////////////////////////////////// */}
<div className="px-4 md:px-16 py-16">
  {/* Heading and Paragraph */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Our team consists of talented professionals committed to delivering excellence and creating meaningful experiences.
    </p>
  </div>

  {/* Team Members */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
    {/* Team Member 1 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-1 (2).jpg"
        alt="Team Member 1"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-3">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-2 (5).jpg"
        alt="Team Member 2"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-3">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-3.jpg"
        alt="Team Member 3"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-3">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  </div>
  {/* /////////team col2/////////// */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-14">
    {/* Team Member 1 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-3.jpg"
        alt="Team Member 1"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-3">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-2 (2).jpg"
        alt="Team Member 2"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-3">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-1.jpg"
        alt="Team Member 3"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-3">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  </div>
{/* /////////team col3/////////// */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-14">
    {/* Team Member 1 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-2.jpg"
        alt="Team Member 1"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-3">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-2 (4).jpg"
        alt="Team Member 2"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-3">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-3 (2).jpg"
        alt="Team Member 3"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-3">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  </div>



</div>

     {/* ////////////////////14 days trial section///////////// */}
     <section className="bg-gray-50 py-12">
  <div className="text-center max-w-lg mx-auto">
    {/* Heading */}
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Start your 14 days free trial</h2>
    
    {/* Paragraph */}
    <p className="text-gray-600 mb-6">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
    </p>
    
    {/* Call-to-Action Button */}
    <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-blue-600 transition">
      Try it now
    </button>
    
    {/* Social Icons */}
    <div className="flex justify-center space-x-6 mt-6 text-gray-500">
      <a href="#" className="hover:text-blue-500"><FaTwitter className="text-2xl" /></a>
      <a href="#" className="hover:text-blue-500"><FaFacebook className="text-2xl" /></a>
      <a href="#" className="hover:text-blue-500"><FaInstagram className="text-2xl" /></a>
      <a href="#" className="hover:text-blue-500"><FaLinkedin className="text-2xl" /></a>
    </div>
  </div>
</section>


<Footer/>
    </div>
  )
}

export default team
