
import AppProvaider from './contex/AppProvaider';
import './App.css';
import {  BrowserRouter, Routes, Switch, Route,  HashRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Services from './pages/services/services';
import Products from './pages/products/products';
import Nosotros from './pages/nosotros/nosotros';
import Blog from './pages/blog/blog';
function App() {


  return (
    <AppProvaider>


      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/servicios" element={<Services />} />
          <Route exact path="/productos" element={<Products />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/blog" element={<Blog />} />

        </Routes>
        <Footer />

      </HashRouter>

    </AppProvaider>
  );
}

export default App;
