/* eslint-disable react/prop-types */
import React from "react"


export default function  Home(props) {
  console.log(props)
  return (
    <div>
   
  

    <h1>Home Component</h1>


    <div className="container">
         
        
        
       
        <div >
        
          <img alt="Iphone logo" height="200px" src="https://imageio.forbes.com/specials-images/imageserve/64f5cc83e226db23e585cc97/Apple--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--new-iPhone--iPhone-15-release-/960x0.jpg?format=jpg&width=960"/>
        </div>
        <div>
        <span>Iphone 15 ultra</span> <br/>
        <span>$2100</span>
        </div>
        <div>
       <button className="btn" onClick={()=>props.addToCartHandler({price:2100,name:"Iphone 15 ultra"})}>Add to cart</button>
       <button className="btn" onClick={()=>props.removeToCartHandler()}>Remove to cart</button>
        </div>
      
      </div>
      </div>
    
  )
}
