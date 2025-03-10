function NewEmployee() {
    return (
        <div className="container mx-auto mt-5 px-4 md:ml-70">
            <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-center text-3xl font-bold text-[#47A7BD]">Registro nuevo empleado</h2>
                        <form>
                            {/* Información Personal */}
                            <div className="mb-3">
                                <label className="block text-gray-700">Nombre</label>
                                <input type="text" className="w-full border p-2 rounded" placeholder="Introducir nombre" required />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700">Apellidos</label>
                                <input type="text" className="w-full border p-2 rounded" placeholder="Introducir apellidos" required />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700">Correo electrónico</label>
                                <input type="email" className="w-full border p-2 rounded" placeholder="Introducir correo electrónico" required />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700">Teléfono</label>
                                <input type="number" className="w-full border p-2 rounded" required />
                            </div>
                            {/* Departamento */}

                            <div className="mb-3">
                                <label className="block text-gray-700">Departamento</label>
                                <select className="w-full border p-2 rounded" required>
                                    <option value="">Selecciona el departamento</option>
                                    <option value="Uno">Uno</option>
                                    <option value="Dos">Dos</option>
                                    <option value="Tres">Tres</option>
                                    <option value="Cuatro">Cuatro</option>
                                    <option value="Cinco">Cinco</option>
                                </select>
                            </div>
                            
                            <div className="mb-3">
                                <label className="block text-gray-700">Salario</label>
                                <input type="number" className="w-full border p-2 rounded" accept="image/*" required />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Añadir</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewEmployee;
