function EditEmployee() {
    return (
        <div className="container flex justify-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-center text-3xl font-medium text-[#457FBF]">Editar empleado</h2>
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
                        <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" required />
                    </div>
                    {/* Departamento */}

                    <div className="mb-3">
                        <label className="block text-gray-700">Departamento</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" required>
                            <option value="">Selecciona el departamento</option>
                            <option value="Uno">Dirección</option>
                            <option value="Dos">Desarrollo</option>
                            <option value="Tres">Diseño</option>
                            <option value="Cuatro">Recursos Humanos</option>
                            <option value="Cinco">Otro</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700">Salario</label>
                        <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" accept="image/*" required />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700">Observaciones</label>
                        <textarea
                            id="auto-textarea"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                            placeholder="Introduce texto..."
                            maxLength={500}
                        ></textarea>

                        <div className="text-right text-sm text-gray-500">0/500</div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="buttonPrincipal buttonPrincipal:hover">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditEmployee;