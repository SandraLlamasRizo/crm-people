import React from "react";
import { NavLink } from "react-router";

function LoginUser() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="text-center text-3xl font-bold text-[#457FBF]">Inicia sesión</h2>
                <p className="text-center text-gray-600 mt-2">
                    ¡Encantados de volver a verte! Ingresa tus datos para iniciar sesión.
                </p>

                <form className="mt-8 mb-2">
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

                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="remember-me" className="mr-2" />
                        <label htmlFor="remember-me" className="text-gray-700 text-sm">Recuérdame</label>
                    </div>
                    <div className="flex gap-4 w-full justify-center">
                        <NavLink to={'/dashboard'}>
                            <button className="buttonPrincipal buttonPrincipal:hover">Iniciar sesión</button>
                        </NavLink>
                    </div>
                    <p className="text-center text-gray-600 mt-4">
                        ¿Has olvidado tu contraseña?{" "}
                        <a href="/resetpassword" className="font-extralight text-[#47A7BD] hover:underline">
                            Recúperala aquí
                        </a>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default LoginUser;
