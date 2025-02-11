import React from 'react'
import HeaderComponent from '../components/Swswaca trabajo/HeaderComponent'

const Page = () => {
  return ( 
    <>   
      <div>
        <HeaderComponent/>
      </div>

      <div style={{textAlign: 'center'}}>
        <h1>Nuestros productos</h1>
      </div>

      <div style={{ display: "flex", gap: "20px", justifyContent: 'center'}}>
        <img src="/p1.PNG" alt="Imagen 1" style={{ width: "190px", height: "270px" }} />
        <img src="/p2.PNG" alt="Imagen 2" style={{ width: "190px", height: "270px" }} /> 
        <img src="/p3.PNG" alt="Imagen 3" style={{ width: "190px", height: "270px" }} />
        <img src="/p4.PNG" alt="Imagen 4" style={{ width: "190px", height: "270px" }} />
        <img src="/p5.PNG" alt="Imagen 5" style={{ width: "190px", height: "270px" }} />
        <img src="/p6.PNG" alt="Imagen 6" style={{ width: "190px", height: "270px" }} />
      </div>


    </>

  )
}

export default Page