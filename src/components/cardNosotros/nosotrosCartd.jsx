import "./nosotrosCartd.css"
import { AnimationOnScroll } from "react-animation-on-scroll"
import "animate.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import React from 'react'

function NosotrosCartd() {
    return (
        <>
            <div className="nosotrosCard">
                <AnimationOnScroll animateIn="animate__shakeY" duration={20} initiallyVisible={true} className="nosotrosCardContainerImg">
                    <LazyLoadImage className="nosotrosCardImg1" effect="black-and-white"
                        src={"https://res.cloudinary.com/mumbex/image/upload/v1660495101/mumbex-banner_eldyjj.png"} alt="" />
                </AnimationOnScroll>
                <div className="nosotrosCardText">
                    <p>
                        Somos una empresa especializada en el desarrollo de software cuyo objetivo es resolver los distintos problemas de la sociedad utilizando nuevas tecnologias.
                    </p>
                </div>

                <AnimationOnScroll animateIn="animate__shakeY" duration={30} initiallyVisible={true} className="nosotrosCardContainerImg">
                    <LazyLoadImage className="nosotrosCardImg2" effect="black-and-white"
                        src={"https://res.cloudinary.com/mumbex/image/upload/v1660683238/aa_zmw1x9.png"} alt="" />
                </AnimationOnScroll>

                <div className="nosotrosCardText">
                    <p>
                    Buscamos competencia internacional creando productos de gran calidad que pueden ayudar a otros emprendedores mejorar los servicios que ofrecen en sus empresas y asi poder alcanzar sus metas.
                    </p>
                </div>
            </div>
        </>
    )
}

export default NosotrosCartd