
import React , {useEffect} from 'react'
import "./services.css"
import ServiciosLista from '../../components/servicios/serviciosLista'
import { AnimationOnScroll } from 'react-animation-on-scroll/dist/js/components'
import "animate.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'



const Services = () => {
  useEffect(() => {

    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });

  })
  return (
    <div className='containerServicios top'>
      <div className='containerServiciosResp'>
        <div className='containerServiciosList'><ServiciosLista /></div>
        <div className='containerServiciosImage'>
          <div className='derviciosImageRigth'>
            {/* <img src={"https://res.cloudinary.com/mumbex/image/upload/v1660494939/servicios_c0qbtl.png"} /> */}
            <LazyLoadImage src={"https://res.cloudinary.com/mumbex/image/upload/v1660494939/servicios_c0qbtl.png"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
