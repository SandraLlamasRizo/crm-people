import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useUserContext } from "../providers/EmployerProvider";

function LoginUser() {
    const navigate = useNavigate();
    const [User, setUser] = useUserContext(); // Destructuring solo el setter
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [alerta, setAlerta] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    
    const enviarFormulario = (data) => {
        loginUsuario(data);
    };

    const loginUsuario = async (usuario) => {
        try {
            const { data } = await axios.post('https://crm-empleados.onrender.com/api/usuarios/login', usuario);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.username);
            setUser(data.user); 
            setShowSuccessModal(true);
            setTimeout(() => {
                navigate("/dashboard"); //Llevamos al usuario registrado correctamente a la página de login!
            }, 3000);
        } catch (error) {
            console.error("Error en el login:", error.response?.data || error.message);
            setAlerta({
                type: 'error',
                message: 'Usuario o contraseña incorrectos. Intenta nuevamente.',
            });
        }
    };

    return (
        <div className="flex h-screen items-center justify-center mx-4">
            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center  bg-[#F4F9FD] bg-opacity-70 z-50">
                    <div className=" bg-white p-6 rounded-lg shadow-lg text-center m-30">
                        <h1>Bienvenido, {User.username} </h1>
                        <p className="text-gray-700 mb-4">En unos segundos te redigiremos a Dashboard</p>
                    </div>
                </div>
            )}
            <div className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="text-center text-3xl font-bold text-[#457FBF]">Inicia sesión</h2>
                <p className="text-center text-gray-600 mt-2">
                    ¡Encantados de volver a verte! Ingresa tus datos para iniciar sesión.
                </p>

                {alerta && (
                    <div className={`flex items-center p-4 mb-4 text-sm rounded-lg ${alerta.type === "error" ? "bg-red-50 text-red-800" : "bg-green-50 text-green-800"
                        }`} role="alert">
                        <svg className="shrink-0 inline w-4 h-4 mr-3 mt-[2px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span>{alerta.message}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit(enviarFormulario)} className="mt-8 mb-2">
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Tu correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'El correo es requerido',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'El formato del correo no es válido',
                                },
                            })}
                            placeholder="name@mail.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                            onInvalid={(e) => e.preventDefault()}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', {
                                required: 'La contraseña es requerida',
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                                    message: 'Debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial',
                                },
                            })}
                            placeholder="Introduce tu contraseña"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="remember-me" className="mr-2" />
                        <label htmlFor="remember-me" className="text-gray-700 text-sm">Recuérdame</label>
                    </div>

                    {/* Submit */}
                    <div className="flex gap-4 w-full justify-center">
                        <input
                            type="submit"
                            value="Iniciar sesión"
                            className=" buttonPrincipal buttonPrincipal:hover"
                        />

                    </div>

                    <p className="text-center text-gray-600 mt-4">
                        ¿No tienes cuenta todavía?{" "}
                        <a href="/register" className="font-extralight text-[#47A7BD] hover:underline">
                            Regístrate aquí
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginUser;
