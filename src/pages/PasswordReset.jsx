import React from "react";

function PasswordReset() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="text-center text-3xl font-bold text-[#457FBF]">Recupera tu contraseña</h2>
                <p className="text-center text-gray-600 mt-2">
                    Sigue los pasos para restablecer tu contraseña de forma segura.
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
                            Nueva contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="********"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Repite tu nueva contraseña
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
                         <button
                        type="submit"
                        className="buttonPrincipal buttonPrincipal:hover"
                    >
                        Enviar
                        </button>
                    </div>

                    <p className="text-center text-gray-600 mt-4">
                        ¿Has recordado tu contraseña?{" "}
                        <a href="/login" className="font-extralight text-[#47A7BD] hover:underline">
                            Inicia sesión
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default PasswordReset;





// function PasswordReset() {
//     return (
//         <div className="flex h-screen items-center justify-center">
//             <div className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-2xl">
//                 {/* <div className="flex flex-col items-center"> */}

//                     {/* Step Indicator */}
//                     <div className="p-6">
//                         <div className="text-center mb-4">
                            
//                         <h2 className="text-center text-3xl font-bold text-[#457FBF]">Recupera tu contraseña</h2>
                            
//                         <p className="text-center text-gray-600 mt-2">Sigue los pasos para restablecer tu contraseña de forma segura</p>
//                         <p className="text-gray-500"></p>
//                         </div>
//                         <div className="flex justify-center items-center mb-4">
//                             <div className="w-8 h-8 flex items-center justify-center bg-[#47A7BD] text-white rounded-full">1</div>
//                             <div className="w-10 h-1 bg-gray-300 mx-2"></div>
//                             <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-500 rounded-full">2</div>
//                             <div className="w-10 h-1 bg-gray-300 mx-2"></div>
//                             <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-500 rounded-full">3</div>
//                         </div>

//                         {/* Step 1: Email Verification */}
//                         <div>
//                             <h5 className="text-lg font-medium mb-4  text-gray-700">Verificación de correo electrónico</h5>
//                             <form>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Correo electrónico</label>
//                                     <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" placeholder="Enter your email" required />
//                                     <p className="text-gray-500 text-sm mt-1">Te enviaremos un código de verificación a este correo electrónico</p>
//                                 </div>
//                                 <button className="w-full bg-[#47A7BD] text-white rounded-full px-6 py-3 hover:bg-gray-400 transition">Enviar código de verificación</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     );
// }

// export default PasswordReset;



       