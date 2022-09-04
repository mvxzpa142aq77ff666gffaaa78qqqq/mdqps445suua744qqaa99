import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./bodyCards.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AOS from "aos"
import "animate.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';





function BodyCards() {

  return (
    <div className='body-cards-container'>
      <div className='body-cards-container-resp'>

        <div className='card-container'>
          <div className='card-text-button-container'>
            <div className='card-text'>
              <h5>Nuestros Servicios</h5>
              <p>Desarrollo web, desarrollo mobil,
                desarrollo de software para gestion empresareal, implementacion de bases de datos...</p>
            </div>
            <div className='card-link-buttion'>
              <Link className='btn btn-primary' to="/servicios">Ver servicios</Link>
            </div>
          </div>

          <AnimationOnScroll animateIn="animate__wobble" duration={25}  initiallyVisible={true} className='card-image-container'>
            {/* <img src={serciosImg} alt="" srcset="" /> */}
            <LazyLoadImage
              className="imagenCard"
              effect="black-and-white"
              src={"https://res.cloudinary.com/mumbex/image/upload/c_thumb,w_200,g_face/v1660494915/service_w7nfso.png"}
            />
          </AnimationOnScroll>

        </div>

        <div className='card-container'>
          <div className='card-text-button-container'>
            <div className='card-text'>
              <h5>Productos</h5>
              <p>A parte de los trabajos que nos encargan, mumbeX lanza sus propios proyectos 
                que muchas veces son comprados...
                </p>
            </div>
            <div className='card-link-buttion'>
              <Link className='btn btn-primary' to="/productos">Ver productos</Link>
            </div>
          </div>

          <AnimationOnScroll animateIn="animate__swing" duration={20}  initiallyVisible={true} className='card-image-container'>
            {/* <img src={productosImg} alt="" srcset="" /> */}

            <LazyLoadImage
              className="imagenCard"
              effect="blur"
              src={"https://res.cloudinary.com/mumbex/image/upload/c_thumb,w_200,g_face/v1660494913/productos_w3sevh.png"}
            />
          </AnimationOnScroll>

        </div>



        <div className='card-container' style={{display:"none"}}>
          <div className='card-text-button-container'>
            <div className='card-text'>
              <h5>Nuestro blog </h5>
              <p>En esta seccion discutimos de varios temas concerniente solo y unicamente al mundo de la tecnologia...</p>
            </div>
            <div className='card-link-buttion'>
              <Link className='btn btn-primary' to="/blog">Ir al blog</Link>
            </div>
          </div>

          <AnimationOnScroll animateIn="animate__swing" duration={20}  initiallyVisible={true} className='card-image-container'>
            {/* <img src={blogImg} alt="" srcset="" /> */}
              <LazyLoadImage
                className="imagenCard"
                effect="blur"
                src={"https://res.cloudinary.com/mumbex/image/upload/c_thumb,w_200,g_face/v1660494910/blb_zgrbxd.png"}
              />

          </AnimationOnScroll>

        </div>



        <div className='card-container' >
          <div className='card-text-button-container'>
            <div className='card-text'>
              <h5>Sobre nosotros</h5>
              <p>Somos una empresa especializada en el desarrollo de software, trabajamos con cliente de todo tipo...</p>
            </div>
            <div className='card-link-buttion'>
              <Link className='btn btn-primary' to="/nosotros">Sobre nosotros</Link>
            </div>
          </div>

          <AnimationOnScroll animateIn="animate__shakeY" duration={20}  initiallyVisible= {true} className='card-image-container'>
            {/* <img src={nosotrosImg} alt="" srcset="" /> */}
            <LazyLoadImage
              className="imagenCard"
              effect="black-and-white"
              src={"https://res.cloudinary.com/mumbex/image/upload/c_thumb,w_200,g_face/v1660494946/us_s2kb8b.png"}
            />
          </AnimationOnScroll>

        </div>

      </div>
    </div>
  )
}

export default BodyCards