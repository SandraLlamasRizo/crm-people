function NewEmployee() {
    return (
        <div className="container flex justify-center">
            <div className="w-full">
                    <h2 className="text-center text-3xl font-medium text-[#457FBF]">Añadir nuevo empleado</h2>
                    <form>
                        {/* Información Personal */}
                        <div className="mb-3">
                            <label className="block text-gray-700">Nombre</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" placeholder="Introducir nombre" required />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700">Apellidos</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" placeholder="Introducir apellidos" required />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700">Correo electrónico</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" placeholder="Introducir correo electrónico" required />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700">Teléfono</label>
                            <input type="number" placeholder="+34"className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" required />
                        </div>
                        {/* Departamento */}

                        <div className="mb-3">
                            <label className="block text-gray-700">Departamento</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" required>
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
                            <input type="number" placeholder="€" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" accept="image/*" required />
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
