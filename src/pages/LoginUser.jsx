import React from "react";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";

function LoginUser() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    
    const enviarFormulario = (data) => {
        console.log(data);
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="text-center text-3xl font-bold text-[#457FBF]">Inicia sesión</h2>
                <p className="text-center text-gray-600 mt-2">
                    ¡Encantados de volver a verte! Ingresa tus datos para iniciar sesión.
                </p>

                <form onSubmit={handleSubmit(enviarFormulario)} className="mt-8 mb-2">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Tu correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                            required: {value: true, message: 'El correo es requerido'},
                            pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                                message: 'El formato del correo no es válido'}
                            })}
                            placeholder="name@mail.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                        {errors.email &&
                            <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert"><svg className="shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" /></svg><span className="sr-only">Atención</span><div><span className="font-medium">Asegúrese de que se cumplan los requisitos: </span>{errors.email.message }</div></div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', {
                            required: {value: true, message: 'La contraseña es requerida'},
                            pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, 
                                message: 'Debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial'}
                            })}
                            placeholder="Introduce tu contraseña"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                        {errors.password &&
                            <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert"><svg className="shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" /></svg><span className="sr-only">Atención</span><div><span className="font-medium">Asegúrese de que se cumplan los requisitos: </span>{errors.password.message }</div></div>}
                    </div>

                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="remember-me" className="mr-2" />
                        <label htmlFor="remember-me" className="text-gray-700 text-sm">Recuérdame</label>
                    </div>
                    <div className="flex gap-4 w-full justify-center">
                            <input type="submit" className="buttonPrincipal buttonPrincipal:hover"/>
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
