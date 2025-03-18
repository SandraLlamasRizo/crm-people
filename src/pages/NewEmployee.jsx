import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

function NewEmployee() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    // Traigo el token del localStorage:
    const token = localStorage.getItem('token');

    // Controlar la alerta de registro correcto:
    const [alerta, setAlerta] = useState(null);

    const enviarFormulario = (data) => {
        registrarEmpleado(data);
    };

    const registrarEmpleado = async (nuevoEmpleado) => {
        const config = {
            headers: {
                'Authorization': token,
            },
        };

        try {
            console.log(nuevoEmpleado);
            const { data } = await axios.post('https://crm-empleados.onrender.com/api/empleados', nuevoEmpleado, config);
            console.log(data);
            setAlerta({
                type: 'success',
                message: `El empleado ${nuevoEmpleado.nombre} ha sido registrado correctamente`,
            });
        } catch (error) {
            console.error("Error al registrar el empleado:", error);
            setAlerta({
                type: 'error',
                message: `Hubo un problema al registrar al empleado ${nuevoEmpleado.nombre}. Intenta nuevamente.`,
            });
        }
    };

    return (
        <div className="container flex justify-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-center text-3xl font-medium text-[#457FBF]"> Nuevo empleado</h2>
                <p className=" mb-5 mt-6 text-sm font-extralight  text-gray-500"> INFORMACIÓN PERSONAL:</p>

                {alerta && (
                    <div className={`flex items-center p-4 mb-4 text-sm rounded-lg ${alerta.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`} role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span><p>{alerta.message}</p></span>
                    </div>
                )}


                <form onSubmit={handleSubmit(enviarFormulario)}>
                    <div className="mb-3">
                        <label htmlFor="nombre"
                            className="block text-gray-700">
                            Nombre
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            {...register('nombre', {
                                required: { value: true, message: 'El nombre es requerido' }
                            })}
                            placeholder="Introducir nombre"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />

                        {errors.nombre &&
                            <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert"><svg className="shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" /></svg><span className="sr-only">Atención</span><div><span className="font-medium">Asegúrese de que se cumplan los requisitos: </span>{errors.nombre.message}</div></div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="apellidos"
                            className="block text-gray-700">
                            Apellidos
                        </label>
                        <input
                            id="apellidos"
                            type="text"
                            {...register('apellidos', {
                                required: { value: true, message: 'Los apellidos son requeridos' }
                            })}
                            placeholder="Introducir apellidos"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email"
                            className="block text-gray-700">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: { value: true, message: 'El correo es requerido' },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'El formato del correo no es válido'
                                }
                            })}
                            placeholder="Introducir correo electrónico"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                        {errors.email &&
                            <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert"><svg className="shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" /></svg><span className="sr-only">Atención</span><div><span className="font-medium">Asegúrese de que se cumplan los requisitos: </span>{errors.email.message}</div></div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono"
                            className="block text-gray-700">
                            Teléfono
                        </label>

                        <input
                            id="telefono"
                            type="tel"
                            {...register('telefono', {
                                required: { value: true, message: 'El teléfono es requerido' },
                                // pattern: {
                                //     value: /^\d{9}$/,
                                //     message: 'El formato del teléfono no es válido'
                                // }
                            })}
                            placeholder="+34"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                        {errors.telefono &&
                            <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert"><svg className="shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" /></svg><span className="sr-only">Atención</span><div><span className="font-medium">Asegúrese de que se cumplan los requisitos: </span>{errors.telefono.message}</div></div>}
                    </div>

                    <hr className="border-gray-300 mb-5 mt-6" />

                    <p
                        className=" mb-5 mt-6 text-sm font-extralight  text-gray-500">
                        INFORMACIÓN LABORAL:
                    </p>
                    <div className="mb-3">
                        <label htmlFor="departamento"
                            className="block text-gray-700">
                            Departamento
                        </label>

                        <select
                            id="departamento"
                            type="text"
                            {...register('departamento', {
                                required: { value: true, message: 'Debes seleccionar departamento' }

                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                            required>
                            <option value="">Selecciona el departamento</option>
                            <option value="direccion">Dirección</option>
                            <option value="desarrollo">Desarrollo</option>
                            <option value="diseno">Diseño</option>
                            <option value="recursos humanos">Recursos Humanos</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="salario" className="block text-gray-700">Salario</label>
                        <input
                            id="salario"
                            type="number"
                            {...register('salario', {
                                required: { value: true, message: 'Debes introducir números' },
                                // pattern: {
                                //     value: /^\d{9}$/                                }
                            })}
                            // placeholder="€"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />

                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="buttonPrincipal buttonPrincipal:hover">Añadir</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewEmployee;

