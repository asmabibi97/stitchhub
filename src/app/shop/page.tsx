import React from 'react'
import Header from '../Component/shop/Header'
import ShopSection from '../Component/shop/Shopsection'
import Footer from '../Component/Footer'
import Featureproduct from '../Component/Featureproduct'
import Togglebutton from '../Component/shop/Togglebutton'


function shop() {
  return (
    <div>
    <Header/>
    <ShopSection/>
    <Footer/>
    <Featureproduct/>
 <Togglebutton/>
    </div>
  )
}

export default shop
