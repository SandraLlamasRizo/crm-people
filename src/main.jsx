import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, useLocation } from 'react-router' // Corregido 'react-router' -> 'react-router-dom'
import MainRoutes from './routes.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx'

function AppLayout() {
  const location = useLocation(); // Obtiene la URL actual
  const isLandingPage = location.pathname === "/"; // Verifica si es la landing

  return (
    <>
      {!isLandingPage && <NavBar />}
      {!isLandingPage && <Header />}
      <MainRoutes />
      {!isLandingPage && <Footer />}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);
