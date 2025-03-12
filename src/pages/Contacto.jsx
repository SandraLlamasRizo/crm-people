import { NavLink } from "react-router";

function Contacto() {
    return (

        <div className="flex h-screen items-center justify-center">
            <div className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="text-center text-3xl font-bold text-[#457FBF]"> Contacto</h2>
                <p className="text-center text-gray-600 mt-2">
                    Cuéntanos en qué podemos ayudarte</p>

                <form className="mt-8 mb-2">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium text-gray-700">Nombre*</label>
                        <input type="text" id="name" required className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">Correo electrónico*</label>
                        <input type="email" id="email" required className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subject" className="block font-medium text-gray-700">Asunto*</label>
                        <input type="text" id="subject" required className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block font-medium text-gray-700">Mensaje*</label>
                        <textarea id="message" rows="5" required className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
                    </div>

                    <div className="flex items-center space-x-4 justify-center">
                        <div className="flex gap-4 w-full justify-center">
                            <button
                                type="submit"
                                className="buttonPrincipal buttonPrincipal:hover"
                            >Enviar
                            </button>
                        </div>

                        <div className="flex gap-4 w-full justify-center">
                            <NavLink to={'/'}>
                                <button className="buttonSecundario buttonSecundariol:hover">Volver</button>
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacto;