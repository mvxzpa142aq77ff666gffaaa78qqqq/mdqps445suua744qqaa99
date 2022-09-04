import React, { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AOS from "aos"
import "animate.css"


import "./serviciosLista.css"
function ServiciosLista() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (

        <div className="servicios-bloque-2">
            <div className="servicios-bloque-2-1">
                <div className="contendor-servicios">


                    <div className="servicio-tipo" data-aos="fade-up">
                        <div className="linea-circulo-servicios">

                            <div class="servicio-icono">
                                <div className="servicio-tipo-titulo">
                                    <p className="display-6">Desarrollo  Web</p>
                                </div>
                                <AnimationOnScroll animateIn="animate__swing" duration={30} initiallyVisible={true} className='servicio-icono-resp'>

                                    {/* <img className="img-icono" src={"https://res.cloudinary.com/mumbex/image/upload/v1660494922/ser1_ujqsfe.png"} /> */}
                                    <LazyLoadImage
                                        src={"https://res.cloudinary.com/mumbex/image/upload/v1660494922/ser1_ujqsfe.png"}
                                        effect="blur"
                                        className="img-icono"
                                    />
                                </AnimationOnScroll>
                            </div>

                        </div>
                        <div className="servicio-tipo-titulo-text">

                            <div className="servicio-text">
                                <p>
                                    Mumbe X creamos paginas y aplicaciones web de todo tipo desde las mas simples hasta las mas complejas
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="servicio-tipo" >
                        <div className="linea-circulo-servicios">

                            <div class="servicio-icono">
                                <div className="servicio-tipo-titulo">
                                    <p className="display-6">Desarrollo mobil</p>
                                </div>
                                <AnimationOnScroll animateIn="animate__shakeY" duration={25} initiallyVisible={true} className='servicio-icono-resp'>
                                    <LazyLoadImage
                                        src={"https://res.cloudinary.com/mumbex/image/upload/v1660494911/mobil_kxm5dd.png"}
                                        effect="blur"
                                        className="img-icono"
                                    />
                                    {/* <img className="img-icono" src={"https://res.cloudinary.com/mumbex/image/upload/v1660494911/mobil_kxm5dd.png"} /> */}
                                </AnimationOnScroll>
                            </div>

                        </div>
                        <div className="servicio-tipo-titulo-text">

                            <div className="servicio-text">
                                <p>Creamos aplicaciones mobiles tanto para sistemas Android como IOS(Iphone).
                                    Te ayudamos a transformar tu idea en una aplicacion mobil
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="servicio-tipo" >
                        <div className="linea-circulo-servicios">

                            <div class="servicio-icono">
                                <div className="servicio-tipo-titulo">

                                    <p className="display-6">Programas de Escritorio</p>
                                </div>
                                <AnimationOnScroll animateIn="animate__shakeX" duration={20} initiallyVisible={true} className='servicio-icono-resp'>
                                    <LazyLoadImage
                                        src={"https://res.cloudinary.com/mumbex/image/upload/v1660494915/desktop_biqehi.png"}
                                        effect="blur"
                                        className="img-icono"
                                    />
                                    {/* <img className="img-icono" src={"https://res.cloudinary.com/mumbex/image/upload/v1660494915/desktop_biqehi.png"} /> */}
                                </AnimationOnScroll>
                            </div>

                        </div>
                        <div className="servicio-tipo-titulo-text">

                            <div className="servicio-text">
                                <p>Elimina las tarreas repetitivas en tu empresa , negocio etc e invierte este tiempo en otras cosas.
                                    mumbe X te crea un software que te  va a permitir automatizar , controlar , gestionar etc, ciertos procesos
                                    en tu empresa.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="servicio-tipo" data-aos="fade-up">
                        <div className="linea-circulo-servicios">

                            <div className="servicio-icono">
                                <div className="servicio-tipo-titulo">
                                    <p className="display-6">Bases de datos</p>
                                </div>
                                <AnimationOnScroll animateIn="animate__swing" duration={30} initiallyVisible={true} className='servicio-icono-resp'>
                                    <LazyLoadImage
                                        src={"https://res.cloudinary.com/mumbex/image/upload/v1660494914/datos_cgjpa0.png"}
                                        effect="blur"
                                        className="img-icono"
                                    />
                                    {/* <img className="img-icono" src={"https://res.cloudinary.com/mumbex/image/upload/v1660494914/datos_cgjpa0.png"} /> */}
                                </AnimationOnScroll>
                            </div>

                        </div>
                        <div className="servicio-tipo-titulo-text">

                            <div className="servicio-text">
                                <p>Te ayudamos a implementar  bases de datos  para tu empresa o negocio, que te permitiran almacenar todo tipo de informacion y asi utilizarla
                                    posteriormente.
                                    Con la informacion almacenada podras hacer estimaciones, inventarios, analisis etc, sobre el estado de tu empresa.

                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default ServiciosLista