import React from 'react'

import Hero from './Component/Hero'
import Footer from './Component/Footer'
import Editorpick from './Component/Editiorpick'
import Summer20 from './Component/Summer20'
import Neutraluniverse from './Component/Neutraluniverse'

import Featureblogpost from './Component/Featureblogpost'
import ProductPage from './Component/productpage'




function page() {
  return (
    <div>
    
   
  <Hero/>
 <Editorpick/>
<ProductPage/>
  <Summer20/>
  <Neutraluniverse/>
  <Featureblogpost/>
  

 
  <Footer/>

    
    </div>
  )
}

export default page
