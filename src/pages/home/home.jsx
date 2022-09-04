import React, { useEffect } from 'react'
import "./home.css"
import Banner from "../../components/banner/banner"
import BodyCards from '../../components/bodyHome/bodyCards'
//import Footer from '../../components/footer/footer'


const Home = () => {
  useEffect(() => {

      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    
  })
  return (
    <div className='home'>
      <Banner />

      <BodyCards />

    </div>
  )
}

export default Home