import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router' // Corregido 'react-router' -> 'react-router-dom'
import MainRoutes from './routes.jsx'
import EmployerProvider from './providers/EmployerProvider.jsx' // Ya he importado el provider!!

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <EmployerProvider>
      <MainRoutes />
    </EmployerProvider>
  </BrowserRouter>
);
