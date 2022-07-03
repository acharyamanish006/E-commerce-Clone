import React from 'react'
import './css/Shop.css'
import Product from './Product'
import RTX3060 from "../img/RTX3060Ti.png"
import RTX3070 from "../img/RTX3070Ti.png"
import RTX3080 from "../img/RTX3080Ti.png"
import RTX3090 from "../img/RTX3090.png"
import RX6800 from "../img/AMD_RX6800.png"
import RX6800xt from "../img/AMD_RX6800xt.png"
import GT730 from "../img/Graphic_Img/GT730.png"
import GTX1050TI from "../img/Graphic_Img/GTX1050TI.png"
import GTX1070 from "../img/Graphic_Img/GTX1070.png"
import GTX1080 from "../img/Graphic_Img/GTX1080.png"
import GTX1080TI from "../img/Graphic_Img/GTX1080TI.png"
import GTX1660 from "../img/Graphic_Img/GTX1660.png"

export default function Shop(props) {
  return (
    <div className='productContainer'>
        <div className='productWrapper'>
              <div className='productHeading'>
                <h3> {props.name}</h3>
              </div>
              <div className='productCollection'>
                <Product Img={RTX3090}    price={148} discountPrice={160}     />
                <Product Img={RX6800xt}   price={130} discountPrice={150}      />
                <Product Img={RTX3080}    price={148} discountPrice={160}      />
                <Product Img={RX6800}     price={128} discountPrice={150}     />
                <Product Img={GTX1050TI}  price={40} discountPrice={60}        />
                <Product Img={RTX3070}    price={118} discountPrice={130}      />
                <Product Img={GTX1080}    price={35} discountPrice={50}        />
                <Product Img={RTX3090}    price={148} discountPrice={160}      />
                <Product Img={GTX1070}    price={45} discountPrice={70}        />
                <Product Img={GTX1080TI}  price={48} discountPrice={70}        />
                <Product Img={GTX1660}    price={45} discountPrice={60}        />
                <Product Img={RTX3060}    price={118} discountPrice={130}      />
                <Product Img={GT730}      price={20} discountPrice={50}       />
                <Product Img={GTX1080}    price={35} discountPrice={50}        />
                <Product Img={GTX1070}    price={45} discountPrice={70}        />
                <Product Img={GTX1660}    price={45} discountPrice={60}        />
                <Product Img={RX6800}     price={128} discountPrice={150}     />
              </div>
              
        </div>
    </div>
  )
}

