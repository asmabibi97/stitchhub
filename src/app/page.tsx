import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Footer from './Component/Footer'
import Editorpick from './Component/Editiorpick'
import Summer20 from './Component/Summer20'
import Neutraluniverse from './Component/Neutraluniverse'
import Featureproduct from './Component/Featureproduct'
import Featureblogpost from './Component/Featureblogpost'



function page() {
  return (
    <div>
    
  <Navbar/>
  <Hero/>
 <Editorpick/>
 <Featureproduct/>
  <Summer20/>
  <Neutraluniverse/>
  <Featureblogpost/>
  

 
  <Footer/>
    
    </div>
  )
}

export default page
