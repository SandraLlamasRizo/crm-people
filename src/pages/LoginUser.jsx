import React from 'react';

function LoginUser() {
    return (
        <div className="flex h-screen items-center justify-center">
            <main className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                    <img
                        className="mb-4 w-16 h-16"
                        src="./public/Logo_CRM.svg"
                        alt="Logo"
                    />
                    <h1 className="text-2xl font-light mb-3">Por favor, inicia sesión</h1>
                </div>

                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                    </div>

                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="remember-me" className="mr-2" />
                        <label htmlFor="remember-me" className="text-gray-700 text-sm">Remember me</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#47A7BD] text-white rounded-full px-6 py-3 hover:bg-gray-400 transition"
                    >
                        Iniciar sesión
                    </button>

                    <p className="mt-5 text-center text-gray-500 text-sm">© 2024–2025</p>
                </form>
            </main>
        </div>
    );
}

export default LoginUser;
