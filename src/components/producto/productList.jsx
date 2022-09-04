import React from 'react'
import "./productList.css"
import { Link } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll/dist/js/components'
import AOS from "aos"
import "animate.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductList() {
    return (
        <div>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig" initiallyVisible={true} className='productList'>
                <div className='productListTitleProduct'><Link to="/">Mercado semu</Link></div>
                <div className='productListImgs'>
                    <div className='productListImgTele'>
                        {/* <img
                            className="imagenProductosMobil"
                            src={"https://res.cloudinary.com/mumbex/image/upload/v1660494934/producto_isxht1.png"} 
                        /> */}
                        <LazyLoadImage
                            className="imagenProductosMobil"
                            effect="blur"
                            src={"https://res.cloudinary.com/mumbex/image/upload/v1660494934/producto_isxht1.png"}
                        />
                    </div>
                    <div className='productListImgMobil'>
                        <img
                            className="imagenProductosMobil"
                            src={"https://res.cloudinary.com/mumbex/image/upload/v1660494915/producto2_twq5co.png"} 
                        />

                        {/* <LazyLoadImage
                            className="imagenProductosMobil"
                            effect="blur"
                            src={"https://res.cloudinary.com/mumbex/image/upload/v1660494915/producto2_twq5co.png"} 
                        /> */}
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default ProductList