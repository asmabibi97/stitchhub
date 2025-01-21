import React from 'react'
import Footer from '../Component/Footer'
import Togglebutton from '../Component/shop/Togglebutton'
import CategoriesWithProducts from '../Component/shop/categorieswithproducts'
import ProductPage from '../Component/productpage'



function shop() {
  return (
    <div>
   
  <CategoriesWithProducts/>
 <Footer/>
   <ProductPage/>
 <Togglebutton/>
    </div>
  )
}

export default shop
