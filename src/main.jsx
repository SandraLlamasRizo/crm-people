import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, useLocation } from 'react-router' // Corregido 'react-router' -> 'react-router-dom'
import MainRoutes from './routes.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx'
import EmployerProvider from './providers/EmployerProvider.jsx' // Ya he importado el provider!!

function AppLayout() {
  const location = useLocation(); // Obtiene la URL actual
  const noLayoutPages = ['/', '/login', '/register', '/resetpassword', '/contacto'];
  const isNoLayoutPage = noLayoutPages.includes(location.pathname);

  return (
    <>
      {!isNoLayoutPage && <NavBar />}
      {!isNoLayoutPage && <EmployerProvider>
        <Header />
      </EmployerProvider>}
      <PageContent />
      {!isNoLayoutPage && <Footer />}
    </>
  );
}

function PageContent() {
  return (
    <EmployerProvider>
      <MainRoutes />
    </EmployerProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);
