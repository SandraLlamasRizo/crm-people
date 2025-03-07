import React from 'react';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="d-flex">
      <NavBar />
      <div className="content p-4 w-100">
        {/* Aquí va el contenido principal de tu aplicación */}
        <h1>Contenido principal</h1>
        <p>Este es el contenido principal de la aplicación.</p>
      </div>
    </div>
  );
}

export default App;