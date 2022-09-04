import React from 'react'
import "./banner.css"
//import UseAppContext from '../../contex/useAppContex'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AOS from "aos"
import "animate.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';




const Banner = () => {
    //const { mensaje } = UseAppContext()
    const ScrollButtom = ()=>{
        window.scroll({
            left: 0,
            top:3000,
            behavior: 'smooth'
          });
    }
    return (
        <div className='banner-contenedor'>
            {/* ------------------------IMAGEN DE FONDO------------------------- */}
            <img className="bannerImagenFondo" alt="imagen" src={"https://res.cloudinary.com/mumbex/image/upload/v1660494919/fondo_mq1muz.jpg"} />
            <div className="filaImagenTexto">
                <div className="imagen">
                    {/* ---------------IMAGEN DE DE TELEFONO-------------- */}
                    {/* <img className="imagenMumbe" alt="imagen" src={foto} /> */}
                    <LazyLoadImage
                        className="imagenMumbe"
                        effect="blur"
                        src={"https://res.cloudinary.com/mumbex/image/upload/v1660495101/mumbex-banner_eldyjj.png"}
                    />
                </div>

                <div className='botonContactoContainer'>
                    <button onClick={ScrollButtom} className='btn botonContacto animate__animated animate__shakeX animate__slower animate__infinite'>Contactanos !</button>
                </div>


            </div>




        </div>
    )
}

export default Banner