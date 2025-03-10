import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import MainRoutes from './routes.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header/>
    <NavBar />
    <Footer/>
    <MainRoutes />
  </BrowserRouter>
)
