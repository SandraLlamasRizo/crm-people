function PasswordReset() {
    return (
        <div className="container mx-auto py-5 px-4">
            <div className="flex justify-center">
                <div className="w-full max-w-lg">

                        {/* Step Indicator */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="text-center mb-4">
                            <h2 className="text-center text-3xl font-bold text-[#47A7BD]">Recupera tu contraseña</h2>
                        <p className="text-gray-500">Sigue los pasos para restablecer tu contraseña de forma segura</p>
                    </div>
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-8 h-8 flex items-center justify-center bg-[#47A7BD] text-white rounded-full">1</div>
                            <div className="w-10 h-1 bg-gray-300 mx-2"></div>
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-500 rounded-full">2</div>
                            <div className="w-10 h-1 bg-gray-300 mx-2"></div>
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-500 rounded-full">3</div>
                        </div>

                        {/* Step 1: Email Verification */}
                        <div>
                            <h5 className="text-lg font-medium mb-4  text-gray-700">Verificación de correo electrónico</h5>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Correo electrónico</label>
                                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" placeholder="Enter your email" required />
                                    <p className="text-gray-500 text-sm mt-1">Te enviaremos un código de verificación a este correo electrónico</p>
                                </div>
                                <button className="w-full bg-[#47A7BD] text-white rounded-full px-6 py-3 hover:bg-gray-400 transition">Enviar código de verificación</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordReset;
