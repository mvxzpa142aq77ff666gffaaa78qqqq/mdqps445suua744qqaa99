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
                <div className='productListTitleProduct'><Link to={"#"} onClick={() => { window.open("https://semu-stores.herokuapp.com/#/") }}>Mercado semu</Link></div>
                <div className='productListImgs'>

                    <div className='productListImgTele'>
                        {/* <img
                            className="imagenProductosMobil"
                            src={"https://res.cloudinary.com/mumbex/image/upload/v1660494934/producto_isxht1.png"} 
                        /> */}
                        <Link to={"#!"} onClick={() => { window.open("https://semu-stores.herokuapp.com/#/") }}>
                            <LazyLoadImage
                                className="imagenProductosMobil"
                                effect="blur"
                                src={"https://res.cloudinary.com/mumbex/image/upload/v1660494934/producto_isxht1.png"}
                            />
                        </Link>
                    </div>
                    <div className='productListImgMobil'>
                        <Link to={"#"} onClick={() => { window.open("https://semu-stores.herokuapp.com/#/") }}>
                            <img
                                className="imagenProductosMobil"
                                src={"https://res.cloudinary.com/mumbex/image/upload/v1660494915/producto2_twq5co.png"}
                            />
                        </Link>
                        {/* <LazyLoadImage
                            className="imagenProductosMobil"
                            effect="blur"
                            src={"https://res.cloudinary.com/mumbex/image/upload/v1660494915/producto2_twq5co.png"} 
                        /> */}
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig" initiallyVisible={true} className='productList'>
                <div className='productListTitleProduct'><Link to={"#"} onClick={() => { alert("disponible a partir de 20 diciembre 2022") }}>selectividad.com</Link></div>
                <div className='productListImgs'>

                    <div className='productListImgTele'>
                        {/* <img
                            className="imagenProductosMobil"
                            src={"https://res.cloudinary.com/mumbex/image/upload/v1660494934/producto_isxht1.png"} 
                        /> */}
                        <Link to={"#!"} onClick={() => { alert("disponible a partir de 20 diciembre 2022")  }}>
                            <LazyLoadImage
                                className="imagenProductosMobil"
                                effect="blur"
                                src={"https://res.cloudinary.com/mumbex/image/upload/v1664730763/bacselect_hnuiag.png"}
                            />
                        </Link>
                    </div>
                    <div className='productListImgMobil'>
                        <Link to={"#"} onClick={() => { alert("disponible a partir de 20 diciembre 2022") }}>
                            <img
                                className="imagenProductosMobil"
                                src={"https://res.cloudinary.com/mumbex/image/upload/v1664731651/bacselectMobil_1_fve69s.png"}
                            />
                        </Link>
                        
                    </div> 
                </div>
            </AnimationOnScroll>

        </div>
    )
}

export default ProductList