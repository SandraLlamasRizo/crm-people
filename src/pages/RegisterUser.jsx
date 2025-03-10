import React from "react";

function RegisterUser() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-center text-3xl font-bold text-[#47A7BD]">Regístrate</h2>
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
                            <input type="checkbox" className="form-checkbox text-blue-500" />
                            <span className="ml-2 text-gray-700">Acepto los 
                                <a href="#" className="font-medium text-blue-500 hover:underline">
                                     Términos y Condiciones
                                </a>
                            </span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#47A7BD] text-white rounded-full px-6 py-3 hover:bg-gray-400 transition"
                    >
                        Registrarme
                    </button>

                    <p className="text-center text-gray-600 mt-4">
                        ¿Ya tienes una cuenta?{" "}
                        <a href="#" className="font-medium text-blue-500 hover:underline">
                            Inicia sesión aquí
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default RegisterUser;
