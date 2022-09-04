import React , {useEffect} from 'react'
import "./products.css"
import ProductList from '../../components/producto/productList'


const Products = () => {
  useEffect(() => {

    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  
})
  return (
    <div className='productosConatainer'>
      <div className='productosConatainerResp'>
        <div className='productosTitle'>
          <h4>Productos privados lanzados</h4>

        </div>
        <div className='productosTextDescrip'>
          <p>A parte de elaborrar proyectos externos que nos encargan nuestros clientes, tambien ejecutamos proyectos internos que surgen del analisis que hacemos en los distintos campos.</p>
        </div>

        <ProductList />
      </div>
    </div>
  )
}

export default Products