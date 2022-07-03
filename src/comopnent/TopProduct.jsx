import React from 'react'
import './css/topProduct.css'
import Product from './Product'

export default function TopProduct(props) {
  return (
    <div className='ProductContainer'>
        <div className='ProductWrapper'>
              <div className='ProductHeading'>
                  <h3> {props.name}</h3>
              </div>
              <div className='ProductCollection'>
                <Product Img={props.img1} price={118} discountPrice={130} />
                <Product Img={props.img2} price={128} discountPrice={135} />
                <Product Img={props.img3} price={138} discountPrice={140} />
                <Product Img={props.img4} price={148} discountPrice={150} />
              </div>
              
        </div>
    </div>
  )
  
}
