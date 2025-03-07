import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import './NavBar.css';  Crearemos este archivo para estilos adicionales

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-dark bg-light NavBar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">Logo</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a 
            href="#" 
            className={`nav-link text-dark ${activeItem === 'home' ? 'active' : ''}`}
            onClick={() => handleItemClick('home')}
          >
            <i className="bi bi-house-door me-2"></i>
            Home
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className={`nav-link text-dark ${activeItem === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleItemClick('dashboard')}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className={`nav-link text-dark ${activeItem === 'empleados' ? 'active' : ''}`}
            onClick={() => handleItemClick('empleados')}
          >
            <i className="bi bi-table me-2"></i>
            Empleados
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className={`nav-link text-dark ${activeItem === 'departamentos' ? 'active' : ''}`}
            onClick={() => handleItemClick('departamentos')}
          >
            <i className="bi bi-grid me-2"></i>
            Departamentos
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className={`nav-link text-dark ${activeItem === 'antiguos-empleados' ? 'active' : ''}`}
            onClick={() => handleItemClick('antiguos-empleados')}
          >
            <i className="bi bi-person-circle me-2"></i>
            Antiguos Empleados
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>username</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">Crear nuevo empleado</a></li>
          <li><a className="dropdown-item" href="#">Recupera empleador</a></li>
          <li><a className="dropdown-item" href="#">Editar empleado</a></li>
          <li><a className="dropdown-item" href="#">Eliminar empleado</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Login user</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;