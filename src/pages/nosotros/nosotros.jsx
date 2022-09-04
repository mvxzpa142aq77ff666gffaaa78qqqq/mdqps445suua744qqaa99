import React ,{useEffect}from 'react'
import NosotrosCartd from '../../components/cardNosotros/nosotrosCartd'
import "./nosotros.css"



const Nosotros = () => {
  useEffect(() => {

    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  
})
  return (
    <div className='nosotrosContainer'>
      <div className='nosotrosContainerResp'>
        <NosotrosCartd/>
      </div>
    </div>
  )
}

export default Nosotros