import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, useLocation } from 'react-router' // Corregido 'react-router' -> 'react-router-dom'
import MainRoutes from './routes.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx'

function AppLayout() {
  const location = useLocation(); // Obtiene la URL actual
  const noLayoutPages = ['/', '/login', '/register', '/resetpassword', '/contacto' ];
  const isNoLayoutPage = noLayoutPages.includes(location.pathname);

  return (
    <>
      {!isNoLayoutPage && <NavBar />}
      {!isNoLayoutPage && <Header />}
      <MainRoutes />
      {!isNoLayoutPage && <Footer />}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);
