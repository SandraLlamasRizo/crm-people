// NotAccess.js
import React from 'react';
import { Link } from 'react-router';

function NotAccess() {
    return (
        <div className="bg-[#F4F9FD] text-[#457FBF] min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl md:text-8xl font-bold">401</h1>
                <p className="text-lg md:text-2xl font-medium mt-4">ACCESO NO AUTORIZADO</p>
                <p className="mt-4 mb-6 text-gray-600">
                    La página a la que estás intentando acceder no te permite.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        to="/login"
                        className="buttonSecundario"
                    >
                        <i className="bi bi-box-arrow-in-right mr-2"></i>
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="buttonSecundario"
                    >
                        <i className="bi bi-envelope me-2"></i>
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotAccess;
