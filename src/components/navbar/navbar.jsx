import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import {  AiFillHome } from 'react-icons/ai';
import {  RiTeamFill } from 'react-icons/ri';
import {  FaBlog } from 'react-icons/fa';
import {MdHomeRepairService, MdWebStories, MdContactMail} from 'react-icons/md'


const Navbar = () => {
    const ScrollButtom = ()=>{
        window.scroll({
            left: 0,
            top:6000,
            behavior: 'smooth'
          });
    }
    return (
        <>
            <nav className="navbar nav navbar-expand-lg navbar-light bg-dark text-light ">
                <div className="container-fluid ">

                    <Link className="navbar-brand text-light" to="/">
                        <img src={"https://res.cloudinary.com/mumbex/image/upload/v1660494910/logo1_ffq1qu.png"} className='logo' alt="logo" />
                        <span>mumbeX</span>
                    </Link>
                    <button className=" botonMenu " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >
                        <span className="navbar-toggler-icon white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav menu me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/servicios">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light " aria-current="page" to="/productos">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light " aria-current="page" to="/nosotros">Nosotros</Link>
                            </li>
                            <li className="nav-item" style={{display:"none"}}>
                                <Link className="nav-link text-light " aria-current="page" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light " aria-current="page" to="#" onClick={ScrollButtom} >Contacto</Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>

            {/* ---------- munu lateral -------------------------------------- */}
            <div className="offcanvas menuLateral offcanvas-start"  tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header ">
                    <h5 className="offcanvas-title text-light" id="offcanvasExampleLabel"></h5>
                    <button type="button" className="btn-close botonCerrar" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body " >
                    <ul className='' >

                        <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            
                            <Link className="nav-link   active" aria-current="page" to="/"><span><AiFillHome/></span>Inicio</Link>
                        </li>
                        <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <Link className="nav-link  active" aria-current="page" to="/servicios"><span><MdHomeRepairService/></span>Servicios</Link>
                        </li>
                        <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <Link className="nav-link  " aria-current="page" to="/productos"><span><MdWebStories/></span> Productos</Link>
                        </li>
                        <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <Link className="nav-link  " aria-current="page" to="/nosotros"><span><RiTeamFill/></span> Nosotros  </Link>
                        </li>
                        <li  style={{display:"none"}} className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <Link className="nav-link  " aria-current="page" to="/blog"><span><FaBlog/></span> Blog</Link>
                        </li>
                        <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <Link className="nav-link" aria-current="page" to="#" onClick={ScrollButtom}><span><MdContactMail/></span> Contacto</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </>

    )
}

export default Navbar;