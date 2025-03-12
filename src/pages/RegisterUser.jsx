import React from "react";
import { NavLink } from "react-router";

function RegisterUser() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="text-center text-3xl font-bold text-[#457FBF]">Regístrate</h2>
                <p className="text-center text-gray-600 mt-2">
                    ¡Encantados de conocerte! Ingresa tus datos para registrarte.
                </p>

                <form className="mt-8 mb-2">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                            Tu nombre
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name Lastname"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Tu correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="name@mail.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="********"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox text-[#47A7BD]" />
                            <span className="ml-2 text-gray-700">Acepto los {" "}
                                <a href="#" className="font-extralight text-[#47A7BD] hover:underline">
                                    Términos y Condiciones
                                </a>
                            </span>
                        </label>
                    </div>

                    <div className="flex gap-4 w-full justify-center">
                        <NavLink to={'/register'}>
                            <button className="buttonPrincipal buttonPrincipal:hover">Registrarse</button>
                        </NavLink>
                    </div>

                    <div className="flex gap-4 w-full justify-center">
                        <p className="text-center text-gray-600 mt-4">
                            ¿Ya tienes una cuenta?{" "}
                            <a href="/login" className="font-extralight text-[#47A7BD] hover:underline">
                                Inicia sesión aquí</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterUser;
