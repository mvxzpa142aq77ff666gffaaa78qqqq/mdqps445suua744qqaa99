
import React from 'react'
import "./blog.css"
import BlogChatStructur from '../../components/blogChat/blogChatStructur'
const Blog = () => {
  return (
    <div className='containerServicios'>
        <div className='containerServiciosResp'>
          <div className='containerServiciosList'><BlogChatStructur/></div>
          <div className='containerServiciosImage'>
            <div className='derviciosImageRigth'>
              <img src={"https://res.cloudinary.com/mumbex/image/upload/v1660494939/servicios_c0qbtl.png"}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blog
