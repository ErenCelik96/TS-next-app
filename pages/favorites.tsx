import React, { useEffect} from 'react'
import { useSelector } from 'react-redux';

const favorites = () => {
  const favoriteList = useSelector((state: any) => state.likeButton.like);
  const products = useSelector((state: any) => state.products);
  console.log(favoriteList)
  console.log(products)
    let finalArray:any[] = [];

    favoriteList.map((item: any) => {
      products.map((product: any) => {
        if (item === product.id) {
          finalArray.push(product);
        }
      })
    })

  console.log(finalArray)  

  return (
    <div>
      {finalArray ?
      finalArray.map((fav: any, index: any) => (
        <div>
          <h1 key={index}>{fav.title}</h1>
        </div>
      ))  
      :
      <h1>No fav</h1>
    }
    </div>
  )
}

export default favorites;