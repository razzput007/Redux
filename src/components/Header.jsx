import React from 'react'

export default function Header(props) {
  return (
    <div>
        <div className="container1">
    <span className="cart-count" >{props.data.length}</span>
    <img  height="100px" src="https://media.istockphoto.com/id/1201806395/vector/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-concept-shopping-cart.jpg?s=612x612&w=0&k=20&c=KmXx8oRPoNgNzwhxu3zCsacUF-HSVMtpvGEi3hBbe2w="/>
        </div>
    </div>
  )
}
