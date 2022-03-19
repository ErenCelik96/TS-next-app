import React from 'react'
import { useSelector } from 'react-redux';

const favorites = () => {
  const cartList = useSelector((state: any) => state.cart.cart);
  const products = useSelector((state: any) => state.products);

  let finalArray: any[] = [];

  cartList.map((item: any) => {
    products.map((product: any) => {
      if (item === product.id) {
        finalArray.push(product);
      }
    })
  })

  return (
    <div>
      {finalArray ?
        finalArray.map((cart: any, index: any) => (
          <div>
            <h1 key={index}>{cart.title}</h1>
          </div>
        ))
        :
        <h1>No cart</h1>
      }
    </div>
  )
}

export default favorites;